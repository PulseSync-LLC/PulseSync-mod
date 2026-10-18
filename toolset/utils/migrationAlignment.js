const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const { isValidIdentifier } = require('@babel/types');
const crypto = require('crypto');

const hash = (value) => crypto.createHash('sha256').update(value).digest('hex');
const lookup = (map, key) => (map && Object.hasOwn(map, key) ? map[key] : undefined);
const OMIT = new Set(['start', 'end', 'loc', 'extra', 'leadingComments', 'trailingComments', 'innerComments', 'comments', 'tokens']);
const numericId = (value) => {
    const text = String(value);
    if (!/^\d+$/.test(text) || !Number.isSafeInteger(Number(text))) throw new Error(`Неверный webpack ID: ${value}`);
    return String(Number(text));
};

function parseUnit(text, module = true) {
    const prefix = module ? '({' : '';
    const ast = parser.parse(prefix + text + (module ? '\n})' : ''), { sourceType: 'unambiguous', allowReturnOutsideFunction: !module });
    const property = module ? ast.program.body[0]?.expression?.properties?.[0] : null;
    if (module && (!property?.value?.params || !property.value.body)) throw new Error('Ожидалась webpack factory property');
    let root;
    traverse(ast, {
        enter(p) {
            if ((!module && p.isProgram()) || (module && p.node === property.value)) {
                root = p.scope;
                p.stop();
            }
        },
    });
    if (!root) throw new Error('Не найден корневой lexical scope');
    const scopes = new Map(),
        byScope = new Map(),
        ordinals = new Map(),
        identifierPaths = new Map();
    const register = (scope, key, owner) => {
        const info = { key, scope, owner, kind: scope.path.isFunction() ? 'function' : scope.path.isClass() ? 'class' : scope.path.node.type };
        scopes.set(key, info);
        byScope.set(scope, info);
    };
    register(root, 'root', null);
    traverse(ast, {
        Identifier(p) {
            identifierPaths.set(p.node, p);
        },
        enter(p) {
            const scope = p.scope;
            if (!scope || scope.path !== p || byScope.has(scope) || !byScope.has(scope.parent)) return;
            const parent = byScope.get(scope.parent);
            let owner;
            if ((p.isFunctionDeclaration() || p.isClassDeclaration()) && p.node.id) owner = { type: 'binding', name: p.node.id.name };
            else {
                for (let current = p; current && current !== scope.parent.path; current = current.parentPath) {
                    if (current.isVariableDeclarator() && current.node.id.type === 'Identifier') {
                        owner = { type: 'binding', name: current.node.id.name };
                        break;
                    }
                    if ((current.isObjectProperty() || current.isObjectMethod() || current.isClassMethod()) && !current.node.computed) {
                        owner = { type: 'property', name: String(current.node.key.name ?? current.node.key.value) };
                        break;
                    }
                }
            }
            const label = owner ? `${owner.type}:${encodeURIComponent(owner.name)}` : p.node.type;
            const counter = `${parent.key}/${label}`;
            const ordinal = ordinals.get(counter) ?? 0;
            ordinals.set(counter, ordinal + 1);
            register(scope, `${counter}@${ordinal}`, owner);
        },
    });
    return { text, ast, root, property, scopes, byScope, identifierPaths, fingerprints: new WeakMap(), offset: prefix.length, module };
}

function semanticIdentifier(p) {
    if ((p.parentPath.isMemberExpression() || p.parentPath.isOptionalMemberExpression()) && p.key === 'property' && !p.parent.computed) return false;
    if ((p.parentPath.isObjectProperty() || p.parentPath.isObjectMethod() || p.parentPath.isClassMethod()) && p.key === 'key' && !p.parent.computed) return false;
    if (['LabeledStatement', 'BreakStatement', 'ContinueStatement', 'MetaProperty'].includes(p.parent.type)) return false;
    if (p.parentPath.isImportSpecifier() && p.key === 'imported') return false;
    if (p.parentPath.isExportSpecifier() && p.key === 'exported') return false;
    return p.isReferencedIdentifier() || p.isBindingIdentifier();
}

