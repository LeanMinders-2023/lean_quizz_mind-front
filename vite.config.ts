import { defineConfig, loadEnv, splitVendorChunkPlugin } from "vite"
import react from "@vitejs/plugin-react"
import { resolve } from "path"

const getAliases = () => {
  return {
    "@assets": resolve("src/assets"),
    "@components": resolve("src/components"),
    "@domain": resolve("src/domain"),
    "@infrastructure": resolve("src/infrastructure"),
    "@pages": resolve("src/pages"),
  }
}

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd())

  if (command === "serve" && mode === "development") {
    return {
      plugins: [react()],
      resolve: {
        alias: getAliases(),
      },
      server: {
        port: parseInt(env.VITE_PORT),
      },
    }
  } else {
    return {
      plugins: [react(), splitVendorChunkPlugin()],
      build: {
        outDir: "build",
        chunkSizeWarningLimit: 1000,
        minify: "esbuild",
      },
      resolve: {
        alias: getAliases(),
      },
    }
  }
})