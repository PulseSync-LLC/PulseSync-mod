const fs = require('fs');
const path = require('path');
const fg = require('fast-glob');
const postcss = require('postcss');
const cssTree = require('css-tree');

function normalizeClassName(name) {
    return name.replace(/^(.+_[A-Za-z0-9_-]+)__[A-Za-z0-9_-]{5}$/, '$1');
}

function normalizeDeclaration(node) {
    const declaration = cssTree.parse(`${node.prop}: ${node.value}${node.important ? ' !important' : ''}`, { context: 'declaration' });
    if (/^(?:-webkit-)?animation(?:-name)?$/i.test(declaration.property)) {
        cssTree.walk(declaration.value, {
            visit: 'Identifier',
            enter(identifier) {
                identifier.name = normalizeClassName(identifier.name);
            },
        });
    }
    return cssTree.generate(declaration);
}

function collectCssClasses(root) {
    const files = fg.sync('app/_next/static/css/**/*.css', { cwd: root, absolute: true, onlyFiles: true }).sort();
    if (!files.length) throw new Error(`CSS-файлы не найдены в ${path.join(root, 'app/_next/static/css')}`);

    const classes = new Map();

    for (const file of files) {
        const ast = postcss.parse(fs.readFileSync(file, 'utf8'), { from: file });

        function visitBlock(children, contexts = [], inheritedNames = []) {
            const declarations = [];
            for (const name of inheritedNames) {
                const key = normalizeClassName(name);
                if (!classes.has(key)) classes.set(key, { names: new Set(), files: new Map() });
                classes.get(key).names.add(name);
            }

            function flushDeclarations() {
                if (!declarations.length) return;
                const rule = contexts.reduceRight(
                    (body, context) =>
                        `${context} {\n${body
                            .split('\n')
                            .map((line) => `    ${line}`)
                            .join('\n')}\n}`,
                    `${declarations.join(';\n')};`,
                );
                for (const key of new Set(inheritedNames.map(normalizeClassName))) {
                    const entry = classes.get(key);
                    if (!entry.files.has(file)) entry.files.set(file, []);
                    entry.files.get(file).push(rule);
                }
                declarations.length = 0;
            }

            children.forEach((node) => {
                if (node.type === 'decl') {
                    declarations.push(normalizeDeclaration(node));
                } else if (node.type === 'rule') {
                    flushDeclarations();
                    const selectors = cssTree.parse(node.selector, { context: 'selectorList' });
                    selectors.children.forEach((selector) => {
                        const names = new Set(inheritedNames);
                        const normalizedSelector = cssTree.clone(selector);
                        cssTree.walk(normalizedSelector, {
                            visit: 'ClassSelector',
                            enter(classNode) {
                                names.add(classNode.name);
                                classNode.name = normalizeClassName(classNode.name);
                            },
                        });
                        visitBlock(node.nodes, [...contexts, cssTree.generate(normalizedSelector)], [...names]);
                    });
                } else if (node.type === 'atrule' && node.nodes) {
                    if (/^(?:-webkit-)?keyframes$/i.test(node.name)) return;
                    flushDeclarations();
                    const prelude = cssTree.parse(`@${node.name} ${node.params};`);
                    cssTree.walk(prelude, {
                        visit: 'ClassSelector',
                        enter(classNode) {
                            classNode.name = normalizeClassName(classNode.name);
                        },
                    });
                    visitBlock(node.nodes, [...contexts, cssTree.generate(prelude).replace(/;$/, '')], inheritedNames);
                }
            });
            flushDeclarations();
        }

        visitBlock(ast.nodes);
    }

    return {
        schemaVersion: 1,
        classes: Object.fromEntries(
            [...classes.entries()]
                .sort(([a], [b]) => a.localeCompare(b))
                .map(([key, entry]) => [
                    key,
                    {
                        names: [...entry.names].sort(),
                        // Keep cascade order inside each file, independent of hashed chunk filenames.
                        rules: [...new Set([...entry.files.values()].map((rules) => rules.join('\n')))].sort(),
                    },
                ]),
        ),
    };
}

