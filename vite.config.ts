import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import autoprefixer from "autoprefixer";

export default defineConfig({
  plugins: [react()],
  build: {
    minify: "esbuild",
    outDir: "../D24-BackEnd/dist",
    emptyOutDir: true,
  },
  css: {
    postcss: {
      plugins: [autoprefixer({})],
    },
    preprocessorOptions: {
      scss: {
        api: "modern-compiler",
      },
    },
  },
});
