import { currencyType, languageType, selectType } from "../types";

const convertCurrenciesToSelect = (currencies: currencyType[]): selectType[] => {
    return currencies.map((currency: currencyType) => {
        return {
            label: `${currency.englishName}-${currency.symbol}`,
            value: currency.symbol
        };
    });
};

const convertLanguagesToSelect = (languages: languageType[]): selectType[] => {
    return languages.map((language: languageType) => {
        return {
            label: `${language.name}`,
            value: language.locale
        };
    });
};

export { convertCurrenciesToSelect, convertLanguagesToSelect };