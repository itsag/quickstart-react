import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      hooks: path.resolve(__dirname, "src/hooks"),
      common: path.resolve(__dirname, "src/common"),
      contexts: path.resolve(__dirname, "src/contexts"),
      helpers: path.resolve(__dirname, "src/helpers"),
      components: path.resolve(__dirname, "src/components"),
      services: path.resolve(__dirname, "src/services"),
      styles: path.resolve(__dirname, "src/styles"),
      state: path.resolve(__dirname, "src/state"),
    },
  },
});