function applyEdits(text, edits, offset) {
    const sorted = [...edits.values()].sort((a, b) => a.start - b.start);
    for (let i = 1; i < sorted.length; i++) if (sorted[i].start < sorted[i - 1].end) throw new Error('Пересекающиеся AST edits');
    let output = text;
    for (const edit of sorted.reverse()) {
        const start = edit.start - offset,
            end = edit.end - offset;
        if (start < 0 || end > text.length) throw new Error('AST edit вне исходного текста');
        output = output.slice(0, start) + edit.text + output.slice(end);
    }
    return output;
}

function putEdit(edits, node, text, kind) {
    const key = `${node.start}:${node.end}`;
    const previous = edits.get(key);
    if (previous && previous.text !== text) throw new Error(`Несовместимые edits: ${key}`);
    edits.set(key, { start: node.start, end: node.end, text, kind });
}

function contracts(text, module, config, targetId) {
    const unit = parseUnit(text, module),
        edits = new Map();
    const requireBinding = module && unit.root.getOwnBinding(unit.property.value.params[2]?.name);
    const exportsBinding = module && unit.root.getOwnBinding(unit.property.value.params[1]?.name);
    const oldId = module ? String(unit.property.key.value ?? unit.property.key.name) : null;
    const required = (p) =>
        p?.isCallExpression() &&
        p.node.callee.type === 'Identifier' &&
        requireBinding &&
        p.scope.getBinding(p.node.callee.name) === requireBinding &&
        p.node.arguments[0]?.type === 'NumericLiteral'
            ? String(p.node.arguments[0].value)
            : null;
    const aliases = new Map();
    traverse(unit.ast, {
        VariableDeclarator(p) {
            const id = required(p.get('init'));
            const binding = p.node.id.type === 'Identifier' && p.scope.getBinding(p.node.id.name);
            if (id && binding?.constant) aliases.set(binding, id);
        },
    });
    const exportName = (id, name) => lookup(lookup(config.exports, id), name);
    const keyText = (name) => (isValidIdentifier(name, false) ? name : JSON.stringify(name));
    const renameKey = (p, name) => {
        if (p.node.shorthand) {
            const value = p.node.value.type === 'AssignmentPattern' ? p.node.value.left : p.node.value;
            if (value.type !== 'Identifier') throw new Error('Неподдержанный shorthand export pattern');
            putEdit(edits, value, `${keyText(name)}: ${value.name}`, 'export-key');
        } else putEdit(edits, p.node.key, p.node.key.type === 'StringLiteral' ? JSON.stringify(name) : keyText(name), 'export-key');
    };
    if (module && targetId !== undefined && oldId !== numericId(targetId)) putEdit(edits, unit.property.key, numericId(targetId), 'owner-module');
    traverse(unit.ast, {
        CallExpression(p) {
            const id = required(p);
            if (id && config.moduleIds?.[id] !== undefined) putEdit(edits, p.node.arguments[0], numericId(config.moduleIds[id]), 'require-module');
            const callee = p.node.callee;
            if (callee.type !== 'MemberExpression' || callee.object.type !== 'Identifier' || !requireBinding || p.scope.getBinding(callee.object.name) !== requireBinding)
                return;
            if (callee.property.name === 'e' && p.node.arguments[0]?.type === 'NumericLiteral') {
                const next = config.chunkIds?.[String(p.node.arguments[0].value)];
                if (next !== undefined) putEdit(edits, p.node.arguments[0], numericId(next), 'lazy-chunk');
            }
            if (
                callee.property.name === 'd' &&
                p.node.arguments[0]?.type === 'Identifier' &&
                p.scope.getBinding(p.node.arguments[0].name) === exportsBinding &&
                p.node.arguments[1]?.type === 'ObjectExpression'
            ) {
                for (const prop of p.get('arguments.1.properties')) {
                    const name = String(prop.node.key?.name ?? prop.node.key?.value);
                    const next = exportName(oldId, name);
                    if (next !== undefined && next !== name) renameKey(prop, next);
                }
            }
        },
        MemberExpression: renameMember,
        OptionalMemberExpression: renameMember,
        VariableDeclarator(p) {
            const id = required(p.get('init'));
            if (!id || p.node.id.type !== 'ObjectPattern') return;
            for (const prop of p.get('id.properties')) {
                if (!prop.isObjectProperty() || prop.node.computed) continue;
                const name = String(prop.node.key.name ?? prop.node.key.value),
                    next = exportName(id, name);
                if (next !== undefined && next !== name) renameKey(prop, next);
            }
        },
        StringLiteral(p) {
            const next = lookup(config.strings, p.node.value);
            if (next === undefined) return;
            if (edits.has(`${p.node.start}:${p.node.end}`)) return;
            putEdit(edits, p.node, JSON.stringify(next), 'exact-string');
        },
    });
    function renameMember(p) {
        const object = p.get('object');
        const id = required(object) ?? (object.isIdentifier() ? aliases.get(p.scope.getBinding(object.node.name)) : null);
        const name = !p.node.computed ? p.node.property.name : p.node.property.type === 'StringLiteral' ? p.node.property.value : null;
        const next = id && name !== null ? exportName(id, name) : undefined;
        if (next === undefined || next === name) return;
        if (p.node.computed) putEdit(edits, p.node.property, JSON.stringify(next), 'dependency-export');
        else if (isValidIdentifier(next, false)) putEdit(edits, p.node.property, next, 'dependency-export');
        else putEdit(edits, { start: p.node.object.end, end: p.node.end }, `${p.node.optional ? '?.' : ''}[${JSON.stringify(next)}]`, 'dependency-export');
    }
    return { text: applyEdits(text, edits, unit.offset), changes: [...edits.values()] };
}

