import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import envCompatible from "vite-plugin-env-compatible";
import svgrPlugin from "vite-plugin-svgr";
import tsconfigPaths from "vite-tsconfig-paths";
const path = require("path");
// https://vitejs.dev/config/

export default defineConfig({
  envPrefix: "VITE_APP_",
  // This changes the out put dir from dist to build
  // comment this out if that isn't relevant for your project
  resolve: {
    alias: {
      "./runtimeConfig": "./runtimeConfig.browser",
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "build",
  },
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:5000",
        changeOrigin: true,
        secure: false,
      },
    },
  },
  plugins: [
    react(),
    envCompatible(),
    svgrPlugin({
      svgrOptions: { icon: true },
    }),
    tsconfigPaths(),
  ],
});
