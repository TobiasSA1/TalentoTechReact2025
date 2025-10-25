import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/TalentoTechReact2025/" // nombre EXACTO del repo
});
