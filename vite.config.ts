import { defineConfig } from 'vite';

export default defineConfig({
  base: './', // Thư mục gốc

  server: {
    host: true, // Chạy server trên localhost
    port: 3000, // Port để chạy server
  },
});
