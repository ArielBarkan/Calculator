// React and modules imports
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

// Custom imports
import "./index.css";
import App from "./App";
import { GOOGLE_ANALYTICS } from "./utils/analytics.util";
import { GA_EVENTS } from "./consts";

if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
        navigator.serviceWorker.register("/service-worker.js")
            .then(() => {
                GOOGLE_ANALYTICS.trackEvent(GA_EVENTS.CATEGORIES.USER_ACTIONS, GA_EVENTS.ACTIONS.PWA_INSTALLED, "success");
                console.log("Service Worker registered");
            })
            .catch((error) => {
                GOOGLE_ANALYTICS.trackEvent(GA_EVENTS.CATEGORIES.USER_ACTIONS, GA_EVENTS.ACTIONS.PWA_NOT_INSTALLED, "success");
                console.error("Service Worker registration failed:", error);
            });
    });
}
createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </StrictMode>
);
