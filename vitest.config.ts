/// <reference types="vitest" />
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
    test: {
        includeSource: ['src/**/*.{ts,tsx}'],
        globals: true,
        environment: "happy-dom",
        setupFiles: ['./src/test/setup.ts'],
    },
})