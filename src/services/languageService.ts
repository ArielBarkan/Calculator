// Modules imports
import i18n from "i18next";

//Custom imports
import { languageType } from "../types";
import { SUPPORTED_LANGUAGES } from "../constants";

/**
 *
 * @param locale
 * This function change the UI language + body direction + body lang attribute
 */
const ChangeLanguage = async (locale: string) => {
    const selectedLanguage: languageType = getSelectedLanguageByLocale(locale);
    console.log({ selectedLanguage });
    await i18n.changeLanguage(selectedLanguage.locale);
    document.body.lang = selectedLanguage.locale;
    document.body.dir = selectedLanguage.direction;
};

const getSelectedLanguageByLocale = (locale: string): languageType => {
    return SUPPORTED_LANGUAGES.find((lang: languageType) => lang.locale === locale) || SUPPORTED_LANGUAGES[0];
};


export { ChangeLanguage };
