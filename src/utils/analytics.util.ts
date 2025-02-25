// React and modules imports
import ReactGA from "react-ga4";

const GA_TRACKING_ID = import.meta.env.VITE_GOOGLE_ANALYTICS_TRACKING_ID;


const GOOGLE_ANALYTICS = {
    isGAInitialized: false, // ✅ Ensures events are only sent after GA is ready


    initGA: () => {
        if (GA_TRACKING_ID) {
            ReactGA.initialize(GA_TRACKING_ID);
            GOOGLE_ANALYTICS.isGAInitialized = true;
            console.log("[Google Analytics] Initialized");
        } else {
            console.warn("[Google Analytics] Missing Tracking ID");
        }
    },

    trackPageView: (path: string) => {
        if (GOOGLE_ANALYTICS.isGAInitialized) {
            ReactGA.send({ hitType: "pageview", page: path });
            console.log(`[Google Analytics] Page View: ${path}`);
        }
    },
    trackEvent: (category: string, action: string, label?: string) => {
        if (GOOGLE_ANALYTICS.isGAInitialized) {
            ReactGA.event({ category, action, label });
            console.log(`[Google Analytics] Event: ${category} - ${action} ${label ? `(${label})` : ""}`);
        }
    },
    trackError: (category: string, action: string, errorMessage: string) => {
        const label: string = errorMessage?.length > 150 ? errorMessage.substring(0, 145) + "..." : errorMessage;
        if (GOOGLE_ANALYTICS.isGAInitialized) {
            ReactGA.event({ action, category: `${action}_ERROR`, label });
            console.log(`[Google Analytics] Error: ${category} - ${action} ${label ? `(${label})` : ""}`);
        }
    }
};

export { GOOGLE_ANALYTICS };
