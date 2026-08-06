import path from 'node:path'
import { fileURLToPath } from 'node:url'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

const currentDirectory = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
    plugins: [react()],
    define: {
        'process.env.NODE_ENV': JSON.stringify('production'),
    },
    build: {
        target: 'chrome140',
        minify: 'oxc',
        outDir: path.resolve(currentDirectory, 'dist'),
        emptyOutDir: false,
        lib: {
            entry: path.resolve(currentDirectory, 'src/isolated/index.tsx'),
            name: 'PulseSyncIsolatedAddonRuntime',
            formats: ['iife'],
            fileName: () => 'isolated.js',
        },
    },
})
