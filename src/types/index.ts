// React and modules imports
import { IconType } from "react-icons";

// Custom imports
import { SUPPORTED_CURRENCIES, SUPPORTED_LANGUAGES } from "../consts";
import { MEASUREMENT_ENUMS, THEME_ENUMS } from "../enums";
import React, { ReactNode } from "react";

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

type PageHeaderProps = {
    title: string;
    subTitle: string;
    linkTo?: string;
}

// Extracts the "locale" property from each object in the `supportedLanguages` array
// This ensures `LocaleType` is always updated when `supportedLanguages` changes
// Equivalent to: type LocaleType = "en-US" | "es" | "he-IL" (auto-generated)
type LocaleType = (typeof SUPPORTED_LANGUAGES)[number]["locale"];
type CurrencyType = (typeof SUPPORTED_CURRENCIES)[number]["ISO"];


type ProductListType = {
    id: number;
    quantity?: number;
    price?: number;
    unifiedPrice?: number;
    rank?: number;

}

type FadeInTextProps = {
    children: React.ReactNode;
    isVisible: boolean;
};

type ThemeContextType = {
    theme: THEME_ENUMS;
    direction: "ltr" | "rtl";
    toggleTheme: () => THEME_ENUMS;
}

type PageWrapperProps = {
    children: ReactNode;
};

type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    children: React.ReactNode;
    closeButtonText?: string;
};

type InputCompProps = {
    maxLength: number;
    focusFunction: () => void;
    blurFunction: () => void;
};

type ProductRowProps = {
    listOrder: number,
    productCount: number
    id: number;
    deleteFunction: (rowId: number) => void;
    quantity?: number;
    price?: number;
    unifiedPrice?: number;
    rank: number;
};

type RankDisplayProps = {
    rank: number;
    dimension: number
}

type SwitchMeasurementProps = {
    returnFunction: (measurement: MEASUREMENT_ENUMS) => void;
}

type SelectComponentProps = {
    options: selectType[]
    returnFunction?: (selectedValue: string) => void;
    currentValue?: string;
    isSearchable?: boolean;
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
    PageHeaderProps,
    ProductListType,
    FadeInTextProps,
    ThemeContextType,
    PageWrapperProps,
    ModalProps,
    InputCompProps,
    ProductRowProps,
    RankDisplayProps,
    SwitchMeasurementProps,
    SelectComponentProps
};