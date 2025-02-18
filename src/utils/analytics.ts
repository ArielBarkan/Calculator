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

    // ✅ Track page views safely
    trackPageView: (path: string) => {
        if (GOOGLE_ANALYTICS.isGAInitialized) {
            ReactGA.send({ hitType: "pageview", page: path });
            console.log(`[Google Analytics] Page View: ${path}`);
        }
    },

    // ✅ Track events safely
    trackEvent: (category: string, action: string, label?: string) => {
        if (GOOGLE_ANALYTICS.isGAInitialized) {
            ReactGA.event({ category, action, label });
            console.log(`[Google Analytics] Event: ${category} - ${action} ${label ? `(${label})` : ""}`);
        }
    }
};

export { GOOGLE_ANALYTICS };
