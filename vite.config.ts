import { defineConfig } from "vite";

export default defineConfig({
  root: ".", // Thư mục gốc
  build: {
    outDir: "dist", // Thư mục chứa file biên dịch
  },
  server: {
    port: 3000, // Port để chạy server
  },
});
