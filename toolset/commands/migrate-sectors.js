const { initWorkspace, workspaceStatus, prepareItem, alignPreparedItem, checkWorkspace, auditWorkspace } = require('../utils/migrationSectors.js');
const FLAGS = ['workDir', 'donor', 'baseline', 'target', 'sector', 'item', 'baseFile', 'targetFile', 'targetModule', 'mapping', 'run'];

module.exports = {
    name: 'migrate-sectors',
    description: 'готовит inventory секторов, AST alignment и трёхсторонние заготовки переноса',
    order: 72,
    usage: 'migrate-sectors <init|status|prepare|align|check|audit> --workDir=analysis/<migration> [--donor=<git-ref> --baseline=<path> --target=<path>] [--sector=<id>] [--item=<id> --baseFile=<path> --targetFile=<path> --targetModule=<id>] [--mapping=<json> --run=<name>]',
    flags: FLAGS,
    stringFlags: FLAGS,
    flagDescriptions: {
        workDir: 'отдельная рабочая папка внутри analysis/',
        donor: 'Git ref старого мода до sync; фиксируется полный commit SHA',
        baseline: 'точный root старого чистого extracted build с package.json',
        target: 'точный root нового чистого extracted build с package.json',
        sector: 'фильтр status по ID сектора из ledger.json',
        item: 'ID врезки из inventory.json для prepare/align',
        baseFile: 'другой логический baseline path при перемещении модуля',
        targetFile: 'проверенный логический путь нового upstream файла',
        targetModule: 'проверенный новый webpack module ID',
        mapping: 'JSON-карта module IDs, exports, bindings/scopes и точных строк для align',
        run: 'имя новой подпапки alignment run; по умолчанию auto',
    },
    async execute({ args, core }) {
        const repo = core.constants.REPO_ROOT;
        const options = { ...args, repo, targetModule: args.targetModule === undefined ? undefined : String(args.targetModule) };
        const action = args._[1];
        let result;
        if (action === 'init') {
            if (!args.donor || !args.baseline || !args.target) throw new Error('init требует --donor, --baseline и --target с точными snapshot paths');
            result = initWorkspace(options);
        } else if (action === 'status') {
            result = workspaceStatus(options);
            for (const sector of result.sectors) console.log(`${sector.title}: ${JSON.stringify(sector.counts)}`);
            console.log(`Незакрытых врезок: ${result.pending.length}; ошибок исходных маркеров: ${result.inventoryIssues.length}`);
            console.log(result.notice);
            if (args.sector) console.log(JSON.stringify(result.pending, null, 2));
            return;
        } else if (action === 'prepare') {
            if (!args.item) throw new Error('prepare требует --item');
            result = prepareItem(options);
        } else if (action === 'align') {
            if (!args.item) throw new Error('align требует --item подготовленной врезки');
            result = alignPreparedItem(options);
        } else if (action === 'check') {
            result = checkWorkspace(options);
            if (!result.ok) process.exitCode = 1;
        } else if (action === 'audit') {
            result = auditWorkspace(options);
            if (!result.ok) process.exitCode = 1;
        } else throw new Error('Укажите действие: init, status, prepare, align, check или audit');
        console.log(JSON.stringify(result, null, 2));
    },
};