function patternRole(node, name, role = '') {
    if (!node) return null;
    if (node.type === 'Identifier') return node.name === name ? role : null;
    if (node.type === 'AssignmentPattern') return patternRole(node.left, name, role);
    if (node.type === 'RestElement') return patternRole(node.argument, name, role + '.rest');
    const parts =
        node.type === 'ObjectPattern'
            ? node.properties.map((prop) => [prop.value ?? prop.argument, '.' + (prop.key?.name ?? prop.key?.value ?? 'rest')])
            : node.type === 'ArrayPattern'
              ? node.elements.map((part, index) => [part, `[${index}]`])
              : [];
    for (const [part, suffix] of parts) {
        const found = patternRole(part, name, role + suffix);
        if (found !== null) return found;
    }
    return null;
}

function fingerprint(unit, node) {
    if (!node) return 'null';
    if (unit.fingerprints.has(node)) return unit.fingerprints.get(node);
    const symbols = new Map();
    const canonical = (value, parent, field) => {
        if (!value || typeof value !== 'object') return value;
        if (Array.isArray(value)) return value.map((child) => canonical(child, parent, field));
        if (value.type === 'Identifier') {
            const p = unit.identifierPaths.get(value);
            if (p && semanticIdentifier(p)) {
                const binding = p.scope.getBinding(value.name);
                if (binding) {
                    if (!symbols.has(binding)) symbols.set(binding, `$${symbols.size}`);
                    return { type: 'Identifier', name: symbols.get(binding) };
                }
            }
            return { type: 'Identifier', name: value.name };
        }
        return Object.fromEntries(
            Object.entries(value)
                .filter(
                    ([key]) =>
                        !OMIT.has(key) &&
                        key !== 'shorthand' &&
                        !(key === 'id' && ['FunctionDeclaration', 'ClassDeclaration', 'FunctionExpression'].includes(value.type)),
                )
                .map(([key, child]) => [key, canonical(child, value, key)]),
        );
    };
    const result = hash(JSON.stringify(canonical(node)));
    unit.fingerprints.set(node, result);
    return result;
}

function bindings(unit, info) {
    return Object.values(info.scope.bindings)
        .sort((a, b) => a.identifier.start - b.identifier.start)
        .map((binding, index) => {
            const p = binding.path;
            let role = '',
                value = p.node;
            if (binding.kind === 'param') {
                const params = info.scope.path.node.params ?? [];
                for (const [position, param] of params.entries()) {
                    const found = patternRole(param, binding.identifier.name);
                    if (found !== null) {
                        role = `param:${position}:${found}`;
                        break;
                    }
                }
                value = null;
            } else if (p.isVariableDeclarator()) {
                role = patternRole(p.node.id, binding.identifier.name) ?? '';
                value = p.node.init;
            }
            return {
                name: binding.identifier.name,
                binding,
                index,
                role,
                type: binding.kind === 'param' ? 'param' : (value?.type ?? 'null'),
                signature: `${role}:${fingerprint(unit, value)}`,
            };
        });
}

