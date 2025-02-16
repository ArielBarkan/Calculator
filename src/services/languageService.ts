// Modules imports
import i18n from "i18next";

//Custom imports
import { languageType, LocaleType } from "../types";
import { supportedLanguages } from "../data";
import { localStorageUpdateSelectedLanguage } from "./localStorageService";


const ChangeLanguage = async (locale: LocaleType) => {
    const selectedLanguage: languageType = getSelectedLanguageByLocale(locale);
    localStorageUpdateSelectedLanguage(selectedLanguage.locale as LocaleType);
    await i18n.changeLanguage(selectedLanguage.locale);
    document.body.lang = selectedLanguage.locale;
    document.body.dir = selectedLanguage.direction;
};

const getSelectedLanguageByLocale = (locale: string): languageType => {
    return supportedLanguages.find((lang: languageType) => lang.locale === locale) || supportedLanguages[0];
};


export { ChangeLanguage };
