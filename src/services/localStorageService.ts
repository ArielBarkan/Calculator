import { LANGUAGES_ENUMS, THEME_ENUMS } from "../enums";


const updateSelectedLanguage = (language: LANGUAGES_ENUMS) => {
    localStorage.setItem("language", language);
};

const getSelectedLanguage = (): LANGUAGES_ENUMS => {
    return (localStorage.getItem("language") || import.meta.env.VITE_DEFAULT_LANGUAGE) as LANGUAGES_ENUMS;
};

const updateSelectedTheme = (theme: THEME_ENUMS) => {
    localStorage.setItem("theme", theme);
};

const getSelectedTheme = (): THEME_ENUMS => {
    return (localStorage.getItem("theme") || import.meta.env.VITE_DEFAULT_THEME) as THEME_ENUMS;
};

export { updateSelectedLanguage, getSelectedLanguage, updateSelectedTheme, getSelectedTheme };