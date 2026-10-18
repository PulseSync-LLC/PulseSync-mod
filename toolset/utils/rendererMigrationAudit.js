const fs = require('fs');
const path = require('path');
const vm = require('vm');
const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;

function files(root, extension) {
    return fs.readdirSync(root, { withFileTypes: true }).flatMap((entry) => {
        const file = path.join(root, entry.name);
        if (entry.isSymbolicLink()) throw new Error(`Symlink в renderer inputs: ${file}`);
        return entry.isDirectory() ? files(file, extension) : entry.name.endsWith(extension) ? [file] : [];
    });
}

function auditRenderer(app) {
    const chunks = path.join(app, '_next/static/chunks');
    const sources = files(chunks, '.js');
    const modules = new Map(),
        imports = [],
        members = [],
        lazy = [],
        globals = [];
    const relative = (file) => path.relative(app, file).replaceAll('\\', '/');
    for (const file of sources) {
        const text = fs.readFileSync(file, 'utf8');
        const ast = parser.parse(text, { sourceType: 'unambiguous' });
        for (const statement of ast.program.body) {
            const expr = statement.expression;
            if (expr?.type !== 'CallExpression' || expr.callee?.property?.name !== 'push') continue;
            const table = expr.arguments[0]?.elements?.[1];
            if (table?.type !== 'ObjectExpression') continue;
            for (const property of table.properties) {
                const id = String(property.key?.value ?? property.key?.name);
                const value = property.value;
                if (!/^\d+$/.test(id) || !value?.params) throw new Error(`Неподдержанная webpack table entry: ${file}`);
                if (!modules.has(id)) modules.set(id, { files: [], exports: new Set(), unknownExports: false });
                const entry = modules.get(id);
                entry.files.push(relative(file));
                if (!value.params[2]) {
                    entry.unknownExports = true;
                    continue;
                }
                const unit = parser.parse('({' + text.slice(property.start, property.end) + '})');
                let scope;
                traverse(unit, {
                    ArrowFunctionExpression(p) {
                        if (!scope) {
                            scope = p.scope;
                            p.skip();
                        }
                    },
                    FunctionExpression(p) {
                        if (!scope) {
                            scope = p.scope;
                            p.skip();
                        }
                    },
                });
                if (!scope) throw new Error(`Не найден scope module ${id}: ${file}`);
                const requireBinding = scope.getOwnBinding(value.params[2].name);
                const exportsBinding = scope.getOwnBinding(value.params[1]?.name);
                if (!requireBinding) throw new Error(`Не найден webpack require binding: ${file} #${id}`);
                const aliases = new Map();
                const localExports = new Set();
                traverse(unit, {
                    CallExpression(p) {
                        const node = p.node,
                            callee = node.callee;
                        if (callee.type === 'Identifier' && p.scope.getBinding(callee.name) === requireBinding && node.arguments[0]?.type === 'NumericLiteral') {
                            const dependency = String(node.arguments[0].value);
                            const record = { file: relative(file), owner: id, dependency };
                            imports.push(record);
                            if (p.parentPath.isVariableDeclarator() && p.parent.id.type === 'Identifier')
                                aliases.set(p.parentPath.scope.getBinding(p.parent.id.name), dependency);
                            if (p.parentPath.isMemberExpression() && p.key === 'object' && !p.parent.computed)
                                members.push({ ...record, export: p.parent.property.name });
                        }
                        if (callee.type !== 'MemberExpression' || callee.object.type !== 'Identifier' || p.scope.getBinding(callee.object.name) !== requireBinding)
                            return;
                        if (callee.property.name === 'e' && node.arguments[0]?.type === 'NumericLiteral')
                            lazy.push({ file: relative(file), owner: id, chunk: node.arguments[0].value });
                        if (
                            callee.property.name === 'd' &&
                            node.arguments[0]?.type === 'Identifier' &&
                            p.scope.getBinding(node.arguments[0].name) === exportsBinding &&
                            node.arguments[1]?.type === 'ObjectExpression'
                        ) {
                            for (const prop of node.arguments[1].properties) if (prop.key) localExports.add(prop.key.name ?? String(prop.key.value));
                        }
                    },
                });
                traverse(unit, {
                    MemberExpression(p) {
                        const node = p.node;
                        if (node.computed || node.object.type !== 'Identifier') return;
                        const dependency = aliases.get(p.scope.getBinding(node.object.name));
                        if (dependency) members.push({ file: relative(file), owner: id, dependency, export: node.property.name });
                    },
                    ReferencedIdentifier(p) {
                        if (!p.scope.getBinding(p.node.name)) globals.push({ file: relative(file), owner: id, name: p.node.name });
                    },
                });
                if (!localExports.size) entry.unknownExports = true;
                for (const name of localExports) entry.exports.add(name);
            }
        }
    }
    if (!modules.size) throw new Error('Webpack push-table modules не найдены; audit не поддерживает эту сборку');
    const loaders = sources.filter((file) => /^webpack-/.test(path.basename(file)));
    if (loaders.length !== 1) throw new Error(`Ожидался один webpack loader, найдено ${loaders.length}`);
    const loader = fs.readFileSync(loaders[0], 'utf8');
    const resolvers = new Map();
    let cssOnly;
    traverse(parser.parse(loader), {
        AssignmentExpression(p) {
            if (p.node.left.type !== 'MemberExpression' || !['ArrowFunctionExpression', 'FunctionExpression'].includes(p.node.right.type)) return;
            const name = p.node.left.property.name;
            if (['u', 'miniCssF'].includes(name)) resolvers.set(name, loader.slice(p.node.right.start, p.node.right.end));
        },
        RegExpLiteral(p) {
            const owner = p.findParent(
                (parent) =>
                    parent.isAssignmentExpression() &&
                    parent.node.left.type === 'MemberExpression' &&
                    parent.node.left.property.name === 'j' &&
                    parent.node.left.object.property?.name === 'f',
            );
            if (owner) cssOnly = new RegExp(p.node.pattern, p.node.flags);
        },
    });
    if (!resolvers.has('u') || !resolvers.has('miniCssF')) throw new Error('Webpack JS/CSS URL resolver не поддерживается');
    const resolve = (name, chunk) => {
        const result = vm.runInNewContext(`(${resolvers.get(name)})(${JSON.stringify(chunk)})`, Object.create(null), { timeout: 1000 });
        if (typeof result !== 'string') throw new Error(`Webpack ${name} вернул не строку: ${chunk}`);
        return result;
    };
    const missingModules = imports.filter((row) => !modules.has(row.dependency));
    const missingExports = members.filter((row) => {
        const target = modules.get(row.dependency);
        return target && !target.unknownExports && !target.exports.has(row.export) && row.export !== '__esModule';
    });
    const unresolvedChunks = [];
    for (const row of lazy) {
        const url = resolve('u', row.chunk),
            css = resolve('miniCssF', row.chunk);
        if (cssOnly) cssOnly.lastIndex = 0;
        if (!cssOnly?.test(String(row.chunk)) && !fs.existsSync(path.join(app, '_next', url))) unresolvedChunks.push({ ...row, url });
        if (!css.includes('undefined') && !fs.existsSync(path.join(app, '_next', css))) unresolvedChunks.push({ ...row, url: css });
    }
    const missingAssets = [];
    for (const file of [...files(app, '.html'), ...files(app, '.txt')]) {
        for (const match of fs.readFileSync(file, 'utf8').matchAll(/\/_next\/(static\/[\w/().@+-]+\.(?:js|css|woff2?|png|svg|webp|jpg|jpeg))/g)) {
            if (!fs.existsSync(path.join(app, '_next', match[1]))) missingAssets.push({ file: relative(file), asset: match[1] });
        }
    }
    const unique = (rows) => [...new Map(rows.map((row) => [JSON.stringify(row), row])).values()];
    return {
        modules: modules.size,
        imports: imports.length,
        exportReferences: members.length,
        lazyReferences: lazy.length,
        missingModules: unique(missingModules),
        missingExports: unique(missingExports),
        unresolvedChunks: unique(unresolvedChunks),
        missingAssets: unique(missingAssets),
        globals: unique(globals),
        unknownExports: [...modules].filter(([, entry]) => entry.unknownExports).map(([id]) => id),
    };
}

module.exports = { auditRenderer };
