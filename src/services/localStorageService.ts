import { THEME_ENUMS } from "../enums";
import { CurrencyType, LocaleType } from "../types";


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

const localStorageUpdateSelectedCurrency = (currency: CurrencyType) => {
    localStorage.setItem("currency", currency);
};

const localStorageGetSelectedCurrency = (): CurrencyType => {
    return (localStorage.getItem("currency") || import.meta.env.VITE_DEFAULT_CURRENCY_ISO) as CurrencyType;
};


export {
    localStorageUpdateSelectedLanguage,
    localStorageGetSelectedLanguage,
    localStorageUpdateSelectedTheme,
    localStorageGetSelectedTheme,
    localStorageUpdateSelectedCurrency,
    localStorageGetSelectedCurrency
};