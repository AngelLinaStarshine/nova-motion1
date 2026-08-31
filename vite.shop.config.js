import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import fs from "fs";
import path from "path";

export default defineConfig({
  plugins: [
    react(),
    {
      name: "shop-index-html",
      closeBundle() {
        const dist = path.resolve(__dirname, "dist-shop");
        const shopHtml = path.join(dist, "shop.html");
        const indexHtml = path.join(dist, "index.html");
        if (fs.existsSync(shopHtml)) {
          fs.copyFileSync(shopHtml, indexHtml);
        }
      },
    },
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  publicDir: path.resolve(__dirname, "public-shop"),
  build: {
    outDir: "dist-shop",
    emptyOutDir: true,
    rollupOptions: {
      input: path.resolve(__dirname, "shop.html"),
    },
  },
});
