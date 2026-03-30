function createModernizeUtils(runtime) {
    const { fsp, path } = runtime.deps;
    const parser = require('@babel/parser');
    const traverse = require('@babel/traverse').default;
    const t = require('@babel/types');
    const generate = require('@babel/generator').default;

    const TRANSFORMABLE_EXTENSIONS = new Set(['.js', '.jsx', '.ts', '.tsx', '.mjs', '.cjs']);
    const IGNORED_DIRECTORY_NAMES = new Set(['node_modules']);
    const MAX_TRANSFORM_PASSES = 5;

    function cloneNode(node) {
        return t.cloneNode(node, true);
    }

    function parseCode(code) {
        return parser.parse(code, {
            sourceType: 'unambiguous',
            errorRecovery: true,
            plugins: ['jsx', 'typescript', 'optionalChaining', 'nullishCoalescingOperator', 'objectRestSpread', 'classProperties', 'dynamicImport', 'topLevelAwait'],
        });
    }

    function isTransformableFile(filePath) {
        return TRANSFORMABLE_EXTENSIONS.has(path.extname(filePath).toLowerCase());
    }

    function isLiteralMinusOne(node) {
        return t.isNumericLiteral(node, { value: -1 }) || (t.isUnaryExpression(node, { operator: '-' }) && t.isNumericLiteral(node.argument, { value: 1 }));
    }

    function isIndexOfCall(node) {
        return (
            t.isCallExpression(node) &&
            t.isMemberExpression(node.callee) &&
            !node.callee.computed &&
            t.isIdentifier(node.callee.property, { name: 'indexOf' }) &&
            node.arguments.length === 1
        );
    }

    function makeIncludesCall(indexOfCall) {
        return t.callExpression(t.memberExpression(indexOfCall.callee.object, t.identifier('includes')), indexOfCall.arguments.map((argument) => cloneNode(argument)));
    }

    function isEmptyObjectLiteral(node) {
        return t.isObjectExpression(node) && node.properties.length === 0;
    }

    function canSpreadArgument(node) {
        return (
            t.isIdentifier(node) ||
            t.isMemberExpression(node) ||
            t.isCallExpression(node) ||
            t.isConditionalExpression(node) ||
            t.isLogicalExpression(node) ||
            t.isObjectExpression(node) ||
            t.isArrayExpression(node)
        );
    }

    function isNullNode(node) {
        return t.isNullLiteral(node);
    }

    function isVoidZeroNode(node) {
        return t.isUnaryExpression(node, { operator: 'void' }) && t.isNumericLiteral(node.argument, { value: 0 });
    }

    function isUndefinedNode(node) {
        return t.isIdentifier(node, { name: 'undefined' }) || isVoidZeroNode(node);
    }

    function isNullishNode(node) {
        return isNullNode(node) || isUndefinedNode(node);
    }

    function isSimpleBase(node) {
        return t.isIdentifier(node) || t.isThisExpression(node) || t.isMemberExpression(node);
    }

    function sameNode(a, b) {
        if (!a || !b) {
            return false;
        }

        if (t.isIdentifier(a) && t.isIdentifier(b)) {
            return a.name === b.name;
        }

        if (t.isThisExpression(a) && t.isThisExpression(b)) {
            return true;
        }

        if (t.isMemberExpression(a) && t.isMemberExpression(b)) {
            if (a.computed !== b.computed) {
                return false;
            }

            const sameObject = sameNode(a.object, b.object);
            let sameProperty = false;

            if (t.isIdentifier(a.property) && t.isIdentifier(b.property)) {
                sameProperty = a.property.name === b.property.name;
            } else if (t.isStringLiteral(a.property) && t.isStringLiteral(b.property)) {
                sameProperty = a.property.value === b.property.value;
            } else if (t.isNumericLiteral(a.property) && t.isNumericLiteral(b.property)) {
                sameProperty = a.property.value === b.property.value;
            }

            return sameObject && sameProperty;
        }

        return false;
    }

    function flattenAndChain(node, parts = []) {
        if (t.isLogicalExpression(node, { operator: '&&' })) {
            flattenAndChain(node.left, parts);
            flattenAndChain(node.right, parts);
            return parts;
        }

        parts.push(node);
        return parts;
    }

    function flattenLogicalExpression(node, operator, parts = []) {
        if (t.isLogicalExpression(node, { operator })) {
            flattenLogicalExpression(node.left, operator, parts);
            flattenLogicalExpression(node.right, operator, parts);
            return parts;
        }

        parts.push(node);
        return parts;
    }

    function buildOptionalChainOrCallFromAnd(node) {
        const parts = flattenAndChain(node);

        if (parts.length < 2) {
            return null;
        }

        const first = parts[0];

        if (!isSimpleBase(first)) {
            return null;
        }

        let result = cloneNode(first);
        let prev = first;

        for (let index = 1; index < parts.length; index++) {
            const current = parts[index];

            if (t.isMemberExpression(current)) {
                if (!sameNode(current.object, prev)) {
                    return null;
                }

                result = t.optionalMemberExpression(result, cloneNode(current.property), current.computed, true);
                prev = current;
                continue;
            }

            if (t.isCallExpression(current) && t.isMemberExpression(current.callee)) {
                if (sameNode(current.callee, prev)) {
                    result = t.optionalCallExpression(result, current.arguments.map((argument) => cloneNode(argument)), true);
                    prev = current.callee;
                    continue;
                }

                if (sameNode(current.callee.object, prev)) {
                    const optionalMember = t.optionalMemberExpression(result, cloneNode(current.callee.property), current.callee.computed, true);
                    result = t.optionalCallExpression(optionalMember, current.arguments.map((argument) => cloneNode(argument)), false);
                    prev = current.callee;
                    continue;
                }
            }

            return null;
        }

        return result;
    }

    function isArrayPrototypeSliceCallArguments(node) {
        return (
            t.isCallExpression(node) &&
            t.isMemberExpression(node.callee) &&
            !node.callee.computed &&
            t.isIdentifier(node.callee.property, { name: 'call' }) &&
            node.arguments.length === 1 &&
            t.isIdentifier(node.arguments[0], { name: 'arguments' }) &&
            t.isMemberExpression(node.callee.object) &&
            !node.callee.object.computed &&
            t.isIdentifier(node.callee.object.property, { name: 'slice' }) &&
            t.isMemberExpression(node.callee.object.object) &&
            !node.callee.object.object.computed &&
            t.isIdentifier(node.callee.object.object.property, { name: 'prototype' }) &&
            t.isIdentifier(node.callee.object.object.object, { name: 'Array' })
        );
    }

    function makeSpreadArgumentsArray() {
        return t.arrayExpression([t.spreadElement(t.identifier('arguments'))]);
    }

    function createEmptyStats() {
        return {
            objectAssignToSpread: 0,
            indexOfToIncludes: 0,
            andChainToOptional: 0,
            ternaryToNullish: 0,
            transpiledOptionalToOptional: 0,
            transpiledNullishToNullish: 0,
            sliceCallArguments: 0,
        };
    }

    function mergeStats(target, source) {
        for (const key of Object.keys(target)) {
            target[key] += source[key] ?? 0;
        }
    }

    function extractGuardCandidate(node) {
        if (t.isAssignmentExpression(node, { operator: '=' }) && t.isIdentifier(node.left)) {
            return {
                binding: node.left,
                value: node.right,
            };
        }

        if (t.isIdentifier(node) || t.isMemberExpression(node) || t.isThisExpression(node)) {
            return {
                binding: node,
                value: node,
            };
        }

        return null;
    }

    function matchNullishComparison(node, operators) {
        if (!t.isBinaryExpression(node) || !operators.includes(node.operator)) {
            return null;
        }

        if (isNullishNode(node.right)) {
            return extractGuardCandidate(node.left);
        }

        if (isNullishNode(node.left)) {
            return extractGuardCandidate(node.right);
        }

        return null;
    }

    function extractGuardInfo(node, logicalOperator, comparisonOperators) {
        if (logicalOperator && t.isLogicalExpression(node, { operator: logicalOperator })) {
            const parts = flattenLogicalExpression(node, logicalOperator);
            let matched = null;

            for (const part of parts) {
                const current = matchNullishComparison(part, comparisonOperators);
                if (!current) {
                    return null;
                }

                if (!matched) {
                    matched = current;
                    continue;
                }

                if (!sameNode(matched.binding, current.binding)) {
                    return null;
                }
            }

            return matched;
        }

        return matchNullishComparison(node, comparisonOperators);
    }

    function extractNullishGuardInfo(node) {
        return extractGuardInfo(node, '||', ['==', '===']);
    }

    function extractNonNullishGuardInfo(node) {
        return extractGuardInfo(node, '&&', ['!=', '!==']);
    }

    function hasOptionalChain(node) {
        return t.isOptionalMemberExpression(node) || t.isOptionalCallExpression(node);
    }

    function rebuildGuardedExpression(node, guardInfo) {
        if (sameNode(node, guardInfo.binding)) {
            return cloneNode(guardInfo.value);
        }

        if (t.isMemberExpression(node)) {
            const rebuiltObject = rebuildGuardedExpression(node.object, guardInfo);
            if (!rebuiltObject) {
                return null;
            }

            if (sameNode(node.object, guardInfo.binding) || hasOptionalChain(rebuiltObject)) {
                return t.optionalMemberExpression(rebuiltObject, cloneNode(node.property), node.computed, sameNode(node.object, guardInfo.binding));
            }

            return t.memberExpression(rebuiltObject, cloneNode(node.property), node.computed);
        }

        if (t.isCallExpression(node)) {
            const rebuiltCallee = rebuildGuardedExpression(node.callee, guardInfo);
            if (!rebuiltCallee) {
                return null;
            }

            const rebuiltArguments = node.arguments.map((argument) => cloneNode(argument));

            if (sameNode(node.callee, guardInfo.binding) || hasOptionalChain(rebuiltCallee)) {
                return t.optionalCallExpression(rebuiltCallee, rebuiltArguments, sameNode(node.callee, guardInfo.binding));
            }

            return t.callExpression(rebuiltCallee, rebuiltArguments);
        }

        return null;
    }

    function extractNullishValue(node, guardInfo) {
        if (sameNode(node, guardInfo.binding) || sameNode(node, guardInfo.value)) {
            return cloneNode(guardInfo.value);
        }

        return null;
    }

    function transformAst(ast) {
        let totalChanges = 0;
        const totalStats = createEmptyStats();

        for (let passIndex = 0; passIndex < MAX_TRANSFORM_PASSES; passIndex++) {
            let passChanges = 0;
            const passStats = createEmptyStats();

            traverse(ast, {
                CallExpression(astPath) {
                    const { node } = astPath;

                    if (isArrayPrototypeSliceCallArguments(node)) {
                        astPath.replaceWith(makeSpreadArgumentsArray());
                        passChanges++;
                        passStats.sliceCallArguments++;
                        return;
                    }

                    if (
                        t.isMemberExpression(node.callee) &&
                        !node.callee.computed &&
                        t.isIdentifier(node.callee.object, { name: 'Object' }) &&
                        t.isIdentifier(node.callee.property, { name: 'assign' }) &&
                        node.arguments.length >= 2 &&
                        isEmptyObjectLiteral(node.arguments[0])
                    ) {
                        const restArgs = node.arguments.slice(1);

                        if (restArgs.every(canSpreadArgument)) {
                            astPath.replaceWith(t.objectExpression(restArgs.map((argument) => t.spreadElement(cloneNode(argument)))));
                            passChanges++;
                            passStats.objectAssignToSpread++;
                        }
                    }
                },

                BinaryExpression(astPath) {
                    const { node } = astPath;

                    if ((node.operator === '!==' || node.operator === '!=') && isIndexOfCall(node.left) && isLiteralMinusOne(node.right)) {
                        astPath.replaceWith(makeIncludesCall(node.left));
                        passChanges++;
                        passStats.indexOfToIncludes++;
                        return;
                    }

                    if ((node.operator === '!==' || node.operator === '!=') && isLiteralMinusOne(node.left) && isIndexOfCall(node.right)) {
                        astPath.replaceWith(makeIncludesCall(node.right));
                        passChanges++;
                        passStats.indexOfToIncludes++;
                        return;
                    }

                    if ((node.operator === '===' || node.operator === '==') && isIndexOfCall(node.left) && isLiteralMinusOne(node.right)) {
                        astPath.replaceWith(t.unaryExpression('!', makeIncludesCall(node.left), true));
                        passChanges++;
                        passStats.indexOfToIncludes++;
                        return;
                    }

                    if ((node.operator === '===' || node.operator === '==') && isLiteralMinusOne(node.left) && isIndexOfCall(node.right)) {
                        astPath.replaceWith(t.unaryExpression('!', makeIncludesCall(node.right), true));
                        passChanges++;
                        passStats.indexOfToIncludes++;
                    }
                },

                LogicalExpression(astPath) {
                    const { node } = astPath;

                    if (node.operator !== '&&') {
                        return;
                    }

                    const optional = buildOptionalChainOrCallFromAnd(node);

                    if (optional) {
                        astPath.replaceWith(optional);
                        passChanges++;
                        passStats.andChainToOptional++;
                    }
                },

                ConditionalExpression(astPath) {
                    const { node } = astPath;

                    if (t.isLogicalExpression(node.test, { operator: '&&' }) && sameNode(node.test.right, node.consequent)) {
                        const optional = buildOptionalChainOrCallFromAnd(node.test);

                        if (optional) {
                            astPath.replaceWith(t.logicalExpression('??', optional, cloneNode(node.alternate)));
                            passChanges++;
                            passStats.ternaryToNullish++;
                            return;
                        }
                    }

                    if (isUndefinedNode(node.consequent)) {
                        const nullishGuard = extractNullishGuardInfo(node.test);
                        if (nullishGuard) {
                            const optional = rebuildGuardedExpression(node.alternate, nullishGuard);
                            if (optional) {
                                astPath.replaceWith(optional);
                                passChanges++;
                                passStats.transpiledOptionalToOptional++;
                                return;
                            }
                        }
                    }

                    if (isUndefinedNode(node.alternate)) {
                        const nonNullishGuard = extractNonNullishGuardInfo(node.test);
                        if (nonNullishGuard) {
                            const optional = rebuildGuardedExpression(node.consequent, nonNullishGuard);
                            if (optional) {
                                astPath.replaceWith(optional);
                                passChanges++;
                                passStats.transpiledOptionalToOptional++;
                                return;
                            }
                        }
                    }

                    if (
                        t.isBinaryExpression(node.test) &&
                        (node.test.operator === '==' || node.test.operator === '===') &&
                        sameNode(node.test.left, node.alternate) &&
                        isNullishNode(node.test.right)
                    ) {
                        astPath.replaceWith(t.logicalExpression('??', cloneNode(node.alternate), cloneNode(node.consequent)));
                        passChanges++;
                        passStats.ternaryToNullish++;
                        return;
                    }

                    if (
                        t.isBinaryExpression(node.test) &&
                        (node.test.operator === '==' || node.test.operator === '===') &&
                        sameNode(node.test.right, node.alternate) &&
                        isNullishNode(node.test.left)
                    ) {
                        astPath.replaceWith(t.logicalExpression('??', cloneNode(node.alternate), cloneNode(node.consequent)));
                        passChanges++;
                        passStats.ternaryToNullish++;
                        return;
                    }

                    const negativeNullishGuard = extractNullishGuardInfo(node.test);
                    if (negativeNullishGuard) {
                        const guardedValue = extractNullishValue(node.alternate, negativeNullishGuard);
                        if (guardedValue && !isUndefinedNode(node.consequent)) {
                            astPath.replaceWith(t.logicalExpression('??', guardedValue, cloneNode(node.consequent)));
                            passChanges++;
                            passStats.transpiledNullishToNullish++;
                            return;
                        }
                    }

                    const positiveNullishGuard = extractNonNullishGuardInfo(node.test);
                    if (positiveNullishGuard) {
                        const guardedValue = extractNullishValue(node.consequent, positiveNullishGuard);
                        if (guardedValue && !isUndefinedNode(node.alternate)) {
                            astPath.replaceWith(t.logicalExpression('??', guardedValue, cloneNode(node.alternate)));
                            passChanges++;
                            passStats.transpiledNullishToNullish++;
                        }
                    }
                },
            });

            if (passChanges === 0) {
                break;
            }

            totalChanges += passChanges;
            mergeStats(totalStats, passStats);
        }

        return { changes: totalChanges, stats: totalStats };
    }

    async function transformFile(srcPath, destPath) {
        const input = await fsp.readFile(srcPath, 'utf8');

        try {
            const ast = parseCode(input);
            const result = transformAst(ast);

            if (result.changes === 0) {
                await fsp.writeFile(destPath, input, 'utf8');
                return {
                    changes: 0,
                    stats: result.stats,
                    error: null,
                };
            }

            const output = generate(
                ast,
                {
                    comments: true,
                    compact: false,
                    retainLines: false,
                    jsescOption: { minimal: true },
                },
                input,
            ).code;

            await fsp.writeFile(destPath, output, 'utf8');
            return {
                changes: result.changes,
                stats: result.stats,
                error: null,
            };
        } catch (error) {
            await fsp.writeFile(destPath, input, 'utf8');
            return {
                changes: 0,
                stats: createEmptyStats(),
                error,
            };
        }
    }

    function createSummary(srcDir, destDir) {
        return {
            srcDir,
            destDir,
            changedFiles: 0,
            totalChanges: 0,
            processedFiles: 0,
            stats: createEmptyStats(),
            errors: [],
        };
    }

    function assertSafeDestination(srcDir, destDir) {
        const resolvedSrc = path.resolve(srcDir);
        const resolvedDest = path.resolve(destDir);

        if (resolvedSrc === resolvedDest) {
            throw new Error('Исходная и целевая директории должны отличаться');
        }

        if (resolvedDest.startsWith(`${resolvedSrc}${path.sep}`)) {
            throw new Error('Целевая директория не может быть вложена в исходную');
        }
    }

    async function modernizeDirectoryRecursive(srcDir, destDir, summary) {
        await fsp.mkdir(destDir, { recursive: true });
        const entries = await fsp.readdir(srcDir, { withFileTypes: true });

        for (const entry of entries) {
            const srcPath = path.join(srcDir, entry.name);
            const destPath = path.join(destDir, entry.name);

            if (entry.isDirectory()) {
                if (IGNORED_DIRECTORY_NAMES.has(entry.name)) {
                    await fsp.cp(srcPath, destPath, { recursive: true, force: true });
                    continue;
                }

                await modernizeDirectoryRecursive(srcPath, destPath, summary);
                continue;
            }

            if (!entry.isFile() || !isTransformableFile(srcPath)) {
                await fsp.cp(srcPath, destPath, { recursive: true, force: true });
                continue;
            }

            const result = await transformFile(srcPath, destPath);
            summary.processedFiles++;
            mergeStats(summary.stats, result.stats);

            if (result.changes > 0) {
                summary.changedFiles++;
                summary.totalChanges += result.changes;
            }

            if (result.error) {
                summary.errors.push({
                    filePath: srcPath,
                    error: result.error,
                });
            }
        }
    }

    async function modernizeDirectory(srcDir, destDir) {
        const resolvedSrc = path.resolve(srcDir);
        const resolvedDest = path.resolve(destDir);

        assertSafeDestination(resolvedSrc, resolvedDest);
        await fsp.rm(resolvedDest, { recursive: true, force: true });

        const summary = createSummary(resolvedSrc, resolvedDest);
        await modernizeDirectoryRecursive(resolvedSrc, resolvedDest, summary);
        return summary;
    }

    function formatSummary(summary) {
        return [
            `Изменено файлов: ${summary.changedFiles}`,
            `Всего трансформаций: ${summary.totalChanges}`,
            `Обработано JS-файлов: ${summary.processedFiles}`,
            `- Object.assign({}, ...) -> spread: ${summary.stats.objectAssignToSpread}`,
            `- indexOf(...) -> includes(...): ${summary.stats.indexOfToIncludes}`,
            `- &&-цепочки -> optional chaining/call: ${summary.stats.andChainToOptional}`,
            `- ternary/nullish -> ??: ${summary.stats.ternaryToNullish}`,
            `- transpiled optional chaining -> ?.: ${summary.stats.transpiledOptionalToOptional}`,
            `- transpiled nullish checks -> ??: ${summary.stats.transpiledNullishToNullish}`,
            `- Array.prototype.slice.call(arguments) -> [...arguments]: ${summary.stats.sliceCallArguments}`,
            `Ошибок с копированием как есть: ${summary.errors.length}`,
        ];
    }

    return {
        modernizeDirectory,
        formatSummary,
    };
}

module.exports = {
    createModernizeUtils,
};
