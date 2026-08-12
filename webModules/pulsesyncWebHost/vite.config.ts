import path from 'node:path';
import { fileURLToPath } from 'node:url';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

const currentDirectory = path.dirname(fileURLToPath(import.meta.url));
const devServerOrigin = 'http://127.0.0.1:5173';

export default defineConfig(({ command }) => ({
    plugins: [react()],
    resolve: {
        dedupe: ['react', 'react-dom'],
    },
    define: {
        'process.env.NODE_ENV': JSON.stringify(command === 'serve' ? 'development' : 'production'),
    },
    server: {
        host: '127.0.0.1',
        port: 5173,
        strictPort: true,
        origin: devServerOrigin,
        cors: {
            origin: 'music-application://desktop',
        },
        fs: {
            allow: [currentDirectory, path.resolve(currentDirectory, '..', 'pulsesyncSettings')],
        },
    },
    build: {
        target: 'chrome140',
        minify: 'oxc',
        outDir: path.resolve(currentDirectory, 'dist'),
        emptyOutDir: true,
        lib: {
            entry: path.resolve(currentDirectory, 'src/index.ts'),
            name: 'PulseSyncWebHostBundle',
            formats: ['iife'],
            fileName: () => 'host.js',
            cssFileName: 'host',
        },
    },
}));
