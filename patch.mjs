import fs from 'fs';
import readline from 'readline-sync';
import { createPackage } from '@electron/asar';
import axios from 'axios';
import FormData from 'form-data';
import { getYamlFile, getExeFile, getAsar } from './getAsar.mjs';
const args = process.argv.slice(2);

if (!fs.existsSync('./asar')) {
    fs.mkdirSync('./asar');
}
if (!fs.existsSync('./out')) {
    fs.mkdirSync('./out');
} else {
    fs.rmSync('./out', { recursive: true });
    fs.mkdirSync('./out');
}
if (!fs.existsSync('./patch')) {
    fs.mkdirSync('./patch');
}
if (!fs.existsSync('./build')) {
    fs.mkdirSync('./build');
}

let yaml = await getYamlFile();
const version = yaml.version;
let stats = await import('./data.json').catch(() => {
    return { version: '1.0.0' };
});

let isVersion = false;
const files = fs.readdirSync('./asar/');
files.forEach(file => {
    if (file === version) isVersion = true;
});

if (isVersion) {
    console.log(`Version ${version} already downloaded.`);
} else {
    const downloadUrl = yaml.commonConfig.UPDATE_URL + yaml.files[0].url;
    await getExeFile(downloadUrl);
    console.log(`Downloaded version ${version}`);
    await getAsar(version);
    console.log(`Extracted version ${version}`);
}

stats.version = version;

fs.cpSync(`./asar/${stats.version}/`, `./out/${stats.version}/`, { recursive: true });

if (!fs.existsSync(`./patch/${stats.version}/`)) {
    throw new Error(`No patch found for version ${stats.version}`);
}

fs.cpSync(`./patch/${stats.version}/`, `./out/${stats.version}/`, { recursive: true });

await createPackage(`./out/${version}/`, `./build/app.asar`);
let out = {
    version,
    createdAt: new Date().toISOString(),
};
fs.writeFileSync('./data.json', JSON.stringify(out));
console.log('Patching completed');

const changelogContent = fs.readFileSync('./CHANGELOG.md', 'utf-8');
const changelog = parseChangelog(changelogContent);
const packageJson = JSON.parse(fs.readFileSync('./package.json', 'utf-8'));
const versionInfo = packageJson.version;

// TODO: протестить
// try {
//     const serverUrl = 'https://api.pulsesync.dev/cdn/uploadAsar';
//     const formData = new FormData();
//     formData.append('file', fs.createReadStream('./build/app.asar'));
//     formData.append('modVersion', versionInfo);
//     formData.append('version', version);
//     formData.append('changelog', JSON.stringify(changelog));
//
//     const secretKey = process.env.SERVER_SECRET;
//     if (!secretKey) {
//         throw new Error('SERVER_SECRET environment variable is not set');
//     }
//
//     const headers = {
//         ...formData.getHeaders(),
//         'Authorization': `Bearer ${secretKey}`,
//     };
//
//     const response = await axios.post(serverUrl, formData, { headers });
//
//     if (response.data.ok) {
//         console.log('app.asar uploaded successfully to the server');
//     } else {
//         console.error('Failed to upload app.asar to the server:', response.data.message);
//     }
// } catch (error) {
//     console.error('Error uploading app.asar to the server:', error);
// }

if (process.env.GITHUB_ACTIONS) process.exit(0);
if(args.includes('-y')) copy();
const answer = readline.question(
    'Replace app.asar in %localappdata%/Programs/YandexMusic/resources? (y/n)',
    { limit: ['y', 'n'] }
);

if (answer === 'y') copy();
function copy() {
    fs.copyFileSync(
        './build/app.asar',
        `${process.env.LOCALAPPDATA}/Programs/YandexMusic/resources/app.asar`
    );
    console.log('app.asar replaced');
    process.exit(0);
}

process.exit(0);
function parseChangelog(content) {
    const lines = content.split('\n');
    const versions = [];
    let currentVersion = null;

    lines.forEach(line => {
        const versionMatch = line.match(/^## \[(.+)\] - (.+)$/);
        if (versionMatch) {
            currentVersion = { version: versionMatch[1], date: versionMatch[2], changes: [] };
            versions.push(currentVersion);
        } else if (line.startsWith('### ')) {
            // Ignore
        } else if (line.startsWith('- ') && currentVersion) {
            currentVersion.changes.push(line.substring(2));
        }
    });

    return versions;
}