function matchBindings(oldRows, newRows, overrides, gapLimit) {
    const mapping = [],
        used = new Set();
    const add = (old, fresh, method, donor) => {
        if (!old || !fresh) throw new Error(`Не найден binding в ручном соответствии: ${JSON.stringify({ old: old?.name, fresh: fresh?.name })}`);
        if (mapping.some((row) => row.from === old.name) || used.has(fresh.name)) throw new Error(`Неоднозначное соответствие binding: ${old.name} -> ${fresh.name}`);
        mapping.push({ from: old.name, to: fresh.name, oldIndex: old.index, newIndex: fresh.index, method, donor: donor ?? old.name });
        used.add(fresh.name);
    };
    for (const pair of overrides)
        add(
            oldRows.find((row) => row.name === pair.from),
            newRows.find((row) => row.name === pair.to),
            'manual',
            pair.donor,
        );
    for (const old of oldRows.filter((row) => row.type === 'param')) {
        if (mapping.some((row) => row.from === old.name)) continue;
        const fresh = newRows.find((row) => row.type === 'param' && row.role === old.role && !used.has(row.name));
        if (fresh) add(old, fresh, 'parameter-role');
    }
    for (const old of oldRows) {
        if (mapping.some((row) => row.from === old.name)) continue;
        const olds = oldRows.filter((row) => row.signature === old.signature);
        const news = newRows.filter((row) => row.signature === old.signature);
        if (olds.length === 1 && news.length === 1 && !used.has(news[0].name)) add(old, news[0], 'unique-shape');
    }
    const oldValues = oldRows.filter((row) => row.type !== 'param'),
        freshValues = newRows.filter((row) => row.type !== 'param');
    const bounds = [
        { oldIndex: -1, newIndex: -1 },
        ...mapping.filter((pair) => oldRows[pair.oldIndex].type !== 'param').sort((a, b) => a.oldIndex - b.oldIndex),
        { oldIndex: oldRows.length, newIndex: newRows.length },
    ];
    for (let i = 1; i < bounds.length; i++) {
        const left = bounds[i - 1],
            right = bounds[i];
        if (right.newIndex <= left.newIndex) continue;
        const olds = oldValues.filter((row) => row.index > left.oldIndex && row.index < right.oldIndex);
        const news = freshValues.filter((row) => row.index > left.newIndex && row.index < right.newIndex);
        if (
            !olds.length ||
            olds.length !== news.length ||
            olds.length > gapLimit ||
            olds.some((row) => mapping.some((pair) => pair.from === row.name)) ||
            news.some((row) => used.has(row.name))
        )
            continue;
        if (!olds.every((row, index) => row.type === news[index].type && row.role === news[index].role)) continue;
        olds.forEach((old, index) => add(old, news[index], 'order-gap-draft'));
    }
    return mapping;
}

