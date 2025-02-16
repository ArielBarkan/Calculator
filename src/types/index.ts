import { supportedLanguages } from "../data";
import { IconType } from "react-icons";

type languageType = {
    locale: string;
    direction: string;
    name: string;
    flag: string;
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

type IconProps = {
    color?: string;
    size?: number;
};

type ThemedIconProps = {
    icon: IconType;
    color?: string;
    size?: number;
}

// Extracts the "locale" property from each object in the `supportedLanguages` array
// This ensures `LocaleType` is always updated when `supportedLanguages` changes
// Equivalent to: type LocaleType = "en-US" | "es" | "he-IL" (auto-generated)
type LocaleType = (typeof supportedLanguages)[number]["locale"];


export { languageType, currencyType, selectType, ToggleSwitchProps, LocaleType, IconProps, ThemedIconProps };