import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
// console.log(import.meta.env.VITE_DOMAIN_URL);
/* eslint-disable no-undef */
// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), ""); // Load environment variables based on mode (dev/prod)

  return {
    plugins: [react()],
    server: {
      proxy: {
        "/api": {
          target: env.VITE_DOMAIN_URL, // Get the target from the environment variable
          changeOrigin: true,
          secure: false,
        },
      },
    },
  };
});
