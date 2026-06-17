const fs = require('fs');
const path = require('path');
const minimist = require('minimist');
const dotenv = require('dotenv');
const semver = require('semver');
const axios = require('axios');
const FormData = require('form-data');
dotenv.config();

const webhookUrl = process.env.DISCORD_DATAMINER_WEBHOOK_URL ?? process.env.DISCORD_WEBHOOK_URL;
const OUTPUT = path.join(__dirname, 'output');
const DISCORD_EMBED_DESCRIPTION_LIMIT = 2000;
const DISCORD_MAX_FILES_PER_MESSAGE = 10;
const MOBX_DIFF_CONTEXT_LINES = 3;

if (!process.env.DISCORD_DATAMINER_WEBHOOK_URL) console.warn('DISCORD_DATAMINER_WEBHOOK_URL не установлена, используется DISCORD_WEBHOOK_URL');
if (!webhookUrl) throw new Error('DISCORD_DATAMINER_WEBHOOK_URL и DISCORD_WEBHOOK_URL не установлена в .env файле');

function calculateArrayDiff(oldList, newList) {
    const oldSet = new Set(oldList);
    const newSet = new Set(newList);

    const added = newList.filter((item) => !oldSet.has(item));
    const removed = oldList.filter((item) => !newSet.has(item));

    return { added, removed };
}

function calculateObjectDiff(oldObj, newObj) {
    const added = [];
    const removed = [];
    const changed = [];

    for (const key in newObj) {
        const newVal = typeof newObj[key] === 'object' && newObj[key] !== null ? JSON.stringify(newObj[key], null, 2) : newObj[key];
        const oldVal = typeof oldObj[key] === 'object' && oldObj[key] !== null ? JSON.stringify(oldObj[key], null, 2) : oldObj[key];

        if (!(key in oldObj)) {
            added.push({ key, value: newVal });
        } else if (oldVal !== newVal) {
            changed.push({ key, oldValue: oldVal, newValue: newVal });
        }
    }

    for (const key in oldObj) {
        if (!(key in newObj)) {
            const oldVal = typeof oldObj[key] === 'object' && oldObj[key] !== null ? JSON.stringify(oldObj[key], null, 2) : oldObj[key];
            removed.push({ key, value: oldVal });
        }
    }

    return { added, changed, removed };
}

function isSingleLetterName(value) {
    if (typeof value !== 'string') return false;

    const baseName = value.replace(/\s+\(\d+\)$/, '');
    return /^[A-Za-zА-Яа-яЁё_$]$/.test(baseName);
}

function filterDiffItems(diff, predicate) {
    return {
        added: diff.added.filter(predicate),
        changed: (diff.changed ?? []).filter(predicate),
        removed: diff.removed.filter(predicate),
    };
}

function wrapDiffMarkdown(diff) {
    return `\`\`\`diff\n${diff}\n\`\`\`\n`;
}

function formatDiffSection(title, diff) {
    return `## ${title}\n${wrapDiffMarkdown(diff)}`;
}

function formatDiff(diff) {
    let message = '';

    if (diff.added.length > 0) {
        message += formatDiffSection(
            'Добавлено',
            diff.added.map((item) => `+ ${item.key ?? item}${item.value ? `: ${item.value.replace(/(?<!\\)\n/g, '\n+ ')}` : ''}`).join('\n'),
        );
    }
    if (diff.changed && diff.changed.length > 0) {
        message += formatDiffSection(
            'Изменено',
            diff.changed.map((item) => `- ${item.key}: ${item.oldValue.replace(/(?<!\\)\n/g, '\n- ')}\n+ ${item.key}: ${item.newValue.replace(/(?<!\\)\n/g, '\n+ ')}`).join('\n\n'),
        );
    }
    if (diff.removed.length > 0) {
        message += formatDiffSection(
            'Удалено',
            diff.removed.map((item) => `- ${item.key ?? item}${item.value ? `: ${item.value.replace(/(?<!\\)\n/g, '\n- ')}` : ''}`).join('\n'),
        );
    }
    return message || undefined;
}

