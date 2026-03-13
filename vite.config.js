import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  base: "/portfolio/",
  plugins: [react()],
  server: {
    port: 5173,
    // allow ngrok or other external hosts for development tunnels
    allowedHosts: [
      'localhost',
      'semibiological-endothelioid-ava.ngrok-free.dev',
      // you can add other hosts or use '...' for a wildcard
    ],
  },
});