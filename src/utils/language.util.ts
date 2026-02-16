// Custom imports
import { languageType, LocaleType } from "../types";
import { SUPPORTED_LANGUAGES } from "../consts";
import { localStorageGetSelectedLanguage } from "../services";

const getSelectedLanguageByLocale = (): languageType => {
    const currentLocale: LocaleType = localStorageGetSelectedLanguage();
    return SUPPORTED_LANGUAGES.find((lang: languageType) => lang.locale === currentLocale) || SUPPORTED_LANGUAGES[0];
};

export { getSelectedLanguageByLocale };