function formatIconDiff(diff) {
    let message = '';

    if (diff.added.length > 0) {
        message += formatDiffSection(
            'Добавлено',
            diff.added
                .map((item) => {
                    const sizes = parseIconSizes(item.value);
                    return `+ ${item.key}${sizes.length ? `: ${sizes.join(', ')}` : ''}`;
                })
                .join('\n'),
        );
    }
    if (diff.changed && diff.changed.length > 0) {
        message += formatDiffSection('Изменено', diff.changed.map((item) => `! ${item.key}`).join('\n'));
    }
    if (diff.removed.length > 0) {
        message += formatDiffSection('Удалено', diff.removed.map((item) => `- ${item.key}`).join('\n'));
    }

    return message || undefined;
}

function getLcsLineDiff(oldLines, newLines) {
    const table = Array.from({ length: oldLines.length + 1 }, () => Array(newLines.length + 1).fill(0));

    for (let i = oldLines.length - 1; i >= 0; i--) {
        for (let j = newLines.length - 1; j >= 0; j--) {
            table[i][j] = oldLines[i] === newLines[j] ? table[i + 1][j + 1] + 1 : Math.max(table[i + 1][j], table[i][j + 1]);
        }
    }

    const result = [];
    let i = 0;
    let j = 0;

    while (i < oldLines.length && j < newLines.length) {
        if (oldLines[i] === newLines[j]) {
            result.push({ type: 'context', line: oldLines[i] });
            i++;
            j++;
        } else if (table[i + 1][j] >= table[i][j + 1]) {
            result.push({ type: 'removed', line: oldLines[i] });
            i++;
        } else {
            result.push({ type: 'added', line: newLines[j] });
            j++;
        }
    }

    while (i < oldLines.length) {
        result.push({ type: 'removed', line: oldLines[i] });
        i++;
    }

    while (j < newLines.length) {
        result.push({ type: 'added', line: newLines[j] });
        j++;
    }

    return result;
}

function formatOneSidedObjectDiff(item) {
    const oldLines = `${item.key}: ${item.oldValue}`.split('\n');
    const newLines = `${item.key}: ${item.newValue}`.split('\n');

    return getLcsLineDiff(oldLines, newLines)
        .map((line) => {
            if (line.type === 'added') return `+ ${line.line}`;
            if (line.type === 'removed') return `- ${line.line}`;
            return `  ${line.line}`;
        })
        .join('\n');
}

function parseJsonValue(value) {
    try {
        return JSON.parse(value);
    } catch (e) {
        return null;
    }
}

function hasDiffMarker(line) {
    return line.startsWith('+') || line.startsWith('-');
}

function collapseDiffContext(lines, radius = MOBX_DIFF_CONTEXT_LINES) {
    const changedIndexes = [];

    lines.forEach((line, index) => {
        if (hasDiffMarker(line)) changedIndexes.push(index);
    });

    if (!changedIndexes.length) return lines;

    const keep = new Set();

    for (const index of changedIndexes) {
        for (let i = Math.max(0, index - radius); i <= Math.min(lines.length - 1, index + radius); i++) {
            keep.add(i);
        }
    }

    const result = [];
    let hasEllipsis = false;

    for (let i = 0; i < lines.length; i++) {
        if (!keep.has(i)) {
            if (!hasEllipsis) {
                result.push('      ...');
                hasEllipsis = true;
            }
            continue;
        }

        result.push(lines[i]);
        hasEllipsis = false;
    }

    return result;
}

function formatJsonArrayDiff(oldItems, newItems) {
    const oldLines = oldItems.map((item) => JSON.stringify(item));
    const newLines = newItems.map((item) => JSON.stringify(item));
    const diffLines = getLcsLineDiff(oldLines, newLines).map((line) => {
        const prefix = line.type === 'added' ? '+' : line.type === 'removed' ? '-' : ' ';
        return `${prefix}     ${line.line},`;
    });

    return collapseDiffContext(diffLines);
}

function formatCompactTextDiff(oldText, newText) {
    const oldLines = String(oldText).split('\n');
    const newLines = String(newText).split('\n');
    const diffLines = getLcsLineDiff(oldLines, newLines).map((line) => {
        if (line.type === 'added') return `+     ${line.line}`;
        if (line.type === 'removed') return `-     ${line.line}`;
        return `      ${line.line}`;
    });

    return collapseDiffContext(diffLines, 2);
}

