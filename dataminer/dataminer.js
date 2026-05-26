const fs = require('fs');
const path = require('path');
const fg = require('fast-glob');
const parser = require('@babel/parser');
const semver = require('semver');
const traverse = require('@babel/traverse').default;
const generate = require('@babel/generator').default;

const EXTRACTED = './extracted';

function getSortedVersionList() {
    const versions = fs
        .readdirSync(EXTRACTED)
        .filter(
            (f) => fs.statSync(path.join(EXTRACTED, f)).isDirectory() && !(f.endsWith('@pure') || f.endsWith('@archive') || f.endsWith('@beta') || f.endsWith('@modded')),
        );
    return versions.map((value) => value.replaceAll('_', '.').replaceAll('@pretty', '')).sort((a, b) => semver.rcompare(a, b));
    //.map((value) => value.replaceAll(".", "_"));
}

const versionList = getSortedVersionList();
if (!versionList || !versionList.length) {
    console.warn(`\n❌ Не найдены папки с версиями в ${EXTRACTED}. Фоллбек на ./src\n`);
}

console.log(`Используемые версии: ${versionList.join(', ')}`);

const ROOT = process.argv[2] ?? (versionList?.[0] ? path.join(EXTRACTED, versionList?.[0]).concat('@pretty') : undefined) ?? './src';
const APP_CHUNKS_ROOT = path.join(ROOT, '/app/_next/static/chunks');
const MAIN_INDEX_JS_PATH = path.join(ROOT, '/index.js');
const SPRITE_SVG_PATH = path.join(ROOT, '/app/icons/sprite.svg');
const OUTPUT =
    process.argv[3] ??
    path.join(
        process.argv[1].replace('dataminer.js', ''),
        `./output/${
            process.argv[2]
                ?.split('/')
                ?.at(process.argv[2].endsWith('/') ? -2 : -1)
                ?.replaceAll('.', '_') ??
            (versionList?.[0] ? versionList?.[0].replaceAll('.', '_') : undefined) ??
            'src'
        }`,
    );

const HTTP_METHODS = ['get', 'post', 'put', 'delete', 'patch', 'head', 'options'];
const MOBX_CHAIN_METHODS = new Set(['model', 'props', 'views', 'actions', 'named']);

// === experiments ===
const experiments = [];

// === icons ===
const iconsCollectionBySize = {};
const iconUsages = [];
const dynamicIconUsages = [];

// === mobx-state-tree ===
const mobxConstructs = [];

function isHttpMethodCallee(node) {
    if (node?.type !== 'MemberExpression') return false;

    const isTargetMethod =
        (!node.computed && node.property?.type === 'Identifier' && HTTP_METHODS.includes(node.property.name)) ||
        (node.computed && node.property?.type === 'StringLiteral' && HTTP_METHODS.includes(node.property.value));

    if (!isTargetMethod) return false;

    const obj = node.object;
    const isHttpClientProp =
        obj?.type === 'MemberExpression' &&
        ((!obj.computed && obj.property?.type === 'Identifier' && obj.property.name === 'httpClient') ||
            (obj.computed && obj.property?.type === 'StringLiteral' && obj.property.value === 'httpClient')) &&
        obj.object?.type === 'ThisExpression';

    return isHttpClientProp;
}

function isDirectlyAwaited(callPath) {
    let p = callPath.parentPath;
    while (p && p.node?.type === 'ParenthesizedExpression') p = p.parentPath;
    return p?.node?.type === 'AwaitExpression';
}

// === нормализация endpoint ===
function normalizeEndpoint(node, callPath) {
    if (!node) return null;

    switch (node.type) {
        case 'StringLiteral':
            return node.value;

        case 'TemplateLiteral': {
            return node.quasis
                .map((q, i) => {
                    const expr = node.expressions[i];
                    const val = expr ? normalizeEndpoint(expr, callPath) : '';
                    return q.value.cooked + val;
                })
                .join('');
        }

        case 'BinaryExpression':
            if (node.operator === '+') {
                return normalizeEndpoint(node.left, callPath) + normalizeEndpoint(node.right, callPath);
            }
            return generate(node).code;

        case 'CallExpression': {
            // "xxx".concat(...)
            if (node.callee.type === 'MemberExpression' && node.callee.property.type === 'Identifier' && node.callee.property.name === 'concat') {
                const base = normalizeEndpoint(node.callee.object, callPath);
                const args = node.arguments.map((a) => normalizeEndpoint(a, callPath)).join('');
                return base + args;
            }
            return generate(node).code;
        }

        case 'MemberExpression': {
            // Например t.url
            node.__endpointSource = generate(node, { concise: true }).code;
            node.__unsure = true;
            if (node.property.type === 'Identifier') {
                return `:${node.property.name}`;
            }
            return `:${generate(node.property).code}`;
        }

        case 'Identifier': {
            // Попытка найти объявление переменной
            let binding = null;
            if (callPath && callPath.scope) {
                binding = callPath.scope.getBinding(node.name);
            }

            if (binding && binding.path.node.type === 'VariableDeclarator' && binding.path.node.init) {
                const initCode = generate(binding.path.node.init, { concise: true }).code;
                node.__endpointSource = initCode;
                node.__unsure = true;
            } else {
                node.__endpointSource = node.name;
                node.__unsure = true;
            }

            return `:${node.name}`;
        }

        default:
            return generate(node).code;
    }
}

