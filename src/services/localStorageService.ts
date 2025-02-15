import { THEME_ENUMS } from "../enums";
import { LocaleType } from "../types";


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

export {
    localStorageUpdateSelectedLanguage,
    localStorageGetSelectedLanguage,
    localStorageUpdateSelectedTheme,
    localStorageGetSelectedTheme
};