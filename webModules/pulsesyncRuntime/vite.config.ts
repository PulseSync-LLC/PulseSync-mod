import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';

const currentDirectory = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
    build: {
        target: 'chrome140',
        minify: 'oxc',
        outDir: path.resolve(currentDirectory, 'dist'),
        emptyOutDir: true,
        lib: {
            entry: path.resolve(currentDirectory, 'src/index.ts'),
            name: 'PulseSyncRuntimeBundle',
            formats: ['iife'],
            fileName: () => 'runtime.js',
        },
    },
});