function formatMobxChangedSection(key, oldValue, newValue, isLast) {
    const suffix = isLast ? '' : ',';

    if (Array.isArray(oldValue) && Array.isArray(newValue)) {
        return [`  "${key}": [`, ...formatJsonArrayDiff(oldValue, newValue), `  ]${suffix}`].join('\n');
    }

    return [
        `  "${key}":`,
        ...formatCompactTextDiff(JSON.stringify(oldValue, null, 2), JSON.stringify(newValue, null, 2)),
        suffix ? `  ${suffix}` : '',
    ]
        .filter(Boolean)
        .join('\n');
}

function formatMobxConstructDiff(item) {
    const oldValue = parseJsonValue(item.oldValue);
    const newValue = parseJsonValue(item.newValue);

    if (!oldValue || !newValue || typeof oldValue !== 'object' || typeof newValue !== 'object') {
        return formatOneSidedObjectDiff(item);
    }

    const changedKeys = [...new Set([...Object.keys(oldValue), ...Object.keys(newValue)])].filter(
        (key) => JSON.stringify(oldValue[key]) !== JSON.stringify(newValue[key]),
    );

    if (!changedKeys.length) return `  ${item.key}: без структурных изменений`;

    const sections = changedKeys.map((key, index) => formatMobxChangedSection(key, oldValue[key], newValue[key], index === changedKeys.length - 1));

    return [`  ${item.key}: {`, ...sections, '  }'].join('\n');
}

function formatMobxDiff(diff) {
    let message = '';

    if (diff.added.length > 0) {
        message += formatDiffSection('Добавлено', diff.added.map((item) => `+ ${item.key}`).join('\n'));
    }
    if (diff.changed && diff.changed.length > 0) {
        message += formatDiffSection('Изменено', diff.changed.map(formatMobxConstructDiff).join('\n\n'));
    }
    if (diff.removed.length > 0) {
        message += formatDiffSection('Удалено', diff.removed.map((item) => `- ${item.key}`).join('\n'));
    }

    return message || undefined;
}

function splitLongLine(line, maxLength) {
    const chunks = [];

    for (let i = 0; i < line.length; i += maxLength) {
        chunks.push(line.slice(i, i + maxLength));
    }

    return chunks;
}

function splitDiffTextByLines(text, maxLength) {
    const chunks = [];
    let current = '';

    for (const line of text.split('\n')) {
        const lines = line.length > maxLength ? splitLongLine(line, maxLength) : [line];

        for (const part of lines) {
            const candidate = current ? `${current}\n${part}` : part;

            if (candidate.length > maxLength && current) {
                chunks.push(current);
                current = part;
            } else {
                current = candidate;
            }
        }
    }

    if (current) chunks.push(current);

    return chunks;
}

function splitDiffTextByUnits(text, maxLength) {
    const units = text.split(/\n{2,}/).filter(Boolean);

    if (units.length <= 1) return splitDiffTextByLines(text, maxLength);

    const chunks = [];
    let current = '';

    for (const unit of units) {
        if (unit.length > maxLength) {
            if (current) {
                chunks.push(current);
                current = '';
            }
            chunks.push(...splitDiffTextByLines(unit, maxLength));
            continue;
        }

        const candidate = current ? `${current}\n\n${unit}` : unit;

        if (candidate.length > maxLength && current) {
            chunks.push(current);
            current = unit;
        } else {
            current = candidate;
        }
    }

    if (current) chunks.push(current);

    return chunks;
}

function splitDiffSection(title, diffText, maxLength = DISCORD_EMBED_DESCRIPTION_LIMIT) {
    const maxDiffLength = Math.max(1, maxLength - formatDiffSection(`${title} (999/999)`, '').length);

    if (formatDiffSection(title, diffText).length <= maxLength) return [formatDiffSection(title, diffText)];

    const diffChunks = splitDiffTextByUnits(diffText, maxDiffLength);

    return diffChunks.map((chunk, index) => formatDiffSection(diffChunks.length > 1 ? `${title} (${index + 1}/${diffChunks.length})` : title, chunk));
}

function splitFormattedDiffMessage(message, maxLength = DISCORD_EMBED_DESCRIPTION_LIMIT) {
    if (!message || message.length <= maxLength) return message ? [message] : [];

    const sectionRegex = /## ([^\n]+)\n```diff\n([\s\S]*?)\n```\n?/g;
    const sections = [];
    let match;

    while ((match = sectionRegex.exec(message))) {
        sections.push({ title: match[1], diffText: match[2] });
    }

    if (!sections.length) return splitDiffTextByLines(message, maxLength);

    return sections.flatMap((section) => splitDiffSection(section.title, section.diffText, maxLength));
}

