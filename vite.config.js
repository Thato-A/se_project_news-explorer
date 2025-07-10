import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { base } from "./src/utils/constants";

// https://vitejs.dev/config/
export default defineConfig({
  base: base,
  plugins: [react()],
  server: {
    port: 3000,
  },
});
