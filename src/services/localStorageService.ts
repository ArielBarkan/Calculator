import { LANGUAGES_ENUMS, THEME_ENUMS } from "../enums";


const localStorageUpdateSelectedLanguage = (language: LANGUAGES_ENUMS) => {
    localStorage.setItem("language", language);
};

const localStorageGetSelectedLanguage = (): LANGUAGES_ENUMS => {
    return (localStorage.getItem("language") || import.meta.env.VITE_DEFAULT_LANGUAGE) as LANGUAGES_ENUMS;
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