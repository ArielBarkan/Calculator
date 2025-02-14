type languageType = {
    locale: string;
    direction: string;
    name: string;
};

type currencyType = {
    name: string,
    symbol: string,
    ISO: string,
    flag: string,
};

type selectType = {
    value: string,
    label: string
}
export { languageType, currencyType, selectType };