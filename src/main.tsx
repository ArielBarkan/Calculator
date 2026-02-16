// React and modules imports
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { registerSW } from "virtual:pwa-register";

// Custom imports
import "./index.css";
import App from "./App";
import { GOOGLE_ANALYTICS } from "./utils/analytics.util";
import { GA_EVENTS } from "./consts";
import { SUPPORTED_LANGUAGES } from "./consts/languages.const";

registerSW({
    onRegisteredSW(swScriptUrl) {
        GOOGLE_ANALYTICS.trackEvent(
            GA_EVENTS.CATEGORIES.USER_ACTIONS,
            GA_EVENTS.ACTIONS.PWA_INSTALLED,
            "success"
        );
        console.log("Service Worker registered:", swScriptUrl);

        // Warm the translation cache so all languages work offline
        const localesUrl = import.meta.env.VITE_LOCALES_URL || "/locales";
        if ("serviceWorker" in navigator) {
            navigator.serviceWorker.ready.then(() => {
                SUPPORTED_LANGUAGES.forEach(({ locale }) => {
                    fetch(`${localesUrl}/${locale}/common.json`).catch(() => {});
                });
            });
        }
    },
    onRegisterError(error) {
        GOOGLE_ANALYTICS.trackEvent(
            GA_EVENTS.CATEGORIES.USER_ACTIONS,
            GA_EVENTS.ACTIONS.PWA_NOT_INSTALLED,
            "success"
        );
        console.error("Service Worker registration failed:", error);
    }
});

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </StrictMode>
);
