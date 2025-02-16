import { SUPPORTED_LANGUAGES } from "../constants";
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

type LocaleType = (typeof SUPPORTED_LANGUAGES)[number]["locale"];

export { languageType, currencyType, selectType, ToggleSwitchProps, LocaleType, IconProps, ThemedIconProps };