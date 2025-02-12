import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpBackend, { HttpBackendOptions } from "i18next-http-backend";
import { DEFAULT_REACT_APP_LOCALES_URL, SUPPORTED_LANGUAGES } from "../constants";

declare module "i18next" {
    interface CustomTypeOptions {
        returnNull: false;
    }
}

i18n.use(HttpBackend)
    .use(initReactI18next)
    // init i18next
    // for all options read: https://www.i18next.com/overview/configuration-options
    .init<HttpBackendOptions>({
        ns: ["common"], // add namespaces when we need to split our translation to several scopes
        defaultNS: "common",
        debug: import.meta.env.VITE_REACT_APP_I18N_DEBUG_MODE === "true",
        //debug: true,
        lng: SUPPORTED_LANGUAGES[0].locale,
        fallbackLng: SUPPORTED_LANGUAGES[0].locale,
        load: "currentOnly",
        interpolation: {
            escapeValue: false // not needed for react as it escapes by default
        },
        returnNull: false,
        backend: {
            loadPath: `${import.meta.env.VITE_REACT_APP_LOCALES_URL ? import.meta.env.VITE_REACT_APP_LOCALES_URL : DEFAULT_REACT_APP_LOCALES_URL}/{{lng}}/{{ns}}.json`
        }
    });

export default i18n;