function extractKeysFromValue(valueNode, path) {
    if (!valueNode) return null;

    // Helper to extract keys from ObjectExpression node
    const keysFromObject = (obj) =>
        obj.properties
            .map((prop) => {
                if (prop.type === 'ObjectProperty') {
                    if (prop.key.type === 'Identifier') return prop.key.name;
                    if (prop.key.type === 'StringLiteral') return prop.key.value;
                }
                return null;
            })
            .filter(Boolean);

    // Resolve Identifier by finding its binding and following initializer
    if (valueNode.type === 'Identifier') {
        const name = valueNode.name;
        if (!path || !path.scope) return null;
        const binding = path.scope.getBinding(name);
        if (binding && binding.path && binding.path.node) {
            const init = binding.path.node.init;
            if (init) {
                // рекурсивно обработаем инициализатор (передаём binding.path как контекст)
                return extractKeysFromValue(init, binding.path);
            }
        }
        return null;
    }

    // If it's an object literal — simple case
    if (valueNode.type === 'ObjectExpression') {
        return keysFromObject(valueNode);
    }

    // If it's a call like (0, r.F)({...}) — проверим аргументы на объекты
    if (valueNode.type === 'CallExpression') {
        const keys = [];
        for (const arg of valueNode.arguments) {
            if (arg.type === 'ObjectExpression') {
                keys.push(...keysFromObject(arg));
            } else if (arg.type === 'Identifier') {
                const nested = extractKeysFromValue(arg, path);
                if (nested) keys.push(...nested);
            } else if (arg.type === 'CallExpression') {
                const nested = extractKeysFromValue(arg, path);
                if (nested) keys.push(...nested);
            }
        }
        return keys.length ? keys : null;
    }

    // If it's a sequence/expression that wraps an object: try to be permissive
    // e.g. (0, r.P)({...}) was handled, but also maybe other wrappers — we can try to see if node has .arguments or .left/right
    if (valueNode.type === 'SequenceExpression') {
        for (const expr of valueNode.expressions) {
            const found = extractKeysFromValue(expr, path);
            if (found) return found;
        }
    }

    // fallback: no keys
    return null;
}

function extractOptionsFromObject(objNode, path) {
    let searchParams = null;
    let searchParamsFormatted = null;
    let json = null;
    let jsonFormatted = null;

    for (const prop of objNode.properties) {
        if (prop.type !== 'ObjectProperty') continue;

        // --- searchParams ---
        if ((prop.key.type === 'Identifier' && prop.key.name === 'searchParams') || (prop.key.type === 'StringLiteral' && prop.key.value === 'searchParams')) {
            searchParams = generate(prop.value ?? prop, { concise: true }).code;
            searchParamsFormatted = extractKeysFromValue(prop.value ?? prop, path);
        }

        // --- json ---
        if ((prop.key.type === 'Identifier' && prop.key.name === 'json') || (prop.key.type === 'StringLiteral' && prop.key.value === 'json')) {
            json = generate(prop.value ?? prop, { concise: true }).code;
            jsonFormatted = extractKeysFromValue(prop.value ?? prop, path);
        }
    }

    return { searchParams, searchParamsFormatted, json, jsonFormatted };
}

function processNodeRecursive(node, path) {
    let searchParams = null;
    let searchParamsFormatted = null;
    let json = null;
    let jsonFormatted = null;

    if (!node) return { searchParams, searchParamsFormatted, json, jsonFormatted };

    if (node.type === 'ObjectExpression') {
        const extracted = extractOptionsFromObject(node, path);
        return extracted;
    }

    if (node.type === 'CallExpression') {
        // проверяем аргументы рекурсивно (поддерживаем обёртки createHttpOptions(...), wrap(...createHttpOptions(...)) и т.п.)
        for (const arg of node.arguments) {
            const extracted = processNodeRecursive(arg, path);
            searchParams = searchParams ?? extracted.searchParams;
            searchParamsFormatted = searchParamsFormatted ?? extracted.searchParamsFormatted;
            json = json ?? extracted.json;
            jsonFormatted = jsonFormatted ?? extracted.jsonFormatted;
            // если все нашли - можем сразу вернуть
            if (searchParams && json) break;
        }
        return { searchParams, searchParamsFormatted, json, jsonFormatted };
    }

    if (node.type === 'Identifier') {
        // пытаемся найти binding и обработать инициализатор
        if (path && path.scope) {
            const binding = path.scope.getBinding(node.name);
            if (binding && binding.path && binding.path.node && binding.path.node.init) {
                return processNodeRecursive(binding.path.node.init, binding.path);
            }
        }
        return { searchParams, searchParamsFormatted, json, jsonFormatted };
    }

    // SequenceExpression (a, b, {...}) - проверим вложенные выражения
    if (node.type === 'SequenceExpression') {
        for (const expr of node.expressions) {
            const extracted = processNodeRecursive(expr, path);
            searchParams = searchParams ?? extracted.searchParams;
            searchParamsFormatted = searchParamsFormatted ?? extracted.searchParamsFormatted;
            json = json ?? extracted.json;
            jsonFormatted = jsonFormatted ?? extracted.jsonFormatted;
        }
        return { searchParams, searchParamsFormatted, json, jsonFormatted };
    }

    return { searchParams, searchParamsFormatted, json, jsonFormatted };
}