function calculateCssClassesDiff(oldClasses, newClasses) {
    const diff = { added: [], changed: [], removed: [], rehashed: [] };

    for (const [key, newValue] of Object.entries(newClasses)) {
        const oldValue = oldClasses[key];
        if (!Object.hasOwn(oldClasses, key)) {
            diff.added.push({ key, value: newValue });
        } else if (JSON.stringify(oldValue.rules) !== JSON.stringify(newValue.rules)) {
            diff.changed.push({ key, oldValue, newValue });
        } else if (JSON.stringify(oldValue.names) !== JSON.stringify(newValue.names)) {
            diff.rehashed.push({ key, oldNames: oldValue.names, newNames: newValue.names });
        }
    }

    for (const [key, value] of Object.entries(oldClasses)) {
        if (!Object.hasOwn(newClasses, key)) diff.removed.push({ key, value });
    }

    return diff;
}

function getCssProperties(rules) {
    const properties = new Map();

    for (const ruleGroup of rules) {
        const groupProperties = new Map();
        postcss.parse(ruleGroup).walkDecls((declaration) => {
            const contexts = [];
            for (let parent = declaration.parent; parent && parent.type !== 'root'; parent = parent.parent) {
                contexts.unshift(parent.type === 'rule' ? parent.selector : `@${parent.name} ${parent.params}`);
            }
            if (!groupProperties.has(declaration.prop)) groupProperties.set(declaration.prop, new Map());
            const contextualValues = groupProperties.get(declaration.prop);
            const context = JSON.stringify(contexts);
            if (!contextualValues.has(context)) contextualValues.set(context, []);
            contextualValues.get(context).push(`${declaration.value}${declaration.important ? ' !important' : ''}`);
        });

        for (const [property, contextualValues] of groupProperties) {
            if (!properties.has(property)) properties.set(property, new Map());
            for (const [context, values] of contextualValues) {
                const contexts = properties.get(property);
                if (!contexts.has(context)) contexts.set(context, []);
                contexts.get(context).push(values);
            }
        }
    }

    return properties;
}

function getCssPropertyChanges(oldValue, newValue) {
    const oldProperties = getCssProperties(oldValue.rules);
    const newProperties = getCssProperties(newValue.rules);
    const changes = [];

    for (const property of new Set([...oldProperties.keys(), ...newProperties.keys()])) {
        const oldContexts = oldProperties.get(property) ?? new Map();
        const newContexts = newProperties.get(property) ?? new Map();
        for (const context of new Set([...oldContexts.keys(), ...newContexts.keys()])) {
            const sortGroups = (groups) => [...groups].sort((a, b) => JSON.stringify(a).localeCompare(JSON.stringify(b)));
            const oldValues = sortGroups(oldContexts.get(context) ?? []);
            const newValues = sortGroups(newContexts.get(context) ?? []);
            if (JSON.stringify(oldValues) !== JSON.stringify(newValues)) {
                changes.push({ context: JSON.parse(context), property, oldValues, newValues });
            }
        }
    }

    return changes.sort((a, b) => JSON.stringify(a.context).localeCompare(JSON.stringify(b.context)) || a.property.localeCompare(b.property));
}

function formatCssChangeContext(context, className) {
    const componentPrefix = className.slice(0, className.indexOf('_') + 1);
    const localName = className.slice(componentPrefix.length);
    const variantPrefix = localName.includes('_') ? localName.slice(0, localName.indexOf('_') + 1) : '';

    return context
        .map((condition) => {
            if (condition.startsWith('@')) {
                return condition.replace(/^@media only screen and \(max-width:([^)]+)\)$/, 'screen ≤$1').replace(/^@/, '');
            }
            const selector = cssTree.parse(condition, { context: 'selectorList' });
            cssTree.walk(selector, {
                visit: 'ClassSelector',
                enter(node) {
                    if (node.name === className) {
                        node.type = 'NestingSelector';
                        delete node.name;
                    } else if (componentPrefix && node.name.startsWith(componentPrefix)) {
                        node.name = node.name.slice(componentPrefix.length);
                        if (variantPrefix && node.name.startsWith(variantPrefix)) node.name = node.name.slice(variantPrefix.length);
                    }
                },
            });
            return cssTree.generate(selector);
        })
        .filter((condition) => condition !== '&')
        .join('; ');
}

module.exports = { collectCssClasses, calculateCssClassesDiff, getCssPropertyChanges, formatCssChangeContext };
