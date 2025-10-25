import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Vercel expone VERCEL="1" en build
const isVercel = process.env.VERCEL === "1";
// Cambiá esto si tu repo de GH Pages tuviera otro nombre
const ghBase = "/TalentoTechReact2025/";

export default defineConfig({
  plugins: [react()],
  base: isVercel ? "/" : ghBase
});