function extractEndpointAndOptions(callNode, callPath) {
    const args = callNode.arguments;
    let endpoint = null;
    let unsureEndpoint = false;
    let endpointSource = null;

    if (args.length > 0) {
        endpoint = normalizeEndpoint(args[0], callPath);

        if (args[0].__unsure) {
            unsureEndpoint = true;
            endpointSource = args[0].__endpointSource;
        }
    }

    let searchParams = null;
    let searchParamsFormatted = null;
    let json = null;
    let jsonFormatted = null;

    if (args.length > 1) {
        const second = args[1];
        ({ searchParams, searchParamsFormatted, json, jsonFormatted } = processNodeRecursive(second, callPath));
    }

    return {
        endpoint,
        searchParams,
        searchParamsFormatted,
        json,
        jsonFormatted,
        unsureEndpoint,
        endpointSource,
    };
}

function getEnclosingFunctionName(callPath) {
    let p = callPath;
    while (p) {
        const n = p.node;
        if (n.type === 'FunctionDeclaration' && n.id) {
            return n.id.name;
        }
        if ((n.type === 'FunctionExpression' || n.type === 'ArrowFunctionExpression') && p.parentPath) {
            // Может быть метод объекта или класс
            const parent = p.parentPath.node;
            if (parent.type === 'ObjectProperty' && parent.key.type === 'Identifier') {
                return parent.key.name;
            }
            if (parent.type === 'ClassMethod' && parent.key.type === 'Identifier') {
                return parent.key.name;
            }
            if (parent.type === 'VariableDeclarator' && parent.id.type === 'Identifier') {
                return parent.id.name;
            }
        }
        if (n.type === 'ClassMethod' || n.type === 'ObjectMethod') {
            if (n.key.type === 'Identifier') return n.key.name;
            if (n.key.type === 'StringLiteral') return n.key.value;
        }
        p = p.parentPath;
    }
    return null;
}

function getMemberPropertyName(node) {
    if (!node || node.type !== 'MemberExpression') return null;
    if (!node.computed && node.property?.type === 'Identifier') return node.property.name;
    if (node.computed && node.property?.type === 'StringLiteral') return node.property.value;
    return null;
}

function getPropertyKeyName(prop) {
    const key = prop?.key;
    if (!key) return null;
    if (key.type === 'Identifier') return key.name;
    if (key.type === 'StringLiteral' || key.type === 'NumericLiteral') return String(key.value);
    return generate(key, { concise: true }).code;
}

function getStaticStringValue(node) {
    if (!node) return null;
    if (node.type === 'StringLiteral') return node.value;
    if (node.type === 'TemplateLiteral' && node.expressions.length === 0) return node.quasis.map((q) => q.value.cooked).join('');
    return null;
}

function getObjectExpressionKeys(node) {
    if (!node || node.type !== 'ObjectExpression') return [];

    return node.properties
        .map((prop) => {
            if (prop.type === 'ObjectProperty' || prop.type === 'ObjectMethod') return getPropertyKeyName(prop);
            if (prop.type === 'SpreadElement') return `...${generate(prop.argument, { concise: true }).code}`;
            return null;
        })
        .filter(Boolean);
}

function getReturnedObjectExpression(fnNode) {
    if (!fnNode) return null;
    if ((fnNode.type === 'ArrowFunctionExpression' || fnNode.type === 'FunctionExpression') && fnNode.body?.type === 'ObjectExpression') return fnNode.body;

    if ((fnNode.type === 'ArrowFunctionExpression' || fnNode.type === 'FunctionExpression') && fnNode.body?.type === 'BlockStatement') {
        for (const statement of fnNode.body.body) {
            if (statement.type === 'ReturnStatement' && statement.argument?.type === 'ObjectExpression') return statement.argument;
        }
    }

    return null;
}

function extractKeysFromMobxCallback(argNode) {
    const returnedObject = getReturnedObjectExpression(argNode);
    return getObjectExpressionKeys(returnedObject);
}

function normalizeIconSize(size) {
    return size === '' || size == null ? 'default' : size;
}

function addIconToCollection(iconName, size) {
    if (!iconName) return;
    const normalizedSize = normalizeIconSize(size);
    iconsCollectionBySize[normalizedSize] ??= new Set();
    iconsCollectionBySize[normalizedSize].add(iconName);
}

function extractIconCollectionFromObject(objNode) {
    if (!objNode || objNode.type !== 'ObjectExpression') return;

    for (const prop of objNode.properties) {
        if (prop.type !== 'ObjectProperty') continue;

        const size = normalizeIconSize(getPropertyKeyName(prop));
        if (prop.value?.type === 'ArrayExpression') {
            for (const element of prop.value.elements) {
                const iconName = getStaticStringValue(element);
                if (iconName) addIconToCollection(iconName, size);
            }
        }
    }
}

