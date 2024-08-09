/* eslint-disable react-hooks/rules-of-hooks */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { TanStackRouterVite } from "@tanstack/router-vite-plugin";
import usePluginImport from "vite-plugin-importer";
import { vitePluginForArco } from "@arco-plugins/vite-react";

export default defineConfig({
  plugins: [
    usePluginImport({
      libraryName: "@arco-design/mobile-react",
      libraryDirectory: "esm", // In SSR environment, you need to use `cjs` here
      style: (path) => `${path}/style`,
    }),
    usePluginImport({
      libraryName: "@arco-design/mobile-react/esm/icon", // In SSR environment, you need to replace `esm` with `cjs`
      libraryDirectory: "",
      camel2DashComponentName: false,
    }),
    usePluginImport({
      libraryName: "vant",
      libraryDirectory: "es",
      style: (name) => `${name}/style/less`,
    }),
    usePluginImport({
      libraryName: "ant-design-vue",
      libraryDirectory: "es",
      style: "css",
    }),
    usePluginImport({
      libraryName: "antd",
      libraryDirectory: "es",
      style: "css",
    }),
    usePluginImport({
      libraryName: "vant",
      libraryDirectory: "es",
      style: (name) => `${name}/style/less`,
    }),
    usePluginImport({
      libraryName: "element-plus",
      customStyleName: (name) => {
        return `element-plus/lib/theme-chalk/${name}.css`;
      },
    }),

    vitePluginForArco(),
    react(),
    TanStackRouterVite(),
  ],
  resolve: {
    alias: {
      '@arco-design/web-react': path.resolve(__dirname, 'node_modules/@arco-design/web-react'),
      '~@arco-design/mobile-utils' : path.resolve(__dirname, 'node_modules/@arco-design/mobile-utils'),
  
      "@": path.resolve(__dirname, "./src/"),

      routes: `${path.resolve(__dirname, "./src/routes/")}`,

      services: `${path.resolve(__dirname, "./src/services/")}`,

      utils: `${path.resolve(__dirname, "./src/utils/")}`,
    },
  },
});
