import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react(),
        VitePWA({
            strategies: "generateSW",
            registerType: "autoUpdate",
            manifest: false,
            includeAssets: ["icons/icon-192x192.png", "icons/icon-512x512.png"],
            workbox: {
                globPatterns: ["**/*.{js,css,html,ico,png,svg,woff2}"],
                runtimeCaching: [
                    {
                        urlPattern: /^https?:\/\/.*\/locales\/.*\.json$/,
                        handler: "StaleWhileRevalidate",
                        options: {
                            cacheName: "i18n-translations",
                            expiration: {
                                maxEntries: 20,
                                maxAgeSeconds: 60 * 60 * 24 * 30
                            }
                        }
                    }
                ],
                maximumFileSizeToCacheInBytes: 4 * 1024 * 1024,
                cleanupOutdatedCaches: true,
                clientsClaim: true,
                skipWaiting: true
            }
        })
    ],
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
