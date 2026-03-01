const FLAG_DEFINITIONS = {
    f: {
        label: '-f',
        description: 'форсирует перезапись, пересборку или повторное извлечение',
    },
    forceOpen: {
        label: '--forceOpen',
        description: 'форсирует открытие Яндекс Музыки после выполнения команды',
    },
    noNativeModules: {
        label: '--noNativeModules',
        description: 'пропускает сборку нативных модулей',
    },
    m: {
        label: '-m',
        description: 'минифицирует исходный код перед сборкой',
    },
    r: {
        label: '-r',
        description: 'после команды запускает release',
    },
    b: {
        label: '-b',
        description: 'после команды запускает build',
    },
    d: {
        label: '-d',
        description: 'собирает напрямую в дистрибутив Яндекс Музыки',
    },
    p: {
        label: '-p',
        description: 'после extract применяет patch к извлечённому билду',
    },
    lastExtracted: {
        label: '--lastExtracted',
        description: 'использует последний extracted-билд как source',
    },
    extractType: {
        label: '--extractType=<type>',
        description: 'тип источника: direct | extracted | src | customSrc | customAsar',
    },
    withoutPure: {
        label: '--withoutPure',
        description: 'не извлекает дополнительную чистую версию без патчей',
    },
    version: {
        label: '--version=<semver>',
        description: 'использует конкретную версию для download или выбора extracted-билда',
    },
    src: {
        label: '--src=<path>',
        description: 'путь к исходному коду или asar-файлу, в зависимости от команды',
    },
    patchFile: {
        label: '--patchFile=<path>',
        description: 'путь к unified diff патчу, который нужно адаптивно перенести на другую версию',
    },
    patchDir: {
        label: '--patchDir=<path>',
        description: 'папка с *.patch/*.diff файлами, которые нужно прогнать по порядку',
    },
    dryRun: {
        label: '--dryRun',
        description: 'выполняет только подбор файлов и расчёт патча без записи изменений на диск',
    },
    dest: {
        label: '--dest=<path>',
        description: 'путь к результирующему asar-файлу',
    },
    oldYMHashOverride: {
        label: '--oldYMHashOverride=<hash>',
        description: 'переопределяет старый hash asar при обходе целостности',
    },
    onlyUploadAppAsar: {
        label: '--onlyUploadAppAsar',
        description: 'в release загружает только app.asar, без GitHub release и Discord патчноута',
    },
};

function getSortedCommands(commands) {
    return Array.from(commands.values()).sort((a, b) => (a.order ?? 999) - (b.order ?? 999) || a.name.localeCompare(b.name));
}

function printSeparator() {
    console.log('\n================================\n');
}

function printFlagList(flagIds) {
    if (!flagIds?.length) {
        return;
    }

    for (const flagId of flagIds) {
        const flag = FLAG_DEFINITIONS[flagId];
        if (!flag) {
            console.log(`${flagId} - описание не задано`);
            continue;
        }

        console.log(`${flag.label} - ${flag.description}`);
    }
}

function printGeneralHelp(commands) {
    const sortedCommands = getSortedCommands(commands);

    printSeparator();
    console.log('Команды:\n');
    for (const command of sortedCommands) {
        console.log(`${command.name} - ${command.description}`);
    }

    printSeparator();
    console.log('Подробная справка по команде:');
    console.log('node toolset.js help <command>');

    printSeparator();
    console.log('Флаги:\n');
    printFlagList(Object.keys(FLAG_DEFINITIONS));

    printSeparator();
    console.log('Пример адресной справки: node toolset.js help build');
    printSeparator();
}

function printCommandHelp(commands, commandName) {
    const command = commands.get(commandName);
    if (!command) {
        console.log(`Неизвестная команда для help: ${commandName}`);
        printGeneralHelp(commands);
        return;
    }

    printSeparator();
    console.log(`Команда: ${command.name}`);
    console.log(command.description);

    printSeparator();
    console.log('Использование:\n');
    console.log(`node toolset.js ${command.usage ?? command.name}`);

    if (command.flags?.length) {
        printSeparator();
        console.log('Актуальные флаги:\n');
        printFlagList(command.flags);
        printSeparator();
    }
}

function printHelp(commands, commandName = undefined) {
    if (commandName) {
        printCommandHelp(commands, commandName);
        return;
    }

    printGeneralHelp(commands);
}

module.exports = {
    printHelp,
};
