import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    base: "/", // Ensure proper routing
    build: {
        outDir: "dist" // Vercel expects output in `dist`
    },
    server: {
        fs: {
            strict: false // Allows accessing files outside src
        }
    }
});
