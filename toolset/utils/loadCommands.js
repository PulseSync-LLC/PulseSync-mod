const fs = require('fs').promises;
const path = require('path');

async function loadCommands(commandsDir) {
    const entries = await fs.readdir(commandsDir, { withFileTypes: true });
    const commands = new Map();

    for (const entry of entries) {
        if (!entry.isFile() || path.extname(entry.name) !== '.js') continue;

        const commandPath = path.join(commandsDir, entry.name);
        const command = require(commandPath);

        if (!command?.name || typeof command.execute !== 'function') {
            throw new Error(`Invalid command module: ${commandPath}`);
        }

        commands.set(command.name, command);
    }

    return commands;
}

module.exports = {
    loadCommands,
};
