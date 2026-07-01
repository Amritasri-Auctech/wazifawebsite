import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss()],

  server: {
    // port: 3000,
    host: true,
    port: 5174,
    open: true,
    proxy: {
      // https://vitejs.dev/config/server-options.html
    },
  },
});
