type languageType = {
    locale: string;
    direction: string;
    name: string;
};

type currencyType = {
    name: string,
    symbol: string,
    ISO: string
};

type selectType = {
    value: string,
    label: string,
    color?: string
}
export { languageType, currencyType, selectType };