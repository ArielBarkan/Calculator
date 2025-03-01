// React and modules imports
import ReactGA from "react-ga4";

// Custom imports
import { GA_EVENTS } from "../consts";
import { localStorageGetSelectedCurrency } from "../services";

const GA_TRACKING_ID = import.meta.env.VITE_GOOGLE_ANALYTICS_TRACKING_ID;


const GOOGLE_ANALYTICS = {
    isGAInitialized: false, // Ensures events are only sent after GA is ready


    initGA: () => {
        if (GA_TRACKING_ID) {
            ReactGA.initialize(GA_TRACKING_ID);
            GOOGLE_ANALYTICS.isGAInitialized = true;
            //console.log("[Google Analytics] Initialized");
        } else {
            //console.warn("[Google Analytics] Missing Tracking ID");
        }
    },

    trackPageView: (path: string) => {
        if (GOOGLE_ANALYTICS.isGAInitialized) {
            ReactGA.send({ hitType: "pageview", page: path });
            //console.log(`[Google Analytics] Page View: ${path}`);
        }
    },
    trackEvent: (category: string, action: string, label?: string) => {
        if (GOOGLE_ANALYTICS.isGAInitialized) {
            ReactGA.event({ category, action, label });
            //console.log(`[Google Analytics] Event: ${category} - ${action} ${label ? `(${label})` : ""}`);
        }
    },
    trackError: (category: string, action: string, errorMessage: string) => {
        const label: string = errorMessage?.length > 150 ? errorMessage.substring(0, 145) + "..." : errorMessage;
        if (GOOGLE_ANALYTICS.isGAInitialized) {
            ReactGA.event({ action, category: `${action}_ERROR`, label });
            //console.log(`[Google Analytics] Error: ${category} - ${action} ${label ? `(${label})` : ""}`);
        }
    },
    sendProductStatsToGA: (stats: {
        priceDifference: number;
        percentageDifference: number;
        totalPrice: number;
        productCount: number
    }) => {
        if (GOOGLE_ANALYTICS.isGAInitialized) {
            ReactGA.gtag(GA_EVENTS.CATEGORIES.USER_ACTIONS, GA_EVENTS.ACTIONS.CALCULATOR_USAGE, {
                user_currency_ISO: localStorageGetSelectedCurrency(),
                price_difference: stats.priceDifference,
                percentage_difference: stats.percentageDifference,
                total_price: stats.totalPrice,
                product_count: stats.productCount,
                non_interaction: true // Ensures it doesn't affect bounce rate
            });
            // console.log("[Google Analytics] event : calculated_product_stats");
        }
    }

};

export { GOOGLE_ANALYTICS };