async function sendDiscordDiffMessages(title, description, color = 0x378584) {
    const chunks = splitFormattedDiffMessage(description);

    for (let i = 0; i < chunks.length; i++) {
        const suffix = chunks.length > 1 ? ` (${i + 1}/${chunks.length})` : '';
        await sendDiscordMessage(getDiffTemplate(`${title}${suffix}`, chunks[i], color));
    }
}

async function sendDiscordMessage(message, withComponents = true, files = []) {
    if (files.length) {
        const formData = new FormData();
        formData.append('payload_json', JSON.stringify(message));

        files.forEach((file, index) => {
            formData.append(`files[${index}]`, fs.createReadStream(file.path), {
                filename: file.name,
                contentType: file.contentType ?? 'image/svg+xml',
            });
        });

        await axios.post(`${webhookUrl}?with_components=${!!withComponents}`, formData, {
            headers: formData.getHeaders(),
            maxBodyLength: Infinity,
        });

        console.log('Diff отправлен в Discord');
        return;
    }

    const webhookResponse = await fetch(`${webhookUrl}?with_components=${!!withComponents}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            ...message,
        }),
    });

    if (!webhookResponse.ok) {
        throw new Error(`Не удалось отправить webhook: ${webhookResponse.statusText}`);
    }
    console.log('Diff отправлен в Discord');
}

function readJson(filePath) {
    return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
}

function readJsonOrDefault(filePath, defaultValue) {
    try {
        return readJson(filePath);
    } catch (e) {
        console.warn(`⚠️  Не удалось прочитать ${filePath}: ${e.message}`);
        return defaultValue;
    }
}

function getExperimentsDiff(oldFolder, newFolder) {
    const oldData = readJson(path.join(oldFolder, 'experiments.json'));
    const newData = readJson(path.join(newFolder, 'experiments.json'));

    return calculateArrayDiff(oldData, newData);
}

function getRoutesDiff(oldFolder, newFolder) {
    const oldData = readJson(path.join(oldFolder, 'simpleRoutes.json'));
    const newData = readJson(path.join(newFolder, 'simpleRoutes.json'));

    return calculateObjectDiff(oldData, newData);
}

function getPagesDiff(oldFolder, newFolder) {
    const oldData = readJsonOrDefault(path.join(oldFolder, 'simplePages.json'), {});
    const newData = readJsonOrDefault(path.join(newFolder, 'simplePages.json'), {});

    return calculateObjectDiff(oldData, newData);
}

function getRuLocalizationDiff(oldFolder, newFolder) {
    try {
        const oldData = readJson(path.join(oldFolder, 'formatted_ru.json'));
        const newData = readJson(path.join(newFolder, 'formatted_ru.json'));

        return calculateObjectDiff(oldData, newData);
    } catch (e) {
        return { added: [], changed: [], removed: [] };
    }
}

function getIconsDiff(oldFolder, newFolder) {
    const oldData = readJsonOrDefault(path.join(oldFolder, 'icons.json'), {});
    const newData = readJsonOrDefault(path.join(newFolder, 'icons.json'), {});

    return calculateObjectDiff(oldData, newData);
}

function getMobxConstructsDiff(oldFolder, newFolder) {
    const oldData = readJsonOrDefault(path.join(oldFolder, 'mobxConstructs.json'), {});
    const newData = readJsonOrDefault(path.join(newFolder, 'mobxConstructs.json'), {});

    return filterDiffItems(calculateObjectDiff(oldData, newData), (item) => !isSingleLetterName(item.key));
}

function getDiffTemplate(title, description, color = 0x378584) {
    return {
        flags: 32768,
        components: [
            {
                type: 17, // ComponentType.CONTAINER
                accent_color: color,
                components: [
                    {
                        type: 10, // ComponentType.TEXT_DISPLAY
                        content: `## ${title}`,
                    },
                    {
                        type: 14, // ComponentType.SEPARATOR
                        divider: true,
                        spacing: 2,
                    },
                    {
                        type: 10, // ComponentType.TEXT_DISPLAY
                        content: description,
                    },
                ],
            },
        ],
    };
}

