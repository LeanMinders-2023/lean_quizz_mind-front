/// <reference types="vitest" />
import { defineConfig } from 'vite'
import {resolve} from "path";

// https://vitejs.dev/config/

const getAliases = () => {
    return {
        "@assets": resolve("src/assets"),
        "@components": resolve("src/components"),
        "@domain": resolve("src/domain"),
        "@infrastructure": resolve("src/infrastructure"),
        "@pages": resolve("src/pages"),
    }
}
export default defineConfig({
    test: {
        includeSource: ['src/**/*.{ts,tsx}'],
        globals: true,
        environment: "happy-dom",
        setupFiles: ['./src/test/setup.ts'],
    },
    resolve: {
        alias: getAliases(),
    }
})