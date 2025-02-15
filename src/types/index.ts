import { SUPPORTED_LANGUAGES } from "../constants";

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
type ToggleSwitchProps = {
    checked: boolean;
    returnFunction: () => void;
};


type LocaleType = (typeof SUPPORTED_LANGUAGES)[number]["locale"];

export { languageType, currencyType, selectType, ToggleSwitchProps, LocaleType };