// Modules imports
import i18n from "i18next";

//Custom imports
import { languageType } from "../types";
import { SUPPORTED_LANGUAGES } from "../constants";
import { updateSelectedLanguage } from "./localStorageService";
import { LANGUAGES_ENUMS } from "../enums";


const ChangeLanguage = async (locale: string) => {
    const selectedLanguage: languageType = getSelectedLanguageByLocale(locale);
    updateSelectedLanguage(selectedLanguage.locale as LANGUAGES_ENUMS);
    await i18n.changeLanguage(selectedLanguage.locale);
    document.body.lang = selectedLanguage.locale;
    document.body.dir = selectedLanguage.direction;
};

const getSelectedLanguageByLocale = (locale: string): languageType => {
    return SUPPORTED_LANGUAGES.find((lang: languageType) => lang.locale === locale) || SUPPORTED_LANGUAGES[0];
};


export { ChangeLanguage };
