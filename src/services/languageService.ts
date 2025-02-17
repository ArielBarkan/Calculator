// Modules imports
import i18n from "i18next";

//Custom imports
import { languageType, LocaleType } from "../types";
import { supportedLanguages } from "../data";
import { localStorageUpdateSelectedLanguage } from "./localStorageService";


const ChangeLanguage = async (locale: LocaleType): Promise<boolean> => {
    try {
        const selectedLanguage: languageType = getSelectedLanguageByLocale(locale);
        localStorageUpdateSelectedLanguage(selectedLanguage.locale as LocaleType);

        await i18n.changeLanguage(selectedLanguage.locale); // ✅ Wait for language change

        document.body.lang = selectedLanguage.locale;
        document.body.dir = selectedLanguage.direction;

        return true;
    } catch (error) {
        console.error("Error changing language:", error);
        return false;
    }
};

const getSelectedLanguageByLocale = (locale: string): languageType => {
    return supportedLanguages.find((lang: languageType) => lang.locale === locale) || supportedLanguages[0];
};


export { ChangeLanguage };
