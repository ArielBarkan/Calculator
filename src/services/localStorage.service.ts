// Custom imports
import { MEASUREMENT_ENUMS, THEME_ENUMS } from "../enums";
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


export {
    localStorageUpdateSelectedLanguage,
    localStorageGetSelectedLanguage,
    localStorageUpdateSelectedTheme,
    localStorageGetSelectedTheme,
    localStorageUpdateSelectedCurrency,
    localStorageGetSelectedCurrency,
    localStorageUpdateSelectedMeasurement,
    localStorageGetSelectedMeasurement
};