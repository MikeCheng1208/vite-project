import { defineConfig } from "vite";
import path from "path";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import Layouts from "vite-plugin-vue-layouts";
import Pages from "vite-plugin-pages";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";

export default defineConfig({
  resolve: {
    alias: {
      "@/": `${path.resolve(__dirname, "src")}/`,
    },
  },
  plugins: [
    vue(),
    Pages(),
    Layouts(),
    AutoImport({
      imports: ["vue", "vue-router", "vue-i18n"],
      dts: "src/auto-imports.js",
    }),
    // https://github.com/antfu/unplugin-vue-components
    Components({
      // 從 `./src/components/` 路徑查找
      extensions: ["vue"],
      include: [/\.vue$/, /\.vue\?vue/],
      dts: "src/auto-components.js",
    }),
    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(), "src/assets/svg")],
      symbolId: "[dir]/[name]",
    }),
  ],
});