function buildMapping(base, target, donor, config) {
    const scopes = [],
        used = new Set();
    const add = (from, to, method, donorKey) => {
        if (!base.scopes.has(from) || !target.scopes.has(to)) throw new Error(`Не найден scope: ${from} -> ${to}`);
        const existing = scopes.find((row) => row.from === from);
        if (existing) {
            if (existing.to !== to) throw new Error(`Противоречивое соответствие scope ${from}`);
            return;
        }
        if (used.has(to)) throw new Error(`Target scope уже сопоставлен: ${to}`);
        if (base.scopes.get(from).kind !== target.scopes.get(to).kind) throw new Error(`Несовместимые scope kinds: ${from} -> ${to}`);
        if (donorKey && !donor.scopes.has(donorKey)) throw new Error(`Не найден ручной donor scope: ${donorKey}`);
        let donorScope = donorKey ?? (donor.scopes.has(from) ? from : null);
        const old = base.scopes.get(from);
        if (
            !donorKey &&
            from !== 'root' &&
            !old.owner &&
            donorScope &&
            fingerprint(base, old.scope.path.node) !== fingerprint(donor, donor.scopes.get(donorScope).scope.path.node)
        )
            donorScope = null;
        if (donorScope && scopes.some((row) => row.donor === donorScope)) throw new Error(`Donor scope уже сопоставлен: ${donorScope}`);
        scopes.push({ from, to, donor: donorScope, method });
        used.add(to);
    };
    add('root', 'root', 'root');
    for (const pair of config.scopes ?? []) add(pair.from, pair.to, 'manual', pair.donor);
    for (let index = 0; index < scopes.length; index++) {
        const row = scopes[index],
            oldInfo = base.scopes.get(row.from),
            freshInfo = target.scopes.get(row.to);
        const oldRows = bindings(base, oldInfo),
            freshRows = bindings(target, freshInfo);
        row.mapping = matchBindings(
            oldRows,
            freshRows,
            (config.bindings ?? []).filter((pair) => (pair.scope ?? 'root') === row.from),
            row.from === 'root' ? 20 : 8,
        );
        row.unresolved = oldRows.filter((old) => !row.mapping.some((pair) => pair.from === old.name)).map((old) => old.name);
        row.added = freshRows.filter((fresh) => !row.mapping.some((pair) => pair.to === fresh.name)).map((fresh) => fresh.name);
        const oldChildren = [...base.scopes.values()].filter((info) => info.scope.parent === oldInfo.scope);
        const newChildren = [...target.scopes.values()].filter((info) => info.scope.parent === freshInfo.scope);
        for (const child of oldChildren) {
            if (scopes.some((pair) => pair.from === child.key)) continue;
            let possible = [];
            let method = 'owner-draft';
            if (child.owner?.type === 'binding') {
                const binding = row.mapping.find((pair) => pair.from === child.owner.name);
                if (binding) possible = newChildren.filter((info) => info.kind === child.kind && info.owner?.type === 'binding' && info.owner.name === binding.to);
            } else if (child.owner?.type === 'property')
                possible = newChildren.filter((info) => info.kind === child.kind && info.owner?.type === 'property' && info.owner.name === child.owner.name);
            if (possible.length !== 1) {
                method = 'unique-scope-shape';
                const signature = fingerprint(base, child.scope.path.node);
                possible = newChildren.filter((info) => info.kind === child.kind && fingerprint(target, info.scope.path.node) === signature);
                if (oldChildren.filter((info) => fingerprint(base, info.scope.path.node) === signature).length !== 1) possible = [];
            }
            if (possible.length === 1 && !used.has(possible[0].key)) add(child.key, possible[0].key, method);
        }
    }
    for (const pair of config.bindings ?? [])
        if (!scopes.some((row) => row.from === (pair.scope ?? 'root'))) throw new Error(`Ручной binding требует соответствия scope: ${pair.scope}`);
    return scopes;
}

