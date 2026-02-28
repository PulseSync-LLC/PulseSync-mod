module.exports = {
    name: 'help',
    description: 'отображает справку',
    order: 0,
    usage: 'help [command]',
    flags: [],
    async execute({ args, commands, printHelp }) {
        printHelp(commands, args._?.[1]);
    },
};