function isIconComponentNode(node) {
    if (!node) return false;
    if (node.type === 'Identifier') return node.name === 'Icon';
    if (node.type === 'MemberExpression') return getMemberPropertyName(node) === 'Icon';
    if (node.type === 'JSXIdentifier') return node.name === 'Icon';
    if (node.type === 'JSXMemberExpression') return node.property?.name === 'Icon';
    return false;
}

function getObjectPropValue(objNode, keyName) {
    if (!objNode || objNode.type !== 'ObjectExpression') return null;
    for (const prop of objNode.properties) {
        if (prop.type !== 'ObjectProperty') continue;
        if (getPropertyKeyName(prop) === keyName) return prop.value;
    }
    return null;
}

function createIconUsage(variantNode, sizeNode, position) {
    const variant = getStaticStringValue(variantNode);
    const size = getStaticStringValue(sizeNode) ?? null;

    if (variant) {
        return {
            variant,
            size,
            key: size ? `${variant}_${size}` : variant,
            position,
        };
    }

    return {
        variant: variantNode ? generate(variantNode, { concise: true }).code : null,
        size: sizeNode ? generate(sizeNode, { concise: true }).code : null,
        dynamic: true,
        position,
    };
}

function extractIconUsageFromJsxCall(callNode, position) {
    const componentNode = callNode.arguments?.[0];
    const propsNode = callNode.arguments?.[1];
    if (!isIconComponentNode(componentNode) || propsNode?.type !== 'ObjectExpression') return null;

    return createIconUsage(getObjectPropValue(propsNode, 'variant'), getObjectPropValue(propsNode, 'size'), position);
}

function extractIconUsageFromJsxElement(node, position) {
    if (!isIconComponentNode(node.openingElement?.name)) return null;

    let variantNode = null;
    let sizeNode = null;

    for (const attr of node.openingElement.attributes) {
        if (attr.type !== 'JSXAttribute') continue;
        const attrName = attr.name?.name;
        if (attrName !== 'variant' && attrName !== 'size') continue;

        const valueNode = attr.value?.type === 'JSXExpressionContainer' ? attr.value.expression : attr.value;
        if (attrName === 'variant') variantNode = valueNode;
        if (attrName === 'size') sizeNode = valueNode;
    }

    return createIconUsage(variantNode, sizeNode, position);
}

function getMobxChainSteps(node) {
    if (!node || node.type !== 'CallExpression' || node.callee?.type !== 'MemberExpression') return [];

    const method = getMemberPropertyName(node.callee);

    if (method === 'compose') {
        return getMobxChainSteps(node.arguments?.[0]);
    }

    const chain = getMobxChainSteps(node.callee.object);
    if (MOBX_CHAIN_METHODS.has(method)) chain.push({ method, args: node.arguments, node });
    return chain;
}

function isTopLevelMobxChainCall(callPath) {
    const steps = getMobxChainSteps(callPath.node);
    if (!steps.length) return false;

    const parent = callPath.parentPath;
    const grandParent = parent?.parentPath;
    if (
        parent?.node?.type === 'MemberExpression' &&
        parent.node.object === callPath.node &&
        MOBX_CHAIN_METHODS.has(getMemberPropertyName(parent.node)) &&
        grandParent?.node?.type === 'CallExpression' &&
        grandParent.node.callee === parent.node
    ) {
        return false;
    }

    return true;
}

function getAssignedMobxName(callPath) {
    let p = callPath.parentPath;
    while (p) {
        const node = p.node;
        if (node.type === 'VariableDeclarator' && node.id.type === 'Identifier') return node.id.name;
        if (node.type === 'AssignmentExpression') {
            if (node.left.type === 'Identifier') return node.left.name;
            if (node.left.type === 'MemberExpression') return generate(node.left, { concise: true }).code;
        }
        if (node.type === 'ExpressionStatement' || node.type === 'Program') break;
        p = p.parentPath;
    }
    return null;
}

function extractMobxConstruct(callPath, relPath) {
    if (!isTopLevelMobxChainCall(callPath)) return null;

    const steps = getMobxChainSteps(callPath.node);
    const construct = {
        name: null,
        assignedName: getAssignedMobxName(callPath),
        props: [],
        views: [],
        actions: [],
        chain: steps.map((step) => step.method),
        position: {
            file: relPath,
            line: callPath.node.loc?.start.line ?? null,
            column: callPath.node.loc?.start.column ?? null,
        },
    };

    for (const step of steps) {
        if (step.method === 'model') {
            const [firstArg, secondArg] = step.args;
            const modelName = getStaticStringValue(firstArg);
            if (modelName) construct.name = modelName;
            const propsNode = modelName ? secondArg : firstArg;
            construct.props.push(...getObjectExpressionKeys(propsNode));
        }

        if (step.method === 'props') {
            construct.props.push(...getObjectExpressionKeys(step.args?.[0]));
        }

        if (step.method === 'views') {
            construct.views.push(...extractKeysFromMobxCallback(step.args?.[0]));
        }

        if (step.method === 'actions') {
            construct.actions.push(...extractKeysFromMobxCallback(step.args?.[0]));
        }

        if (step.method === 'named') {
            const namedValue = getStaticStringValue(step.args?.[0]);
            if (namedValue) construct.name = namedValue;
        }
    }

    construct.props = [...new Set(construct.props)].sort((a, b) => a.localeCompare(b));
    construct.views = [...new Set(construct.views)].sort((a, b) => a.localeCompare(b));
    construct.actions = [...new Set(construct.actions)].sort((a, b) => a.localeCompare(b));

    return construct.name || construct.assignedName || construct.props.length || construct.views.length || construct.actions.length ? construct : null;
}

