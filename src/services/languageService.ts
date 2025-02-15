// Modules imports
import i18n from "i18next";

//Custom imports
import { languageType, LocaleType } from "../types";
import { SUPPORTED_LANGUAGES } from "../constants";
import { localStorageUpdateSelectedLanguage } from "./localStorageService";


const ChangeLanguage = async (locale: LocaleType) => {
    const selectedLanguage: languageType = getSelectedLanguageByLocale(locale);
    localStorageUpdateSelectedLanguage(selectedLanguage.locale as LocaleType);
    await i18n.changeLanguage(selectedLanguage.locale);
    document.body.lang = selectedLanguage.locale;
    document.body.dir = selectedLanguage.direction;
};

const getSelectedLanguageByLocale = (locale: string): languageType => {
    return SUPPORTED_LANGUAGES.find((lang: languageType) => lang.locale === locale) || SUPPORTED_LANGUAGES[0];
};


export { ChangeLanguage };
