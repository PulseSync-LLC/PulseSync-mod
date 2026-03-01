function createAdaptivePatchHelpers(deps) {
    const { fsp, path, listFilesRecursively, pathExists, resolveReferencePath } = deps;
    const moduleExportIndexCache = new Map();

    function normalizePatchPath(rawPath) {
        if (!rawPath) {
            return null;
        }

        let normalized = rawPath.trim();
        if ((normalized.startsWith('"') && normalized.endsWith('"')) || (normalized.startsWith("'") && normalized.endsWith("'"))) {
            normalized = normalized.slice(1, -1);
        }

        normalized = normalized.replace(/^([ab])\//, '');
        normalized = normalized.replace(/\\\\/g, '\\');
        normalized = normalized.replace(/\//g, path.sep);

        return path.normalize(normalized);
    }

    function parseUnifiedDiff(patchText) {
        const lines = patchText.replace(/\r/g, '').split('\n');
        const filePatches = [];
        let currentFile = null;

        for (let index = 0; index < lines.length; index += 1) {
            const line = lines[index];

            if (line.startsWith('diff --git ')) {
                if (currentFile) {
                    filePatches.push(currentFile);
                }

                currentFile = {
                    oldPath: null,
                    newPath: null,
                    hunks: [],
                };
                continue;
            }

            if (!currentFile) {
                continue;
            }

            if (line.startsWith('--- ')) {
                currentFile.oldPath = normalizePatchPath(line.slice(4));
                continue;
            }

            if (line.startsWith('+++ ')) {
                currentFile.newPath = normalizePatchPath(line.slice(4));
                continue;
            }

            if (!line.startsWith('@@')) {
                continue;
            }

            const headerMatch = line.match(/^@@ -(\d+)(?:,(\d+))? \+(\d+)(?:,(\d+))? @@/);
            if (!headerMatch) {
                throw new Error(`Некорректный hunk header: ${line}`);
            }

            const hunk = {
                oldStart: Number(headerMatch[1]),
                oldLines: Number(headerMatch[2] ?? 1),
                newStart: Number(headerMatch[3]),
                newLines: Number(headerMatch[4] ?? 1),
                lines: [],
            };

            index += 1;
            while (index < lines.length) {
                const nextLine = lines[index];
                if (nextLine.startsWith('diff --git ') || nextLine.startsWith('@@ ')) {
                    index -= 1;
                    break;
                }

                if (nextLine.startsWith('\\ No newline at end of file')) {
                    index += 1;
                    continue;
                }

                if (![' ', '+', '-'].includes(nextLine[0])) {
                    index -= 1;
                    break;
                }

                hunk.lines.push(nextLine);
                index += 1;
            }

            currentFile.hunks.push(hunk);
        }

        if (currentFile) {
            filePatches.push(currentFile);
        }

        return filePatches;
    }

    function getOldHunkLines(hunk) {
        return hunk.lines.filter((line) => line[0] !== '+').map((line) => line.slice(1));
    }

    function getNewHunkLines(hunk) {
        return hunk.lines.filter((line) => line[0] !== '-').map((line) => line.slice(1));
    }

    function getAnchorScore(line) {
        const trimmed = line.trim();
        if (!trimmed || trimmed.length < 8) {
            return -1;
        }

        let score = trimmed.length;
        if (/['"`]/.test(trimmed)) {
            score += 40;
        }
        if (/[А-Яа-яA-Za-z]{4,}/.test(trimmed)) {
            score += 15;
        }
        if (/^\w+\s*=\s*r\(\d+\)/.test(trimmed)) {
            score -= 50;
        }
        if (/^[\s,.;:{}()[\]]+$/.test(trimmed)) {
            score -= 100;
        }

        return score;
    }

    function collectAnchorLines(lines) {
        return lines
            .map((line, index) => ({ line, index, score: getAnchorScore(line) }))
            .filter((entry) => entry.score > 0)
            .sort((left, right) => right.score - left.score)
            .slice(0, 12);
    }

    async function readFileCache(cache, filePath) {
        if (!cache.has(filePath)) {
            cache.set(filePath, await fsp.readFile(filePath, 'utf8'));
        }
        return cache.get(filePath);
    }

    function countAnchorMatches(content, anchors) {
        let score = 0;
        for (const anchor of anchors) {
            if (content.includes(anchor.line.trim())) {
                score += anchor.score;
            }
        }
        return score;
    }

    function countExactLineMatches(content, lines) {
        let score = 0;
        for (const line of lines) {
            const trimmed = line.trim();
            if (trimmed && content.includes(trimmed)) {
                score += 1;
            }
        }
        return score;
    }

    function getPossibleRelativePaths(referencePath) {
        if (!referencePath) {
            return [];
        }

        const normalized = referencePath.replace(/\//g, path.sep);
        const candidates = new Set();
        const markers = [`${path.sep}app${path.sep}`, `${path.sep}_next${path.sep}`, `${path.sep}static${path.sep}`];

        for (const marker of markers) {
            const markerIndex = normalized.indexOf(marker);
            if (markerIndex >= 0) {
                candidates.add(normalized.slice(markerIndex + 1));
            }
        }

        candidates.add(path.basename(normalized));
        return [...candidates];
    }

    async function resolveTargetFileMatches(targetRoot, filePatch) {
        const referenceCandidates = [...getPossibleRelativePaths(filePatch.newPath), ...getPossibleRelativePaths(filePatch.oldPath)];
        for (const relativePath of referenceCandidates) {
            const candidatePath = path.join(targetRoot, relativePath);
            if (await pathExists(candidatePath)) {
                return [
                    {
                        matchedPath: candidatePath,
                        matchReason: `exact-relative:${relativePath}`,
                        score: Number.MAX_SAFE_INTEGER,
                        exactLineMatches: Number.MAX_SAFE_INTEGER,
                    },
                ];
            }
        }

        const oldLines = filePatch.hunks.flatMap((hunk) => getOldHunkLines(hunk));
        const anchors = collectAnchorLines(oldLines);
        const preferredExtension = path.extname(filePatch.newPath || filePatch.oldPath || '').toLowerCase();
        const candidateFiles = await listFilesRecursively(targetRoot, (candidatePath) => {
            if (!preferredExtension) {
                return true;
            }
            return path.extname(candidatePath).toLowerCase() === preferredExtension;
        });

        if (candidateFiles.length === 0) {
            throw new Error(`В ${targetRoot} не найдено подходящих файлов для патча ${filePatch.newPath || filePatch.oldPath}`);
        }

        const contentCache = new Map();
        const scoredMatches = [];
        for (const candidatePath of candidateFiles) {
            const candidateContent = await readFileCache(contentCache, candidatePath);
            const score = countAnchorMatches(candidateContent, anchors);
            if (score > 0) {
                scoredMatches.push({
                    matchedPath: candidatePath,
                    matchReason: `anchor-score:${score}`,
                    score,
                    exactLineMatches: countExactLineMatches(candidateContent, oldLines),
                });
            }
        }

        if (scoredMatches.length === 0) {
            throw new Error(`Не удалось найти целевой файл для ${filePatch.newPath || filePatch.oldPath} по контексту patch`);
        }

        scoredMatches.sort((left, right) => right.score - left.score || right.exactLineMatches - left.exactLineMatches || left.matchedPath.localeCompare(right.matchedPath));
        const bestMatch = scoredMatches[0];
        return scoredMatches.filter((candidate) => candidate.score === bestMatch.score && candidate.exactLineMatches === bestMatch.exactLineMatches);
    }

    function normalizeForSimilarity(line) {
        return line
            .trim()
            .replace(/\d+/g, '#')
            .replace(/\b[a-zA-Z_$]\b/g, 'v')
            .replace(/\s+/g, ' ');
    }

    function createBigramMap(value) {
        const normalized = ` ${value} `;
        const map = new Map();
        for (let index = 0; index < normalized.length - 1; index += 1) {
            const bigram = normalized.slice(index, index + 2);
            map.set(bigram, (map.get(bigram) ?? 0) + 1);
        }
        return map;
    }

    function lineSimilarity(left, right) {
        const normalizedLeft = normalizeForSimilarity(left);
        const normalizedRight = normalizeForSimilarity(right);

        if (!normalizedLeft || !normalizedRight) {
            return 0;
        }

        if (normalizedLeft === normalizedRight) {
            return 1;
        }

        const leftBigrams = createBigramMap(normalizedLeft);
        const rightBigrams = createBigramMap(normalizedRight);
        let intersection = 0;

        for (const [bigram, count] of leftBigrams.entries()) {
            intersection += Math.min(count, rightBigrams.get(bigram) ?? 0);
        }

        const leftSize = [...leftBigrams.values()].reduce((sum, value) => sum + value, 0);
        const rightSize = [...rightBigrams.values()].reduce((sum, value) => sum + value, 0);
        return (2 * intersection) / (leftSize + rightSize);
    }

    function findTargetSegmentBounds(targetLines, oldLines) {
        const anchors = collectAnchorLines(oldLines);
        let bestSegment = null;

        for (const anchor of anchors) {
            const anchorLine = anchor.line.trim();
            for (let targetIndex = 0; targetIndex < targetLines.length; targetIndex += 1) {
                const anchorSimilarity = lineSimilarity(anchorLine, targetLines[targetIndex].trim());
                if (targetLines[targetIndex].trim() !== anchorLine && anchorSimilarity < 0.72) {
                    continue;
                }

                const start = Math.max(0, targetIndex - anchor.index);
                const end = Math.min(targetLines.length, start + oldLines.length);
                const segment = targetLines.slice(start, end);

                let score = 0;
                for (const candidateAnchor of anchors) {
                    const expectedIndex = candidateAnchor.index;
                    const windowStart = Math.max(0, expectedIndex - 3);
                    const windowEnd = Math.min(segment.length, expectedIndex + 4);
                    let bestWindowSimilarity = 0;

                    for (const candidateLine of segment.slice(windowStart, windowEnd)) {
                        const similarity = lineSimilarity(candidateAnchor.line.trim(), candidateLine.trim());
                        if (similarity > bestWindowSimilarity) {
                            bestWindowSimilarity = similarity;
                        }
                    }

                    if (bestWindowSimilarity >= 0.98) {
                        score += candidateAnchor.score;
                    } else if (bestWindowSimilarity >= 0.72) {
                        score += Math.floor(candidateAnchor.score * bestWindowSimilarity);
                    } else if (bestWindowSimilarity >= 0.52) {
                        score += Math.floor(candidateAnchor.score / 3);
                    }
                }

                if (!bestSegment || score > bestSegment.score) {
                    bestSegment = { start, end, score };
                }
            }
        }

        if (!bestSegment) {
            throw new Error('Не удалось определить границы изменяемого блока по контексту');
        }

        return bestSegment;
    }

    function isHunkAlreadyApplied(targetLines, newLines) {
        const anchors = collectAnchorLines(newLines);
        if (anchors.length === 0) {
            return false;
        }

        const content = targetLines.join('\n');
        const targetScore = anchors.reduce((sum, anchor) => sum + anchor.score, 0);
        return countAnchorMatches(content, anchors) >= targetScore;
    }

    function alignOldToTargetLines(oldLines, targetLines) {
        const matches = [];
        let targetCursor = 0;

        for (let oldIndex = 0; oldIndex < oldLines.length; oldIndex += 1) {
            let bestMatch = null;
            const maxSearchIndex = Math.min(targetLines.length, targetCursor + 24);

            for (let targetIndex = targetCursor; targetIndex < maxSearchIndex; targetIndex += 1) {
                const score = lineSimilarity(oldLines[oldIndex], targetLines[targetIndex]);
                if (!bestMatch || score > bestMatch.score) {
                    bestMatch = { oldIndex, targetIndex, score };
                }
                if (score === 1) {
                    break;
                }
            }

            if (bestMatch && bestMatch.score >= 0.52) {
                matches.push(bestMatch);
                targetCursor = bestMatch.targetIndex + 1;
            }
        }

        return matches;
    }

    function buildBoundaryMap(oldLength, targetLength, matches) {
        const points = [
            { oldBoundary: 0, targetBoundary: 0 },
            { oldBoundary: oldLength, targetBoundary: targetLength },
        ];

        for (const match of matches) {
            points.push({ oldBoundary: match.oldIndex, targetBoundary: match.targetIndex });
            points.push({ oldBoundary: match.oldIndex + 1, targetBoundary: match.targetIndex + 1 });
        }

        points.sort((left, right) => (left.oldBoundary - right.oldBoundary) || (left.targetBoundary - right.targetBoundary));
        const boundaries = new Array(oldLength + 1).fill(0);

        for (let boundaryIndex = 0; boundaryIndex <= oldLength; boundaryIndex += 1) {
            let previousPoint = points[0];
            let nextPoint = points[points.length - 1];

            for (const point of points) {
                if (point.oldBoundary <= boundaryIndex) {
                    previousPoint = point;
                }
                if (point.oldBoundary >= boundaryIndex) {
                    nextPoint = point;
                    break;
                }
            }

            if (previousPoint.oldBoundary === nextPoint.oldBoundary) {
                boundaries[boundaryIndex] = Math.max(previousPoint.targetBoundary, nextPoint.targetBoundary);
                continue;
            }

            const progress = (boundaryIndex - previousPoint.oldBoundary) / (nextPoint.oldBoundary - previousPoint.oldBoundary);
            boundaries[boundaryIndex] = Math.round(previousPoint.targetBoundary + (nextPoint.targetBoundary - previousPoint.targetBoundary) * progress);
        }

        return boundaries;
    }

    function diffLines(oldLines, newLines) {
        const lcs = Array.from({ length: oldLines.length + 1 }, () => new Array(newLines.length + 1).fill(0));

        for (let oldIndex = oldLines.length - 1; oldIndex >= 0; oldIndex -= 1) {
            for (let newIndex = newLines.length - 1; newIndex >= 0; newIndex -= 1) {
                if (oldLines[oldIndex] === newLines[newIndex]) {
                    lcs[oldIndex][newIndex] = lcs[oldIndex + 1][newIndex + 1] + 1;
                } else {
                    lcs[oldIndex][newIndex] = Math.max(lcs[oldIndex + 1][newIndex], lcs[oldIndex][newIndex + 1]);
                }
            }
        }

        const operations = [];
        let oldIndex = 0;
        let newIndex = 0;

        while (oldIndex < oldLines.length || newIndex < newLines.length) {
            if (oldIndex < oldLines.length && newIndex < newLines.length && oldLines[oldIndex] === newLines[newIndex]) {
                const oldStart = oldIndex;
                const newStart = newIndex;
                while (oldIndex < oldLines.length && newIndex < newLines.length && oldLines[oldIndex] === newLines[newIndex]) {
                    oldIndex += 1;
                    newIndex += 1;
                }
                operations.push({ type: 'equal', oldStart, oldEnd: oldIndex, newStart, newEnd: newIndex });
                continue;
            }

            const oldStart = oldIndex;
            const newStart = newIndex;

            while (oldIndex < oldLines.length || newIndex < newLines.length) {
                if (oldIndex < oldLines.length && newIndex < newLines.length && oldLines[oldIndex] === newLines[newIndex]) {
                    break;
                }

                if (newIndex >= newLines.length || (oldIndex < oldLines.length && lcs[oldIndex + 1][newIndex] >= lcs[oldIndex][newIndex + 1])) {
                    oldIndex += 1;
                } else {
                    newIndex += 1;
                }
            }

            const deletedCount = oldIndex - oldStart;
            const insertedCount = newIndex - newStart;
            operations.push({
                type: deletedCount > 0 && insertedCount > 0 ? 'replace' : deletedCount > 0 ? 'delete' : 'insert',
                oldStart,
                oldEnd: oldIndex,
                newStart,
                newEnd: newIndex,
            });
        }

        return operations;
    }

    function extractComparableExpressions(line) {
        return [...line.matchAll(/\b[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\.\$|\(\))\b/g)].map((match) => match[0]);
    }

    function extractImportedComparableExpressions(lines, importedAliases) {
        const expressions = new Set();

        for (const line of lines) {
            for (const expression of extractComparableExpressions(line)) {
                const [rootAlias] = expression.split('.');
                if (importedAliases.has(rootAlias)) {
                    expressions.add(expression);
                }
            }
        }

        return [...expressions];
    }

    function extractJsxExpression(line) {
        const match = line.match(/\(0,\s*[A-Za-z_$][\w$]*\.jsx\)\(([^,]+),\s*\{/);
        return match ? match[1].trim() : null;
    }

    function extractCallExpression(line) {
        const match = line.match(/\(0,\s*([A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\.\$)?)\)\(/);
        return match ? match[1].trim() : null;
    }

    function buildPatchSpecificFallbackReplacements(targetLines, newLines) {
        const replacements = new Map();

        if (!newLines.some((line) => line.includes("name: 'experimentSearch'"))) {
            return replacements;
        }

        for (let index = 0; index < targetLines.length; index += 1) {
            if (targetLines[index].includes("placeholder: 'Experiment name'")) {
                for (let lookback = 1; lookback <= 4; lookback += 1) {
                    const jsxExpression = extractJsxExpression(targetLines[index - lookback] ?? '');
                    if (jsxExpression) {
                        replacements.set('k.p', jsxExpression);
                        break;
                    }
                }
                break;
            }
        }

        for (const line of targetLines) {
            if (line.includes('name: String(a.name)') && line.includes('.jU')) {
                const callExpression = extractCallExpression(line);
                if (callExpression) {
                    replacements.set('h.jU', callExpression);
                }
                break;
            }
        }

        return replacements;
    }

    function applyPatchSpecificPostProcess(lines, targetLines, newLines) {
        const replacements = buildPatchSpecificFallbackReplacements(targetLines, newLines);
        const inputExpression = replacements.get('k.p');
        let helperExpression = replacements.get('h.jU');

        if (!helperExpression) {
            const helperMatch = targetLines.join('\n').match(/\(0,\s*([A-Za-z_$][\w$]*\.jU)\)\(\{ name: String\(a\.name\)/);
            if (helperMatch) {
                helperExpression = helperMatch[1];
            }
        }

        if (!inputExpression && !helperExpression) {
            return lines;
        }

        return lines.map((line) => {
            let normalizedLine = line;

            if (inputExpression) {
                normalizedLine = normalizedLine.replace('(0, n.jsx)(k.p, {', `(0, n.jsx)(${inputExpression}, {`);
            }

            if (helperExpression) {
                normalizedLine = normalizedLine.replace('(0, h.jU)(', `(0, ${helperExpression})(`);
            }

            return normalizedLine;
        });
    }

    function parseRequireImportLine(line) {
        const trimmed = line.trim();
        const match = trimmed.match(/^([A-Za-z_$][\w$]*)\s*=\s*r\((\d+)\)([,;]?)$/);
        if (!match) {
            return null;
        }

        return {
            alias: match[1],
            moduleId: match[2],
        };
    }

    function getImportedAliases(lines) {
        return new Set(lines.map((line) => parseRequireImportLine(line)?.alias).filter(Boolean));
    }

    function collectImportedPropertyExpressions(lines, importedAliases) {
        const expressionsByProperty = new Map();

        for (const line of lines) {
            for (const match of line.matchAll(/\b([A-Za-z_$][\w$]*)\.([A-Za-z_$][\w$]*|\$)\b/g)) {
                if (!importedAliases.has(match[1])) {
                    continue;
                }

                const propertyName = match[2];
                const expression = match[0];
                if (!expressionsByProperty.has(propertyName)) {
                    expressionsByProperty.set(propertyName, new Set());
                }
                expressionsByProperty.get(propertyName).add(expression);
            }
        }

        return expressionsByProperty;
    }

    function buildExpressionReplacementMap(oldLines, targetLines, matches, newLines = []) {
        const replacements = new Map();

        for (const match of matches) {
            const oldLine = oldLines[match.oldIndex];
            const targetLine = targetLines[match.targetIndex];
            const oldExpressions = extractComparableExpressions(oldLine);
            const targetExpressions = extractComparableExpressions(targetLine);

            if (oldExpressions.length === 0 || oldExpressions.length !== targetExpressions.length) {
                continue;
            }

            for (let index = 0; index < oldExpressions.length; index += 1) {
                if (oldExpressions[index] !== targetExpressions[index]) {
                    replacements.set(oldExpressions[index], targetExpressions[index]);
                }
            }
        }

        const oldImportedAliases = getImportedAliases(oldLines);
        const targetImportedAliases = getImportedAliases(targetLines);
        const oldExpressionsByProperty = collectImportedPropertyExpressions(oldLines, oldImportedAliases);
        const targetExpressionsByProperty = collectImportedPropertyExpressions(targetLines, targetImportedAliases);

        for (const [propertyName, oldExpressions] of oldExpressionsByProperty.entries()) {
            const targetExpressions = targetExpressionsByProperty.get(propertyName);
            if (!targetExpressions || oldExpressions.size !== 1 || targetExpressions.size !== 1) {
                continue;
            }

            const [oldExpression] = [...oldExpressions];
            const [targetExpression] = [...targetExpressions];
            if (oldExpression !== targetExpression) {
                replacements.set(oldExpression, targetExpression);
            }
        }

        const newImportedExpressions = extractImportedComparableExpressions(newLines, oldImportedAliases);
        for (const expression of newImportedExpressions) {
            if (replacements.has(expression)) {
                continue;
            }

            const sourceLine = oldLines.find((line) => line.includes(expression));
            if (!sourceLine) {
                continue;
            }

            let bestTargetLine = null;
            let bestScore = 0;
            for (const targetLine of targetLines) {
                const score = lineSimilarity(sourceLine, targetLine);
                if (score > bestScore) {
                    bestScore = score;
                    bestTargetLine = targetLine;
                }
            }

            if (!bestTargetLine || bestScore < 0.6) {
                continue;
            }

            const sourceExpressions = extractComparableExpressions(sourceLine);
            const targetExpressions = extractComparableExpressions(bestTargetLine);
            const sourceIndex = sourceExpressions.indexOf(expression);
            if (sourceIndex >= 0 && sourceExpressions.length === targetExpressions.length && targetExpressions[sourceIndex] && targetExpressions[sourceIndex] !== expression) {
                replacements.set(expression, targetExpressions[sourceIndex]);
            }
        }

        for (const [from, to] of buildPatchSpecificFallbackReplacements(targetLines, newLines).entries()) {
            replacements.set(from, to);
        }

        return [...replacements.entries()]
            .sort((left, right) => right[0].length - left[0].length)
            .map(([from, to]) => ({ from, to }));
    }

    function buildModuleExportsById(lines) {
        const exportsById = new Map();

        for (const moduleEntry of extractModuleExports(lines.join('\n'))) {
            exportsById.set(moduleEntry.moduleId, new Set(moduleEntry.exports));
        }

        return exportsById;
    }

    async function getModuleExportsById(targetRoot, moduleExportsById, moduleId) {
        if (moduleExportsById.has(moduleId)) {
            return moduleExportsById.get(moduleId);
        }

        const moduleIndex = await getModuleExportIndex(targetRoot);
        const exports = new Set();

        for (const moduleEntry of moduleIndex) {
            if (moduleEntry.moduleId !== moduleId) {
                continue;
            }

            for (const exportName of moduleEntry.exports) {
                exports.add(exportName);
            }
        }

        if (exports.size === 0) {
            return null;
        }

        moduleExportsById.set(moduleId, exports);
        return exports;
    }

    function getUsedImportedAliases(lines) {
        const aliases = new Set();

        for (const line of lines) {
            for (const match of line.matchAll(/\b([A-Za-z_$][\w$]*)\.([A-Za-z_$][\w$]*|\$)\b/g)) {
                aliases.add(match[1]);
            }
        }

        return aliases;
    }

    async function buildImportAliasReplacements(targetRoot, oldLines, targetSegment, newLines, moduleIdReplacements, targetFileLines) {
        const oldImports = oldLines.map((line) => parseRequireImportLine(line)).filter(Boolean);
        const targetImports = targetSegment.map((line) => parseRequireImportLine(line)).filter(Boolean);
        const usedAliases = getUsedImportedAliases(newLines);
        const targetModuleExportsById = buildModuleExportsById(targetFileLines);
        const replacements = [];
        const resolvedOldAliases = new Set();
        const resolvedTargetAliases = new Set();

        for (const oldImport of oldImports) {
            if (!usedAliases.has(oldImport.alias)) {
                continue;
            }

            const exportNames = getAliasExportNames(newLines, oldImport.alias);
            const preferredModuleIds = [moduleIdReplacements.get(oldImport.moduleId), oldImport.moduleId].filter(Boolean);
            const candidates = [];

            for (const targetImport of targetImports) {
                const targetExportSet = await getModuleExportsById(targetRoot, targetModuleExportsById, targetImport.moduleId);
                let score = 0;

                preferredModuleIds.forEach((moduleId, index) => {
                    if (targetImport.moduleId === moduleId) {
                        score += index === 0 ? 10_000 : 5_000;
                    }
                });

                if (targetExportSet && exportNames.length > 0) {
                    for (const exportName of exportNames) {
                        if (targetExportSet.has(exportName)) {
                            score += 100;
                        }
                    }
                }

                if (score > 0) {
                    candidates.push({
                        alias: targetImport.alias,
                        score,
                        exportMatchCount: targetExportSet ? exportNames.filter((exportName) => targetExportSet.has(exportName)).length : 0,
                    });
                }
            }

            candidates.sort((left, right) => right.score - left.score || right.exportMatchCount - left.exportMatchCount || left.alias.localeCompare(right.alias));
            const bestCandidate = candidates[0];
            const secondCandidate = candidates[1];

            if (!bestCandidate) {
                continue;
            }

            if (secondCandidate && secondCandidate.score === bestCandidate.score && secondCandidate.exportMatchCount === bestCandidate.exportMatchCount) {
                continue;
            }

            resolvedOldAliases.add(oldImport.alias);
            resolvedTargetAliases.add(bestCandidate.alias);
            if (oldImport.alias !== bestCandidate.alias) {
                replacements.push({
                    fromAlias: oldImport.alias,
                    toAlias: bestCandidate.alias,
                });
            }
        }

        const unresolvedOldImports = oldImports.filter((entry) => usedAliases.has(entry.alias) && !resolvedOldAliases.has(entry.alias));
        const unresolvedTargetImports = targetImports.filter((entry) => !resolvedTargetAliases.has(entry.alias));
        const fallbackCount = Math.min(unresolvedOldImports.length, unresolvedTargetImports.length);

        for (let index = 0; index < fallbackCount; index += 1) {
            const oldImport = unresolvedOldImports[unresolvedOldImports.length - fallbackCount + index];
            const targetImport = unresolvedTargetImports[unresolvedTargetImports.length - fallbackCount + index];
            if (oldImport.alias === targetImport.alias) {
                continue;
            }

            replacements.push({
                fromAlias: oldImport.alias,
                toAlias: targetImport.alias,
            });
        }

        return replacements;
    }

    function getAddedImports(oldLines, newLines) {
        const oldAliases = new Set(oldLines.map((line) => parseRequireImportLine(line)?.alias).filter(Boolean));
        return newLines
            .map((line) => parseRequireImportLine(line))
            .filter((entry) => entry && !oldAliases.has(entry.alias));
    }

    function getAliasExportNames(lines, alias) {
        const exportNames = new Set();
        const regex = new RegExp(`\\b${alias}\\.([A-Za-z_$][\\w$]*)\\b`, 'g');

        for (const line of lines) {
            for (const match of line.matchAll(regex)) {
                exportNames.add(match[1]);
            }
        }

        return [...exportNames];
    }

    function extractModuleExports(content) {
        const lines = content.replace(/\r/g, '').split('\n');
        const modules = [];

        for (let index = 0; index < lines.length; index += 1) {
            const moduleMatch = lines[index].match(/^\s*(\d+):\s*\([^)]*\)\s*=>\s*\{$/);
            if (!moduleMatch) {
                continue;
            }

            const moduleId = moduleMatch[1];
            const exports = new Set();

            for (let innerIndex = index + 1; innerIndex < Math.min(lines.length, index + 120); innerIndex += 1) {
                if (!/\b\w+\.d\(t,\s*\{/.test(lines[innerIndex])) {
                    continue;
                }

                for (let exportIndex = innerIndex + 1; exportIndex < Math.min(lines.length, innerIndex + 200); exportIndex += 1) {
                    const exportLine = lines[exportIndex];
                    if (exportLine.includes('});')) {
                        break;
                    }

                    const exportMatch = exportLine.match(/^\s*([A-Za-z_$][\w$]*):\s*\(\)\s*=>/);
                    if (exportMatch) {
                        exports.add(exportMatch[1]);
                    }
                }

                break;
            }

            if (exports.size > 0) {
                modules.push({ moduleId, exports: [...exports] });
            }
        }

        return modules;
    }

    async function getModuleExportIndex(targetRoot) {
        if (moduleExportIndexCache.has(targetRoot)) {
            return moduleExportIndexCache.get(targetRoot);
        }

        const jsFiles = await listFilesRecursively(targetRoot, (candidatePath) => path.extname(candidatePath).toLowerCase() === '.js');
        const index = [];
        for (const filePath of jsFiles) {
            const content = await fsp.readFile(filePath, 'utf8');
            index.push(...extractModuleExports(content).map((entry) => ({ ...entry, filePath })));
        }

        moduleExportIndexCache.set(targetRoot, index);
        return index;
    }

    async function resolveTargetModuleId(targetRoot, exportNames) {
        if (!exportNames.length) {
            return null;
        }

        const moduleIndex = await getModuleExportIndex(targetRoot);
        let bestMatch = null;

        for (const moduleEntry of moduleIndex) {
            const exportSet = new Set(moduleEntry.exports);
            let score = 0;
            for (const exportName of exportNames) {
                if (exportSet.has(exportName)) {
                    score += 1;
                }
            }

            if (score === 0) {
                continue;
            }

            if (!bestMatch || score > bestMatch.score) {
                bestMatch = { score, moduleId: moduleEntry.moduleId, filePath: moduleEntry.filePath, exports: moduleEntry.exports };
            }
        }

        return bestMatch;
    }

    async function buildModuleIdReplacementMap(targetRoot, oldLines, newLines) {
        const replacements = new Map();
        const addedImports = getAddedImports(oldLines, newLines);

        for (const addedImport of addedImports) {
            const exportNames = getAliasExportNames(newLines, addedImport.alias);
            const targetModule = await resolveTargetModuleId(targetRoot, exportNames);

            if (!targetModule) {
                continue;
            }

            replacements.set(addedImport.moduleId, targetModule.moduleId);
        }

        return replacements;
    }

    function replaceAllExact(value, from, to) {
        return value.split(from).join(to);
    }

    function translateAliasMemberAccess(line, aliasReplacements) {
        let translatedLine = line;

        aliasReplacements.forEach((replacement, index) => {
            translatedLine = translatedLine.replace(
                new RegExp(`\\b${replacement.fromAlias}\\.([A-Za-z_$][\\w$]*|\\$)`, 'g'),
                `__PULSESYNC_ALIAS_${index}__.$1`,
            );
        });

        aliasReplacements.forEach((replacement, index) => {
            translatedLine = translatedLine.replace(new RegExp(`__PULSESYNC_ALIAS_${index}__\\.`, 'g'), `${replacement.toAlias}.`);
        });

        return translatedLine;
    }

    function translateLines(lines, expressionReplacements, aliasReplacements, moduleIdReplacements) {
        return lines.map((line) => {
            let translatedLine = line;

            for (const [sourceId, targetId] of moduleIdReplacements.entries()) {
                translatedLine = translatedLine.replace(new RegExp(`\\br\\(${sourceId}\\)`, 'g'), `r(${targetId})`);
            }

            translatedLine = translateAliasMemberAccess(translatedLine, aliasReplacements);

            for (const replacement of expressionReplacements) {
                translatedLine = replaceAllExact(translatedLine, replacement.from, replacement.to);
            }

            return translatedLine;
        });
    }

    async function applyAdaptivePatchFile(targetRoot, patchFilePath, options = {}) {
        const dryRun = options.dryRun ?? false;
        const resolvedPatchPath = await resolveReferencePath(patchFilePath);
        const patchText = await fsp.readFile(resolvedPatchPath, 'utf8');
        const filePatches = parseUnifiedDiff(patchText);
        const summary = [];

        for (const filePatch of filePatches) {
            const matchedFiles = await resolveTargetFileMatches(targetRoot, filePatch);
            for (const match of matchedFiles) {
                const { matchedPath, matchReason } = match;
                let targetLines = (await fsp.readFile(matchedPath, 'utf8')).replace(/\r/g, '').split('\n');
                const originalTargetLines = [...targetLines];

                console.log(`Adaptive patch: ${filePatch.oldPath || filePatch.newPath} -> ${matchedPath} (${matchReason})`);

                for (const hunk of filePatch.hunks) {
                    const oldLines = getOldHunkLines(hunk);
                    const newLines = getNewHunkLines(hunk);

                    if (isHunkAlreadyApplied(targetLines, newLines)) {
                        continue;
                    }

                    const segmentBounds = findTargetSegmentBounds(targetLines, oldLines);
                    const targetSegment = targetLines.slice(segmentBounds.start, segmentBounds.end);
                    const matches = alignOldToTargetLines(oldLines, targetSegment);
                    const boundaries = buildBoundaryMap(oldLines.length, targetSegment.length, matches);
                    const diffOperations = diffLines(oldLines, newLines);
                    const moduleIdReplacements = await buildModuleIdReplacementMap(targetRoot, oldLines, newLines);
                    const expressionReplacements = buildExpressionReplacementMap(oldLines, targetSegment, matches, newLines);
                    const aliasReplacements = await buildImportAliasReplacements(targetRoot, oldLines, targetSegment, newLines, moduleIdReplacements, targetLines);
                    const rebuiltSegment = [];
                    let segmentCursor = 0;

                    for (const operation of diffOperations) {
                        const targetStart = Math.max(segmentCursor, boundaries[operation.oldStart] ?? segmentCursor);
                        const targetEnd = Math.max(targetStart, boundaries[operation.oldEnd] ?? targetStart);

                        if (targetStart > segmentCursor) {
                            rebuiltSegment.push(...targetSegment.slice(segmentCursor, targetStart));
                        }

                        if (operation.type === 'equal') {
                            rebuiltSegment.push(...targetSegment.slice(targetStart, targetEnd));
                        } else if (operation.type === 'insert' || operation.type === 'replace') {
                            rebuiltSegment.push(
                                ...translateLines(newLines.slice(operation.newStart, operation.newEnd), expressionReplacements, aliasReplacements, moduleIdReplacements),
                            );
                        }

                        segmentCursor = targetEnd;
                    }

                    if (segmentCursor < targetSegment.length) {
                        rebuiltSegment.push(...targetSegment.slice(segmentCursor));
                    }

                    const normalizedSegment = applyPatchSpecificPostProcess(rebuiltSegment, originalTargetLines, newLines);

                    targetLines = [...targetLines.slice(0, segmentBounds.start), ...normalizedSegment, ...targetLines.slice(segmentBounds.end)];
                }

                if (!dryRun) {
                    await fsp.writeFile(matchedPath, targetLines.join('\n'), 'utf8');
                }

                summary.push({
                    sourcePath: filePatch.newPath || filePatch.oldPath,
                    targetPath: matchedPath,
                    dryRun,
                });
            }
        }

        return summary;
    }

    return {
        applyAdaptivePatchFile,
    };
}

function createPatchUtils(runtime) {
    const { fsp, path } = runtime.deps;
    const { REPO_ROOT, EXTRACTED_DIR_PATH } = runtime.constants;
    const DEFAULT_PATCHES_DIR = path.join(REPO_ROOT, 'patches');

    async function pathExists(targetPath) {
        try {
            await fsp.access(targetPath);
            return true;
        } catch {
            return false;
        }
    }

    async function listFilesRecursively(dir, predicate = () => true) {
        const entries = await fsp.readdir(dir, { withFileTypes: true });
        const files = [];

        for (const entry of entries) {
            const fullPath = path.join(dir, entry.name);
            if (entry.isDirectory()) {
                files.push(...(await listFilesRecursively(fullPath, predicate)));
            } else if (entry.isFile() && predicate(fullPath, entry)) {
                files.push(fullPath);
            }
        }

        return files;
    }

    async function replaceInFilesRecursively(dir, rules) {
        const entries = await fsp.readdir(dir, { withFileTypes: true });
        for (const entry of entries) {
            const fullPath = path.join(dir, entry.name);
            if (entry.isDirectory()) {
                await replaceInFilesRecursively(fullPath, rules);
            } else if (entry.isFile()) {
                const content = await fsp.readFile(fullPath, 'utf8');
                let newContent = content;
                for (const { regex, replacement } of rules) {
                    newContent = newContent.replace(regex, replacement);
                }
                if (newContent !== content) {
                    await fsp.writeFile(fullPath, newContent, 'utf8');
                    console.log(`Вхождение найдено и заменено в: ${fullPath}`);
                }
            }
        }
    }

    async function patchExtractedBuild(extractedPath, options = { unlockDevtools: true, unlockDevPanel: true }) {
        console.log('Патчинг извлечённого релиза', extractedPath);

        if (options.unlockDevtools) {
            let indexJs = await fsp.readFile(path.join(extractedPath, '/index.js'), 'utf8');
            indexJs = indexJs.replace(/const\s?webPreferences\s?=\s?\{/i, 'const webPreferences = { devTools: true,');
            await fsp.writeFile(path.join(extractedPath, '/index.js'), indexJs, 'utf8');
        }

        if (options.unlockDevPanel) {
            const rules = [
                { regex: /e\.set\(c.qV, ?![10]\), ?e\.set\(c.yc, ?![10]\), ?e\.set\(c.W4, ?![10]\)/g, replacement: 'e.set(c.qV,!0),e.set(c.yc,!0),e.set(c.W4,!0)' },
            ];

            console.log('Применяю regex патчи', extractedPath, rules);
            await replaceInFilesRecursively(path.join(extractedPath, '/app/'), rules);
            console.log('Regex патчи применены', extractedPath);
        }
    }

    async function resolveReferencePath(rawReferencePath) {
        if (!rawReferencePath) {
            return null;
        }

        if (path.isAbsolute(rawReferencePath) && (await pathExists(rawReferencePath))) {
            return rawReferencePath;
        }

        const rebasedPath = path.resolve(REPO_ROOT, rawReferencePath);
        if (await pathExists(rebasedPath)) {
            return rebasedPath;
        }

        return path.isAbsolute(rawReferencePath) ? rawReferencePath : rebasedPath;
    }

    async function resolveExtractedVersionPath(version) {
        if (!version) {
            throw new Error('Не указана версия extracted-билда');
        }

        const explicitPath = await resolveReferencePath(version);
        if (explicitPath && (await pathExists(explicitPath))) {
            return explicitPath;
        }

        const entries = await fsp.readdir(EXTRACTED_DIR_PATH, { withFileTypes: true });
        const dirNames = entries.filter((entry) => entry.isDirectory()).map((entry) => entry.name);
        const preferredSuffixes = ['@pretty', '', '@modded', '@pure'];
        for (const suffix of preferredSuffixes) {
            const candidateName = `${version}${suffix}`;
            if (dirNames.includes(candidateName)) {
                return path.join(EXTRACTED_DIR_PATH, candidateName);
            }
        }

        const looseMatches = dirNames.filter((dirName) => dirName === version || dirName.startsWith(`${version}@`));
        if (looseMatches.length === 1) {
            return path.join(EXTRACTED_DIR_PATH, looseMatches[0]);
        }

        if (looseMatches.length > 1) {
            throw new Error(`Найдено несколько extracted-директорий для версии ${version}: ${looseMatches.join(', ')}`);
        }

        throw new Error(`Не удалось найти extracted-директорию для версии ${version}`);
    }

    async function resolvePatchInput({ patchFile, patchDir } = {}) {
        if (patchFile) {
            return [await resolveReferencePath(patchFile)];
        }

        const resolvedDir = patchDir ? await resolveReferencePath(patchDir) : DEFAULT_PATCHES_DIR;
        if (!(await pathExists(resolvedDir))) {
            throw new Error(`Папка с патчами не найдена: ${resolvedDir}`);
        }

        const entries = await fsp.readdir(resolvedDir, { withFileTypes: true });
        const patchFiles = entries
            .filter((entry) => entry.isFile() && /\.(patch|diff)$/i.test(entry.name))
            .map((entry) => path.join(resolvedDir, entry.name))
            .sort((left, right) => path.basename(left).localeCompare(path.basename(right)));

        if (patchFiles.length === 0) {
            throw new Error(`В папке ${resolvedDir} не найдено *.patch или *.diff файлов`);
        }

        return patchFiles;
    }

    const { applyAdaptivePatchFile } = createAdaptivePatchHelpers({
        fsp,
        path,
        listFilesRecursively,
        pathExists,
        resolveReferencePath,
    });

    return {
        replaceInFilesRecursively,
        patchExtractedBuild,
        applyAdaptivePatchFile,
        resolveExtractedVersionPath,
        resolvePatchInput,
    };
}

module.exports = {
    createPatchUtils,
};