function generateSimpleRoutesListFromResults(results) {
    if (!results) return null;

    const routes = {};

    for (const item of results) {
        if (!item.endpoint || item.unsureEndpoint) continue;

        let endpointString = `${item.method} ${item.formated.endpoint}`;

        if (item.formated.searchParamKeys) endpointString = endpointString.concat('?', item.formated.searchParamKeys.map((item) => `${item}=[${item}]`).join('&'));

        if (item.formated.jsonBodyKeys) endpointString = endpointString.concat(' { ', item.formated.jsonBodyKeys.join(', '), ' }');

        const name = item.name ?? item.endpoint;
        let uniqueName = name;
        let counter = 1;
        while (routes[uniqueName] && routes[uniqueName] !== endpointString) {
            const uniqueNameBrackets = [item.formated.endpoint.split('/')[1]];
            if (counter > 1) uniqueNameBrackets.push(counter);
            uniqueName = `${name} (${uniqueNameBrackets.join(' ')})`;
            counter++;
        }

        routes[uniqueName] = endpointString;
    }

    return routes;
}

function generateSimpleIconsList() {
    const icons = {};

    for (const [size, iconNames] of Object.entries(iconsCollectionBySize)) {
        for (const iconName of iconNames) {
            icons[iconName] ??= [];
            icons[iconName].push(size);
        }
    }

    return Object.fromEntries(
        Object.entries(icons)
            .map(([iconName, sizes]) => [iconName, [...new Set(sizes)].sort((a, b) => a.localeCompare(b))])
            .sort(([a], [b]) => a.localeCompare(b)),
    );
}

function generateIconUsageSummary(usages) {
    const summary = {};

    for (const usage of usages) {
        if (!usage.key) continue;
        summary[usage.key] ??= {
            variant: usage.variant,
            size: normalizeIconSize(usage.size),
            count: 0,
        };
        summary[usage.key].count++;
    }

    return Object.fromEntries(Object.entries(summary).sort(([a], [b]) => a.localeCompare(b)));
}

function getAttributeValue(attrs, name) {
    const match = attrs.match(new RegExp(`\\b${name}=("|')([^"']*)\\1`));
    return match?.[2] ?? null;
}

function removeAttribute(attrs, name) {
    return attrs.replace(new RegExp(`\\s*\\b${name}=("|')[^"']*\\1`, 'g'), '');
}