function getIconImagesTemplate(title, files, color = 0x378584) {
    return {
        flags: 32768,
        components: [
            {
                type: 17, // ComponentType.CONTAINER
                accent_color: color,
                components: [
                    {
                        type: 10, // ComponentType.TEXT_DISPLAY
                        content: `## ${title}`,
                    },
                    {
                        type: 14, // ComponentType.SEPARATOR
                        divider: true,
                        spacing: 2,
                    },
                    {
                        type: 12, // ComponentType.MEDIA_GALLERY
                        items: files.map((file) => ({
                            media: {
                                url: `attachment://${file.name}`,
                            },
                            description: file.description,
                        })),
                    },
                ],
            },
        ],
    };
}

function parseIconSizes(value) {
    try {
        const parsed = JSON.parse(value);
        return Array.isArray(parsed) ? parsed : [];
    } catch (e) {
        return [];
    }
}

function getIconSvgFileName(iconName, size) {
    return `${size === 'default' ? iconName : `${iconName}_${size}`}.svg`;
}

function getAddedIconFiles(iconsDiff, newFolder) {
    const iconsFolder = path.join(newFolder, 'icons');
    const files = [];

    for (const item of iconsDiff.added) {
        const sizes = parseIconSizes(item.value);

        for (const size of sizes) {
            const fileName = getIconSvgFileName(item.key, size);
            const filePath = path.join(iconsFolder, fileName);

            if (!fs.existsSync(filePath)) {
                console.warn(`⚠️  SVG для новой иконки не найден: ${filePath}`);
                continue;
            }

            files.push({
                name: fileName,
                path: filePath,
                description: size === 'default' ? item.key : `${item.key} (${size})`,
            });
        }
    }

    return files;
}

function chunkArray(items, chunkSize) {
    const chunks = [];

    for (let i = 0; i < items.length; i += chunkSize) {
        chunks.push(items.slice(i, i + chunkSize));
    }

    return chunks;
}

async function sendAddedIconImages(iconsDiff, newFolder, versionsString) {
    const iconFiles = getAddedIconFiles(iconsDiff, newFolder);
    if (!iconFiles.length) return;

    const chunks = chunkArray(iconFiles, DISCORD_MAX_FILES_PER_MESSAGE);

    for (let i = 0; i < chunks.length; i++) {
        const chunk = chunks[i];
        const pageSuffix = chunks.length > 1 ? ` (${i + 1}/${chunks.length})` : '';
        await sendDiscordMessage(getIconImagesTemplate(`Новые иконки ${versionsString}${pageSuffix}`, chunk), true, chunk);
    }
}

function getSortedVersionList() {
    const versions = fs.readdirSync(OUTPUT).filter((f) => fs.statSync(path.join(OUTPUT, f)).isDirectory() && f !== 'src');
    return versions
        .map((value) => value.replaceAll('_', '.'))
        .sort((a, b) => semver.rcompare(a, b))
        .map((value) => value.replaceAll('.', '_'));
}

