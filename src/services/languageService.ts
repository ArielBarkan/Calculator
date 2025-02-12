import i18n from "i18next";

//Custom imports
import { LanguageType } from "../types";
import { SUPPORTED_LANGUAGES } from "../constants";

/**
 *
 * @param locale
 * This function change the UI language + body direction + body lang attribute
 */
const ChangeLanguage = async (locale: string) => {
    const selectedLanguage: LanguageType = getSelectedLanguageByLocale(locale);
    await i18n.changeLanguage(selectedLanguage.locale);
    document.body.lang = selectedLanguage.locale;
    document.body.dir = selectedLanguage.direction;
};

const getSelectedLanguageByLocale = (locale: string): LanguageType => {
    return SUPPORTED_LANGUAGES.find((lang: LanguageType) => lang.locale === locale) || SUPPORTED_LANGUAGES[0];
};

export { ChangeLanguage };
