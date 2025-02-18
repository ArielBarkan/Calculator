import ReactGA from "react-ga4";

const GA_TRACKING_ID = import.meta.env.VITE_GOOGLE_ANALYTICS_TRACKING_ID;

export const initGA = () => {
    ReactGA.initialize(GA_TRACKING_ID);
};

export const trackPageView = (path: string) => {
    ReactGA.send({ hitType: "pageview", page: path });
};

export const trackEvent = (category: string, action: string, label?: string) => {
    ReactGA.event({ category, action, label });
};
