import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
// import http from "https";
/* eslint-disable no-undef */
// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [react()],
    server: {
      proxy: {
        "/api": {
          target: env.VITE_DOMAIN_URL,
          changeOrigin: true,
          secure: false,
        },
      },
    },
  };
});
