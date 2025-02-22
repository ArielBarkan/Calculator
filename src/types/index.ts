import { SUPPORTED_CURRENCIES, SUPPORTED_LANGUAGES } from "../consts";
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
type LocaleType = (typeof SUPPORTED_LANGUAGES)[number]["locale"];
type CurrencyType = (typeof SUPPORTED_CURRENCIES)[number]["ISO"];


type ProductListType = {
    quantity?: number;
    price?: number;
    unifiedPrice?: number;
    rank?: number;
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
    ProductListType
};