async function run(command, options) {
    if (command) console.time(`${command} исполнен за`);

    const shouldSend = options.send ?? options.s ?? false;
    const shouldShowRaw = options.raw ?? options.r ?? false;
    let oldVersion = (options.old ?? options._[1])?.replaceAll('.', '_');
    let newVersion = (options.new ?? options._[2])?.replaceAll('.', '_');

    if (!oldVersion || !newVersion) {
        const sortedVersions = getSortedVersionList();
        if (sortedVersions.length < 2) throw new Error('Недостаточно версий для сравнения. Необходимо минимум 2 папки с версиями в папке output.');
        oldVersion = sortedVersions[1];
        newVersion = sortedVersions[0];
    }

    function getVersionsString() {
        return `${oldVersion.replaceAll('_', '.')} → ${newVersion.replaceAll('_', '.')}`;
    }

    const oldFolder = path.join(OUTPUT, oldVersion);
    const newFolder = path.join(OUTPUT, newVersion);

    if (!fs.existsSync(oldFolder)) throw new Error(`Папка с данными для старой версии не найдена: ${oldFolder}`);
    if (!fs.existsSync(newFolder)) throw new Error(`Папка с данными для новой версии не найдена: ${newFolder}`);

    switch (command) {
        case 'diff':
            console.log(`Вычисление diff между версиями ${oldVersion.replaceAll('_', '.')} и ${newVersion.replaceAll('_', '.')}...`);
            console.log(`oldFolder ${oldFolder}\nnewFolder ${newFolder}...`);

            const routesDiff = getRoutesDiff(oldFolder, newFolder);
            const pagesDiff = getPagesDiff(oldFolder, newFolder);
            const experimentsDiff = getExperimentsDiff(oldFolder, newFolder);
            const ruLocalizationDiff = getRuLocalizationDiff(oldFolder, newFolder);
            const iconsDiff = getIconsDiff(oldFolder, newFolder);
            const mobxConstructsDiff = getMobxConstructsDiff(oldFolder, newFolder);

            if (shouldShowRaw) {
                console.log('Routes Diff:', JSON.stringify(routesDiff, null, 2));
                console.log('Pages Diff:', JSON.stringify(pagesDiff, null, 2));
                console.log('Experiments Diff:', JSON.stringify(experimentsDiff, null, 2));
                console.log('Ru Localization Diff:', JSON.stringify(ruLocalizationDiff, null, 2));
                console.log('Icons Diff:', JSON.stringify(iconsDiff, null, 2));
                console.log('MobX Constructs Diff:', JSON.stringify(mobxConstructsDiff, null, 2));
                break;
            }

            const routesDiffMessage = formatDiff(routesDiff);
            const pagesDiffMessage = formatDiff(pagesDiff);
            const experimentsDiffMessage = formatDiff(experimentsDiff);
            const ruLocalizationDiffMessage = formatDiff(ruLocalizationDiff);
            const iconsDiffMessage = formatIconDiff(iconsDiff);
            const mobxConstructsDiffMessage = formatMobxDiff(mobxConstructsDiff);

            if (!routesDiffMessage && !pagesDiffMessage && !experimentsDiffMessage && !ruLocalizationDiffMessage && !iconsDiffMessage && !mobxConstructsDiffMessage) {
                console.log('Изменений не обнаружено.');
                break;
            }

            routesDiffMessage && console.log(routesDiffMessage);
            pagesDiffMessage && console.log(pagesDiffMessage);
            experimentsDiffMessage && console.log(experimentsDiffMessage);
            ruLocalizationDiffMessage && console.log(ruLocalizationDiffMessage);
            iconsDiffMessage && console.log(iconsDiffMessage);
            mobxConstructsDiffMessage && console.log(mobxConstructsDiffMessage);

            if (shouldSend) {
                if (routesDiffMessage) {
                    await sendDiscordDiffMessages(`Эндпоинты изменились ${getVersionsString()}`, routesDiffMessage);
                }
                if (pagesDiffMessage) {
                    await sendDiscordDiffMessages(`Страницы изменились ${getVersionsString()}`, pagesDiffMessage);
                }
                if (experimentsDiffMessage) {
                    await sendDiscordDiffMessages(`Эксперименты изменились ${getVersionsString()}`, experimentsDiffMessage);
                }
                if (ruLocalizationDiffMessage) {
                    await sendDiscordDiffMessages(`Локализация изменилась ${getVersionsString()}`, ruLocalizationDiffMessage);
                }
                if (iconsDiffMessage) {
                    await sendDiscordDiffMessages(`Иконки изменились ${getVersionsString()}`, iconsDiffMessage);
                    await sendAddedIconImages(iconsDiff, newFolder, getVersionsString());
                }
                if (mobxConstructsDiffMessage) {
                    await sendDiscordDiffMessages(`MobX-конструкции изменились ${getVersionsString()}`, mobxConstructsDiffMessage);
                }
            }

            break;
        default:
            if (command) console.log('Неизвестная команда:', command, '\nИнтерпретирую как help...');
        case 'help':
            console.log('\n================================');
            console.log('Dataminer Diff Calculator');
            console.log(`
Команды:
help - Отображает это сообщение
            `);
            console.log('================================');
            console.log(`
Флаги:
            `);
            console.log('================================');
            console.log(`
Флаги с аргументами указываются через =, например --oldYMHashOverride=f9cdcfb583ccebb5b23edaab0ea90165bee0479458532a0580c1b3a307d746d3
            `);
            console.log('================================');
            break;
    }

    if (command) console.timeEnd(`${command} исполнен за`);
}

const args = minimist(process.argv.slice(2));
console.log(args);

(async () => {
    await run(args._?.[0], args);
})();
