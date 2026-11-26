const fs = require('node:fs');
const path = require('node:path');
const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;

function isInterfaceCatalog(messages) {
    // The other ru.json context contains SEO metadata.
    return Array.isArray(messages?.['a11y-regions.player']) && Array.isArray(messages?.['about-app.app-name']);
}

function collectRussianCatalogModules(object, modulesByChunk) {
    const ruEntry = object.properties.find(
        (property) => property.type === 'ObjectProperty' && property.key.type === 'StringLiteral' && property.key.value === './ru.json',
    );
    if (ruEntry?.value.type !== 'ArrayExpression') return;

    const ids = ruEntry.value.elements;
    if (ids.length < 2 || !ids.every((element) => element?.type === 'NumericLiteral' && Number.isSafeInteger(element.value))) return;

    const [moduleId, ...chunkIds] = ids.map((element) => element.value);
    for (const chunkId of chunkIds) {
        if (!modulesByChunk.has(chunkId)) modulesByChunk.set(chunkId, new Set());
        modulesByChunk.get(chunkId).add(moduleId);
    }
}

function isMember(node, objectName, propertyName) {
    return (
        node?.type === 'MemberExpression' &&
        node.object.type === 'Identifier' &&
        node.object.name === objectName &&
        (node.computed ? node.property.type === 'StringLiteral' && node.property.value === propertyName : node.property.name === propertyName)
    );
}

function readRendererCatalog(files, modulesByChunk) {
    let catalog;
    for (const file of files) {
        const chunkId = path.basename(file).match(/^(\d+)[.-]/)?.[1];
        const moduleIds = modulesByChunk.get(Number(chunkId));
        if (!moduleIds) continue;

        traverse(parser.parse(fs.readFileSync(file, 'utf8')), {
            AssignmentExpression(assignment) {
                const { operator, left, right } = assignment.node;
                if (operator !== '=' || right.type !== 'CallExpression' || !isMember(right.callee, 'JSON', 'parse')) return;
                const [json] = right.arguments;
                if (json?.type !== 'StringLiteral') return;

                const factory = assignment.getFunctionParent();
                const moduleProperty = factory?.parentPath;
                if (!moduleProperty?.isObjectProperty()) return;
                const moduleKey = moduleProperty.node.key;
                if (!moduleIds.has(Number(moduleKey.value))) return;
                const [moduleParam] = factory.node.params;
                if (moduleParam?.type !== 'Identifier' || !isMember(left, moduleParam.name, 'exports')) return;

                const messages = JSON.parse(json.value);
                if (!isInterfaceCatalog(messages)) return;
                if (catalog && JSON.stringify(catalog) !== JSON.stringify(messages)) {
                    throw new Error('Найдены разные русские каталоги интерфейса в чанках');
                }
                catalog = messages;
            },
        });
    }
    return catalog;
}

function readLiteral(node) {
    switch (node?.type) {
        case 'StringLiteral':
        case 'NumericLiteral':
        case 'BooleanLiteral':
            return node.value;
        case 'NullLiteral':
            return null;
        case 'ArrayExpression':
            return node.elements.map(readLiteral);
        case 'ObjectExpression':
            return Object.fromEntries(
                node.properties.map((property) => {
                    if (property.type !== 'ObjectProperty' || property.computed) throw new Error('Неподдерживаемое свойство translationsRU');
                    return [property.key.name ?? property.key.value, readLiteral(property.value)];
                }),
            );
        default:
            throw new Error(`Неподдерживаемое значение translationsRU: ${node?.type}`);
    }
}

function readDesktopCatalog(indexPath) {
    if (!fs.existsSync(indexPath)) return {};

    const { program } = parser.parse(fs.readFileSync(indexPath, 'utf8'), { sourceType: 'unambiguous' });
    const declaration = program.body
        .filter((statement) => statement.type === 'VariableDeclaration')
        .flatMap((statement) => statement.declarations)
        .find(({ id }) => id.type === 'Identifier' && id.name === 'translationsRU');
    return declaration ? readLiteral(declaration.init) : {};
}

function readRussianLocalization(indexPath, chunkFiles, modulesByChunk) {
    const renderer = readRendererCatalog(chunkFiles, modulesByChunk);
    let desktop = {};
    try {
        desktop = readDesktopCatalog(indexPath);
    } catch (error) {
        if (!renderer) throw error;
        console.warn(`⚠️  Не удалось прочитать локализацию из index.js: ${error.message}`);
    }

    if (!renderer && !isInterfaceCatalog(desktop)) {
        throw new Error('Не найден полный русский каталог интерфейса в чанках и index.js');
    }

    return { ...renderer, ...desktop };
}

module.exports = { collectRussianCatalogModules, readRussianLocalization };
