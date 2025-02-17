import { languageType, LocaleType } from "../types";
import { supportedLanguages } from "../data";
import { localStorageGetSelectedLanguage } from "../services/localStorageService";


const getSelectedLanguageByLocale = (): languageType => {
    const currentLocale: LocaleType = localStorageGetSelectedLanguage();
    return supportedLanguages.find((lang: languageType) => lang.locale === currentLocale) || supportedLanguages[0];
};

export { getSelectedLanguageByLocale };
