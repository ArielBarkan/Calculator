// Modules imports
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpBackend, { HttpBackendOptions } from "i18next-http-backend";

// Custom imports
import { SUPPORTED_LANGUAGES } from "../constants";

declare module "i18next" {
    interface CustomTypeOptions {
        returnNull: false;
    }
}

i18n.use(HttpBackend)
    .use(initReactI18next)
    // for all options read: https://www.i18next.com/overview/configuration-options
    .init<HttpBackendOptions>({
        ns: ["common"],
        defaultNS: "common",
        debug: import.meta.env.VITE_I18N_DEBUG_MODE === "true",
        lng: SUPPORTED_LANGUAGES[0].locale,
        fallbackLng: SUPPORTED_LANGUAGES[0].locale,
        load: "currentOnly",
        interpolation: {
            escapeValue: false
        },
        returnNull: false,
        backend: {
            loadPath: `${import.meta.env.VITE_LOCALES_URL}/{{lng}}/{{ns}}.json`
        }
    });

export default i18n;