function rewriteBindings(unit, mappings, side) {
    const renames = new Map(),
        missing = [],
        captures = [],
        allNames = new Set();
    traverse(unit.ast, {
        Identifier(p) {
            allNames.add(p.node.name);
        },
    });
    for (const row of mappings) {
        const info = unit.scopes.get(side === 'base' ? row.from : row.donor);
        for (const pair of row.mapping) {
            const oldName = side === 'base' ? pair.from : pair.donor;
            const binding = info?.scope.getOwnBinding(oldName);
            if (!binding) {
                if (pair.method === 'manual') throw new Error(`Не найден ручной donor binding: ${row.from}/${oldName}`);
                missing.push({ scope: row.from, binding: oldName });
                continue;
            }
            if (!isValidIdentifier(pair.to)) throw new Error(`Неверное имя target binding: ${pair.to}`);
            if (renames.has(binding) && renames.get(binding) !== pair.to) throw new Error(`Противоречивые donor binding overrides: ${row.from}/${oldName}`);
            renames.set(binding, pair.to);
            allNames.add(pair.to);
        }
    }
    let serial = 0;
    const fresh = (binding, reason) => {
        let name;
        do {
            name = `pulseSyncMigration_${binding.identifier.name}_${++serial}`;
        } while (allNames.has(name));
        captures.push({ scope: unit.byScope.get(binding.scope)?.key, from: binding.identifier.name, proposed: renames.get(binding), to: name, reason });
        renames.set(binding, name);
        allNames.add(name);
    };
    for (const info of unit.scopes.values()) {
        const occupied = new Map();
        for (const binding of Object.values(info.scope.bindings)) {
            const name = renames.get(binding) ?? binding.identifier.name,
                other = occupied.get(name);
            if (other) {
                if (renames.has(binding) && renames.has(other)) throw new Error(`Два bindings переименовываются в ${name}: ${info.key}`);
                fresh(renames.has(binding) ? other : binding, 'same-scope collision');
            }
            occupied.set(renames.get(binding) ?? binding.identifier.name, binding);
        }
    }
    traverse(unit.ast, {
        Identifier(p) {
            if (!semanticIdentifier(p)) return;
            const binding = p.scope.getBinding(p.node.name);
            if (binding?.identifier === p.node) return;
            const name = binding ? (renames.get(binding) ?? p.node.name) : p.node.name;
            for (let scope = p.scope; scope; scope = scope.parent) {
                for (const other of Object.values(scope.bindings)) {
                    if (other !== binding && (renames.get(other) ?? other.identifier.name) === name) fresh(other, binding ? 'nested capture' : 'global capture');
                }
                if (scope === binding?.scope) break;
            }
        },
    });
    const edits = new Map();
    traverse(unit.ast, {
        Identifier(p) {
            if (!semanticIdentifier(p)) return;
            const binding = p.scope.getBinding(p.node.name),
                name = renames.get(binding);
            if (!name || name === p.node.name) return;
            const shorthand =
                (p.parentPath.isObjectProperty() && p.parent.shorthand && p.key === 'value') ||
                (p.parentPath.isAssignmentPattern() && p.key === 'left' && p.parentPath.parentPath.isObjectProperty() && p.parentPath.parent.shorthand);
            putEdit(edits, p.node, shorthand ? `${p.node.name}: ${name}` : name, 'binding');
        },
    });
    const text = applyEdits(unit.text, edits, unit.offset);
    const rewritten = parseUnit(text, unit.module);
    const originalNode = unit.module ? unit.property.value : unit.ast.program;
    const rewrittenNode = unit.module ? rewritten.property.value : rewritten.ast.program;
    const before = fingerprint(unit, originalNode),
        after = fingerprint(rewritten, rewrittenNode);
    if (before !== after) throw new Error(`Binding alignment изменил alpha-normalized AST (${side}); требуется ручной разбор`);
    return { text, captures, missing, alphaHashes: { before, after } };
}

function exportedBindings(unit) {
    const result = new Map();
    if (!unit.module) return result;
    const requireBinding = unit.root.getOwnBinding(unit.property.value.params[2]?.name);
    const exportsBinding = unit.root.getOwnBinding(unit.property.value.params[1]?.name);
    traverse(unit.ast, {
        CallExpression(p) {
            const callee = p.node.callee;
            if (
                !requireBinding ||
                callee.type !== 'MemberExpression' ||
                callee.property.name !== 'd' ||
                callee.object.type !== 'Identifier' ||
                p.scope.getBinding(callee.object.name) !== requireBinding ||
                p.node.arguments[0]?.type !== 'Identifier' ||
                p.scope.getBinding(p.node.arguments[0].name) !== exportsBinding ||
                p.node.arguments[1]?.type !== 'ObjectExpression'
            )
                return;
            for (const prop of p.get('arguments.1.properties')) {
                if (!prop.isObjectProperty() || prop.node.computed) {
                    result.set(`<dynamic-export@${prop.node.start}>`, null);
                    continue;
                }
                const value = prop.get('value');
                const body = value.isArrowFunctionExpression() && value.get('body');
                result.set(String(prop.node.key.name ?? prop.node.key.value), body && body.isIdentifier() ? body.scope.getBinding(body.node.name) : null);
            }
        },
    });
    return result;
}