function getReferencedIds(svgContent) {
    return [...svgContent.matchAll(/url\(#([^)]+)\)|(?:href|xlink:href)=("|')#([^"']+)\2/g)].map((match) => match[1] ?? match[3]).filter(Boolean);
}

function extractSvgDefinitions(spriteContent) {
    const definitions = {};
    const definitionRegex = /<(clipPath|linearGradient|radialGradient|mask|filter|pattern)\b[^>]*\bid=("|')([^"']+)\2[^>]*>[\s\S]*?<\/\1>/g;

    for (const match of spriteContent.matchAll(definitionRegex)) {
        definitions[match[3]] = match[0];
    }

    return definitions;
}

function extractSvgSymbolsFromSprite(spriteContent) {
    const definitions = extractSvgDefinitions(spriteContent);
    const symbols = {};
    const symbolRegex = /<symbol\b([^>]*)\bid=("|')([^"']+)\2([^>]*)>([\s\S]*?)<\/symbol>/g;

    for (const match of spriteContent.matchAll(symbolRegex)) {
        const attrs = `${match[1]} ${match[4]}`;
        const id = match[3];
        const viewBox = getAttributeValue(attrs, 'viewBox');
        const fill = getAttributeValue(attrs, 'fill');
        const extraAttrs = removeAttribute(removeAttribute(removeAttribute(attrs, 'id'), 'viewBox'), 'fill').trim();
        const body = match[5].trim();
        const referencedDefs = [...new Set(getReferencedIds(body))]
            .map((refId) => definitions[refId])
            .filter(Boolean)
            .join('\n');

        symbols[id] = [
            `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"${viewBox ? ` viewBox="${viewBox}"` : ''}${fill ? ` fill="${fill}"` : ''}${extraAttrs ? ` ${extraAttrs}` : ''}>`,
            referencedDefs ? `<defs>\n${referencedDefs}\n</defs>` : null,
            body,
            '</svg>',
            '',
        ]
            .filter(Boolean)
            .join('\n');
    }

    return symbols;
}

function writeIconSvgFiles() {
    if (!fs.existsSync(SPRITE_SVG_PATH)) {
        console.warn(`⚠️  Не найден sprite.svg для экспорта иконок: ${SPRITE_SVG_PATH}`);
        return 0;
    }

    const iconsDir = path.join(OUTPUT, 'icons');
    const spriteContent = fs.readFileSync(SPRITE_SVG_PATH, 'utf8');
    const symbols = extractSvgSymbolsFromSprite(spriteContent);
    const knownIconKeys = new Set();

    for (const [iconName, sizes] of Object.entries(generateSimpleIconsList())) {
        for (const size of sizes) {
            knownIconKeys.add(size === 'default' ? iconName : `${iconName}_${size}`);
        }
    }

    fs.rmSync(iconsDir, { recursive: true, force: true });
    fs.mkdirSync(iconsDir, { recursive: true });

    let writtenCount = 0;
    for (const iconKey of [...knownIconKeys].sort((a, b) => a.localeCompare(b))) {
        const svg = symbols[iconKey];
        if (!svg) continue;
        fs.writeFileSync(path.join(iconsDir, `${iconKey}.svg`), svg, 'utf8');
        writtenCount++;
    }

    return writtenCount;
}

function generateSimpleMobxConstructs(constructs) {
    const summary = {};
    const summaryFiles = {};

    for (const construct of constructs) {
        const baseName = construct.name ?? construct.assignedName ?? `${construct.position.file}:${construct.position.line}`;
        let uniqueName = baseName;
        let counter = 1;

        while (summary[uniqueName] && summaryFiles[uniqueName] !== construct.position.file) {
            counter++;
            uniqueName = `${baseName} (${counter})`;
        }

        summary[uniqueName] ??= {
            props: [],
            views: [],
            actions: [],
            chains: [],
        };
        summaryFiles[uniqueName] ??= construct.position.file;

        summary[uniqueName].props.push(...construct.props);
        summary[uniqueName].views.push(...construct.views);
        summary[uniqueName].actions.push(...construct.actions);
        summary[uniqueName].chains.push(construct.chain.join('.'));
    }

    for (const item of Object.values(summary)) {
        item.props = [...new Set(item.props)].sort((a, b) => a.localeCompare(b));
        item.views = [...new Set(item.views)].sort((a, b) => a.localeCompare(b));
        item.actions = [...new Set(item.actions)].sort((a, b) => a.localeCompare(b));
        item.chains = [...new Set(item.chains)].sort((a, b) => a.localeCompare(b));
    }

    return Object.fromEntries(Object.entries(summary).sort(([a], [b]) => a.localeCompare(b)));
}

function isBranchNode(el) {
    return el && (el.type === 5 || el.type === 6); // select или plural
}

function hasPlaceholder(elements = [], argName) {
    for (const el of elements) {
        if (!el) continue;
        if (el.type === 1 && el.value === argName) return true;
        if (el.type === 7 && argName) return true; // '#' inside plural
        if (el.type === 8 && el.children && hasPlaceholder(el.children, argName)) return true;
        if (Array.isArray(el.value) && hasPlaceholder(el.value, argName)) return true;
    }
    return false;
}

function elementToText(el, pluralVar) {
    if (!el) return '';
    switch (el.type) {
        case 0: // literal
            return el.value || '';
        case 1: // argument / placeholder
            if (el.value === 'nbsp') return '\u00A0';
            if (el.value === 'br') return '\n';
            return `{${el.value}}`;
        case 2: // number
        case 3: // date
        case 4: // time
            // упрощённо: оставляем {name}
            return `{${el.value}}`;
        case 7: // pound (#) inside plural
            return pluralVar ? `{${pluralVar}}` : '#';
        case 8: // tag with children
            // сохраняем содержимое тегов как текст (можно расширить)
            return (el.children || []).map((child) => elementToText(child, pluralVar)).join('');
        default:
            return '';
    }
}

function elementsToString(elements = [], pluralVar) {
    return (elements || [])
        .map((el) => {
            // для вложенных option.value может быть plain array
            if (!el) return '';
            if (el.type === 5 || el.type === 6) {
                // не ожидаем вложенных branch-узлов тут для простой строки
                return '';
            }
            return elementToText(el, pluralVar);
        })
        .join('')
        .replaceAll('\n', '\\n')
        .replaceAll('\u00A0', ' ');
}

/**
 * Если elements не содержат select/plural => возвращает строку.
 * Если содержат один branching node (select/plural) => возвращает объект опций.
 * (Если несколько branching nodes — обрабатывает первый встреченный.)
 */
function compileElements(elements = []) {
    // найти первый branching-узел
    const idx = elements.findIndex(isBranchNode);
    if (idx === -1) {
        return elementsToString(elements);
    }

    const branch = elements[idx];
    const prefix = elements.slice(0, idx);
    const suffix = elements.slice(idx + 1);

    const out = {};
    const pluralVar = branch.value; // имя переменной, например "count" для plural
    const options = branch.options || {};

    for (const key of Object.keys(options)) {
        const opt = options[key];
        // option может хранить value (array) либо children
        const optElements = opt.value || opt.children || [];
        const optText = elementsToString(optElements, pluralVar);
        const preText = elementsToString(prefix, pluralVar);
        const postText = elementsToString(suffix, pluralVar);

        let combined = preText + optText + postText;

        // для plural (type 6) гарантируем наличие плейсхолдера {var} в опции
        if (branch.type === 6) {
            if (!hasPlaceholder(optElements.concat(prefix, suffix), pluralVar)) {
                // если плейсхолдер явно отсутствует — добавим после текста (без лишнего пробела если уже есть)
                if (combined && !combined.endsWith(' ')) combined += ' ';
                combined += `{${pluralVar}}`;
            }
        }

        out[key] = combined;
    }
    return out;
}

function compileMessages(messages) {
    const out = {};
    for (const key of Object.keys(messages)) {
        const msg = messages[key];
        // ожидается, что msg — массив элементов (FormatJS AST root message)
        // иногда msg — массив из мета и элементов, возьмём только элементы (если структура сложнее — адаптируйте)
        const elements = Array.isArray(msg) ? msg : [];
        const compiled = compileElements(elements);
        out[key] = compiled;
    }
    return out;
}

function createOutputJson(data, fileName) {
    if (!data) return;
    try {
        fs.writeFileSync(path.join(OUTPUT, fileName), JSON.stringify(data, null, 2), 'utf8');
        console.log(`💾 ${fileName} сохранён`);
    } catch (err) {
        console.error(`\n❌ Ошибка записи файла ${fileName} в ${OUTPUT}: ${err.message}\n`);
    }
}

(async function main() {
    console.time('Анализ завершён за');
    console.log(`\n🔍 Поиск JS/TS файлов в папке: ${APP_CHUNKS_ROOT}`);

    const files = await fg(['**/*.{js,mjs,cjs,jsx,ts,tsx}'], {
        cwd: APP_CHUNKS_ROOT,
        ignore: ['**/node_modules/**', '**/dist/**', '**/build/**', '**/.git/**'],
        absolute: true,
    });

    console.log(`📂 Найдено файлов: ${files.length}\n`);

    const results = [];

    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const relPath = path.relative(process.cwd(), file);

        process.stdout.write(`📄 Обработка ${i + 1}/${files.length}: ${relPath} ...\r`);

        let code;
        try {
            code = fs.readFileSync(file, 'utf8');
        } catch (err) {
            console.error(`\n\n❌ Ошибка чтения файла ${relPath}: ${err.message}\n`);
            continue;
        }

        let ast;
        try {
            ast = parser.parse(code, {
                sourceType: 'unambiguous',
                plugins: [
                    'jsx',
                    'typescript',
                    'classProperties',
                    'classPrivateProperties',
                    'classPrivateMethods',
                    'decorators-legacy',
                    'dynamicImport',
                    'optionalChaining',
                    'nullishCoalescingOperator',
                    'topLevelAwait',
                    'objectRestSpread',
                ],
            });
        } catch (err) {
            console.error(`\n\n❌ Ошибка парсинга ${relPath}: ${err.message}\n`);
            continue;
        }

        try {
            traverse(ast, {
                CallExpression(callPath) {
                    if (isHttpMethodCallee(callPath.node.callee) && isDirectlyAwaited(callPath)) {
                        const { endpoint, searchParams, searchParamsFormatted, json, jsonFormatted, unsureEndpoint, endpointSource } = extractEndpointAndOptions(
                            callPath.node,
                            callPath,
                        );
                        const functionName = getEnclosingFunctionName(callPath);
                        const result = {
                            name: functionName,
                            method: (callPath.node.callee.property.name ?? callPath.node.callee.property.value).toUpperCase(),
                            endpoint,
                            searchParamKeys: searchParams,
                            jsonBodyKeys: json,
                            formated: {
                                endpoint: '/'.concat(endpoint),
                                searchParamKeys: searchParamsFormatted,
                                jsonBodyKeys: jsonFormatted,
                            },
                            position: {
                                file: relPath,
                                line: callPath.node.loc?.start.line ?? null,
                                column: callPath.node.loc?.start.column ?? null,
                            },
                        };

                        if (unsureEndpoint) {
                            result.unsureEndpoint = true;
                            result.endpointSource = endpointSource;
                        }

                        results.push(result);
                    }

                    const position = {
                        file: relPath,
                        line: callPath.node.loc?.start.line ?? null,
                        column: callPath.node.loc?.start.column ?? null,
                    };
                    const iconUsage = extractIconUsageFromJsxCall(callPath.node, position);
                    if (iconUsage) {
                        if (iconUsage.dynamic) dynamicIconUsages.push(iconUsage);
                        else iconUsages.push(iconUsage);
                    }

                    const mobxConstruct = extractMobxConstruct(callPath, relPath);
                    if (mobxConstruct) mobxConstructs.push(mobxConstruct);
                },

                JSXElement(jsxPath) {
                    const position = {
                        file: relPath,
                        line: jsxPath.node.loc?.start.line ?? null,
                        column: jsxPath.node.loc?.start.column ?? null,
                    };
                    const iconUsage = extractIconUsageFromJsxElement(jsxPath.node, position);
                    if (!iconUsage) return;
                    if (iconUsage.dynamic) dynamicIconUsages.push(iconUsage);
                    else iconUsages.push(iconUsage);
                },

                AssignmentExpression(path) {
                    const { node } = path;

                    const assignedProperty = getMemberPropertyName(node.left);
                    if (assignedProperty === 'iconsCollectionBySize' && node.right.type === 'ObjectExpression') {
                        extractIconCollectionFromObject(node.right);
                    }

                    // Ищем присваивание вида ANY.WebNext = "WebNext"
                    const isWebNextMarker =
                        node.left.type === 'MemberExpression' &&
                        node.left.property.type === 'Identifier' &&
                        node.left.property.name === 'WebNext' &&
                        node.right.type === 'StringLiteral' &&
                        node.right.value === 'WebNext';

                    if (!isWebNextMarker) return;

                    // Находим SequenceExpression-родителя (если есть)
                    let seqNode = path.parentPath.node;
                    if (seqNode.type === 'SequenceExpression') {
                        for (const expr of seqNode.expressions) {
                            if (expr.type === 'AssignmentExpression' && expr.left.type === 'MemberExpression' && expr.left.property.type === 'Identifier') {
                                experiments.push(expr.left.property.name);
                            }
                        }
                    } else {
                        // Иногда присваивания идут без SequenceExpression (редко, но на всякий случай)
                        experiments.push(node.left.property.name);
                    }

                    console.log(`\n\n🔬 Найден реестр экспериментов, всего ключей: ${experiments.length}\n`);
                },
            });
        } catch (err) {
            console.error(`\n\n❌ Ошибка обхода AST в ${relPath}: ${err.message}\n`);
        }
    }

    let compiled = null;
    try {
        console.log('Анализ файлов локализации...');

        const indexContent = fs.readFileSync(MAIN_INDEX_JS_PATH, 'utf8');
        // Найти объявление const translationsRU = { ... }
        const match = indexContent.match(/const\s+translationsRU\s*=\s*(\{[\s\S]*?\n\})/);

        if (match) {
            // Преобразуем найденный объект в JSON
            const translationsCode = match[1];
            // Используем eval в безопасном контексте (только для парсинга)
            const translationsRU = eval('(' + translationsCode + ')');
            compiled = compileMessages(translationsRU);
            console.log('Анализ файлов локализации завершён...');
        } else {
            console.warn('⚠️  Не найдена локализация translationsRU в файле index.js');
        }
    } catch (err) {
        console.warn(`⚠️  Ошибка при чтении локализации: ${err.message}`);
    }

    console.log(`\n\n\n✅ Готово\n🌐 Роутов найдено: ${results.length}`);
    console.log(`🔬 Экспериментов найдено: ${experiments.length}`);
    console.log(`🎨 Иконок найдено: ${Object.keys(generateSimpleIconsList()).length}, использований: ${iconUsages.length}, динамических использований: ${dynamicIconUsages.length}`);
    console.log(`🧩 MobX-конструкций найдено: ${mobxConstructs.length}`);
    if (compiled) console.log(`💬 Локализованных сообщений: ${Object.keys(compiled).length}`);

    console.log(`\nСортирую результаты...`);
    console.time(`Сортировка завершена`);
    results.sort((a, b) => (a.formated.endpoint ?? '').localeCompare(b.formated.endpoint ?? ''));
    experiments.sort((a, b) => a.localeCompare(b));
    iconUsages.sort((a, b) => a.key.localeCompare(b.key) || a.position.file.localeCompare(b.position.file) || (a.position.line ?? 0) - (b.position.line ?? 0));
    dynamicIconUsages.sort((a, b) => a.position.file.localeCompare(b.position.file) || (a.position.line ?? 0) - (b.position.line ?? 0));
    mobxConstructs.sort((a, b) => (a.name ?? a.assignedName ?? '').localeCompare(b.name ?? b.assignedName ?? '') || a.position.file.localeCompare(b.position.file));
    console.timeEnd(`Сортировка завершена`);
    console.timeEnd('Анализ завершён за');

    console.log('');

    try {
        fs.mkdirSync(OUTPUT, { recursive: true });
        createOutputJson(results, 'detailedRoutes.json');
        createOutputJson(generateSimpleRoutesListFromResults(results), 'simpleRoutes.json');
        createOutputJson([...new Set(experiments)], 'experiments.json');
        createOutputJson(generateSimpleIconsList(), 'icons.json');
        createOutputJson({ usages: iconUsages, usageSummary: generateIconUsageSummary(iconUsages), dynamicUsages: dynamicIconUsages }, 'detailedIcons.json');
        createOutputJson(generateSimpleMobxConstructs(mobxConstructs), 'mobxConstructs.json');
        createOutputJson(mobxConstructs, 'detailedMobx.json');
        console.log(`💾 SVG-иконок сохранено: ${writeIconSvgFiles()}`);
        if (compiled) createOutputJson(compiled, 'formatted_ru.json');
        console.log(`\n💾 Результаты сохранёны в ${OUTPUT}`);
    } catch (err) {
        console.error(`\n❌ Ошибка записи файла ${OUTPUT}: ${err.message}\n`);
    }
    console.log('\n\n');
})();
