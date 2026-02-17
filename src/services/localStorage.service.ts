// Custom imports
import { COOKIES_CONSENT_ENUMS, MEASUREMENT_ENUMS, THEME_ENUMS } from "../enums";
import { CurrencyISOType, LocaleType } from "../types";

const localStorageUpdateSelectedLanguage = (language: LocaleType) => {
    localStorage.setItem("language", language);
};

const localStorageGetSelectedLanguage = (): LocaleType => {
    return (localStorage.getItem("language") || import.meta.env.VITE_DEFAULT_LANGUAGE) as LocaleType;
};

const localStorageUpdateSelectedTheme = (theme: THEME_ENUMS) => {
    localStorage.setItem("theme", theme);
};

const localStorageGetSelectedTheme = (): THEME_ENUMS => {
    return (localStorage.getItem("theme") || import.meta.env.VITE_DEFAULT_THEME) as THEME_ENUMS;
};

const localStorageUpdateSelectedCurrency = (currency: CurrencyISOType) => {
    localStorage.setItem("currency", currency);
};

const localStorageGetSelectedCurrency = (): CurrencyISOType => {
    return (localStorage.getItem("currency") || import.meta.env.VITE_DEFAULT_CURRENCY_ISO) as CurrencyISOType;
};

const localStorageUpdateSelectedMeasurement = (measurement: MEASUREMENT_ENUMS) => {
    localStorage.setItem("measurement", measurement);
};

const localStorageGetSelectedMeasurement = (): MEASUREMENT_ENUMS => {
    return (localStorage.getItem("measurement") || import.meta.env.VITE_DEFAULT_MEASUREMENT) as MEASUREMENT_ENUMS;
};

const localStorageUpdateCookiesConsent = (cookieConsent: COOKIES_CONSENT_ENUMS) => {
    localStorage.setItem("cookieConsent", cookieConsent);
};

const localStorageGetCookiesConsent = (): undefined | COOKIES_CONSENT_ENUMS => {
    return localStorage.getItem("cookieConsent") as COOKIES_CONSENT_ENUMS;
};

const localStorageUpdateInstallBannerDismissed = () => {
    localStorage.setItem("installBannerDismissed", "true");
};

const localStorageGetInstallBannerDismissed = (): boolean => {
    return localStorage.getItem("installBannerDismissed") === "true";
};

export {
    localStorageUpdateSelectedLanguage,
    localStorageGetSelectedLanguage,
    localStorageUpdateSelectedTheme,
    localStorageGetSelectedTheme,
    localStorageUpdateSelectedCurrency,
    localStorageGetSelectedCurrency,
    localStorageUpdateSelectedMeasurement,
    localStorageGetSelectedMeasurement,
    localStorageUpdateCookiesConsent,
    localStorageGetCookiesConsent,
    localStorageUpdateInstallBannerDismissed,
    localStorageGetInstallBannerDismissed
};