function validateConfig(config) {
    for (const key of Object.keys(config))
        if (!['moduleIds', 'chunkIds', 'exports', 'strings', 'bindings', 'scopes'].includes(key)) throw new Error(`Неизвестный ключ alignment mapping: ${key}`);
    for (const key of ['moduleIds', 'chunkIds'])
        for (const [old, fresh] of Object.entries(config[key] ?? {})) {
            numericId(old);
            numericId(fresh);
        }
    for (const [id, exports] of Object.entries(config.exports ?? {})) {
        numericId(id);
        if (!exports || typeof exports !== 'object' || Array.isArray(exports)) throw new Error('Неверная export map');
        for (const name of Object.values(exports)) if (typeof name !== 'string') throw new Error('Export name должен быть строкой');
    }
    for (const value of Object.values(config.strings ?? {})) if (typeof value !== 'string') throw new Error('String mapping должен содержать строки');
    if ((config.bindings && !Array.isArray(config.bindings)) || (config.scopes && !Array.isArray(config.scopes)))
        throw new Error('bindings/scopes должны быть массивами');
}

function alignUnits({ base, donor, target, module = true, targetId, config = {} }) {
    validateConfig(config);
    const baseContracts = contracts(base, module, config, targetId),
        donorContracts = contracts(donor, module, config, targetId);
    const old = parseUnit(baseContracts.text, module),
        mod = parseUnit(donorContracts.text, module),
        fresh = parseUnit(target, module);
    const scopes = buildMapping(old, fresh, mod, config);
    const exports = Object.create(null),
        unresolvedOwnExports = [],
        oldExports = exportedBindings(old),
        newExports = exportedBindings(fresh);
    const rootMapping = scopes[0].mapping;
    for (const [name, binding] of oldExports) {
        if (!binding) {
            if (!newExports.has(name)) unresolvedOwnExports.push({ name, reason: 'getter is not a direct bound identifier' });
            continue;
        }
        const pair = rootMapping.find((row) => old.root.getOwnBinding(row.from) === binding);
        const candidates = pair ? [...newExports].filter(([, value]) => value === fresh.root.getOwnBinding(pair.to)) : [];
        const same = candidates.find(([key]) => key === name);
        if (!same && candidates.length === 1 && candidates[0][0] !== name) exports[name] = candidates[0][0];
        else if (!same && !newExports.has(name))
            unresolvedOwnExports.push({ name, reason: candidates.length ? 'ambiguous export aliases' : 'no matched exported binding' });
    }
    const rewrittenBase = rewriteBindings(old, scopes, 'base'),
        rewrittenDonor = rewriteBindings(mod, scopes, 'donor');
    const finish = (text) =>
        module && Object.keys(exports).length ? contracts(text, module, { exports: { [String(targetId ?? old.property.key.value)]: exports } }).text : text;
    const baseAligned = finish(rewrittenBase.text),
        donorAligned = finish(rewrittenDonor.text);
    parseUnit(baseAligned, module);
    parseUnit(donorAligned, module);
    return {
        base: baseAligned,
        donor: donorAligned,
        report: {
            schemaVersion: 1,
            status: 'draft-review-required',
            config,
            inferredOwnExports: exports,
            unresolvedOwnExports,
            scopes,
            unresolvedScopes: [...old.scopes.keys()].filter((key) => !scopes.some((row) => row.from === key)),
            missingDonorBindings: rewrittenDonor.missing,
            captureRenames: { base: rewrittenBase.captures, donor: rewrittenDonor.captures },
            bindingAlphaHashes: { base: rewrittenBase.alphaHashes, donor: rewrittenDonor.alphaHashes },
            contractEdits: { base: baseContracts.changes, donor: donorContracts.changes },
        },
    };
}

function requiredModules(text) {
    const unit = parseUnit(text);
    const binding = unit.root.getOwnBinding(unit.property.value.params[2]?.name);
    const ids = new Set();
    if (binding)
        traverse(unit.ast, {
            CallExpression(p) {
                if (p.node.callee.type === 'Identifier' && p.scope.getBinding(p.node.callee.name) === binding && p.node.arguments[0]?.type === 'NumericLiteral')
                    ids.add(String(p.node.arguments[0].value));
            },
        });
    return [...ids];
}

module.exports = { alignUnits, requiredModules };
