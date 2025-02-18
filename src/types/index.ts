import { currenciesArray, supportedLanguages } from "../data";
import { IconType } from "react-icons";

type languageType = {
    locale: string;
    direction: string;
    name: string;
    flag: string;
};

type currencyType = {
    englishName: string,
    localName: string,
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
    id?: string
};

type IconProps = {
    color?: string;
    size?: number;
    rtlIgnore?: boolean;
};

type ThemedIconProps = {
    icon: IconType;
    color?: string;
    size?: number;
    rtlIgnore?: boolean;
}

type TitleWithBackProps = {
    title: string;
    linkTo: string;
}

// Extracts the "locale" property from each object in the `supportedLanguages` array
// This ensures `LocaleType` is always updated when `supportedLanguages` changes
// Equivalent to: type LocaleType = "en-US" | "es" | "he-IL" (auto-generated)
type LocaleType = (typeof supportedLanguages)[number]["locale"];
type CurrencyType = (typeof currenciesArray)[number]["ISO"];

type CurrencyIconImageProps = {
    iconISO: string,
    width?: number,
    height?: number,
    alt?: string,
}

export {
    languageType,
    currencyType,
    selectType,
    ToggleSwitchProps,
    LocaleType,
    CurrencyType,
    IconProps,
    ThemedIconProps,
    TitleWithBackProps,
    CurrencyIconImageProps
};