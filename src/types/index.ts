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
type CurrencyISOType = (typeof SUPPORTED_CURRENCIES)[number]["ISO"];
type CurrencySymbolType = (typeof SUPPORTED_CURRENCIES)[number]["symbol"];


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
    closeButtonText?: string;
    children: React.ReactNode;
    width?: string;
    height?: string;
    position?: "center" | "top" | "bottom" | "left" | "right";
};

type NumericInputProps = {
    value?: number;
    maxLength: number;
    focusFunction: () => void;
    blurFunction: () => void;
    returnFunction: (val: number) => void;
};

type ProductListType = {
    id: number;
    quantity?: number;
    price?: number;
    unifiedPrice?: number;
    rank?: number;
}

type UpdateProductRowProps = {
    id: number,
    keyToUpdate: keyof ProductListType
    updatedValue: number
}


type ProductRowProps = {
    listOrder: number,
    productCount: number
    id: number;
    returnFunction: (props: UpdateProductRowProps) => void;
    deleteFunction: (rowId: number) => void;
    quantity?: number;
    price?: number;
    unifiedPrice?: number;
    rank?: number;
};


type RankDisplayProps = {
    rank?: number;
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

type IconButtonProps = {
    label: string;
    icon: React.ReactNode;
    disabled: boolean;
    returnFunction: () => void;
};


export {
    languageType,
    currencyType,
    selectType,
    ToggleSwitchProps,
    LocaleType,
    CurrencyISOType,
    CurrencySymbolType,
    IconProps,
    ThemedIconProps,
    PageHeaderProps,
    ProductListType,
    FadeInTextProps,
    ThemeContextType,
    PageWrapperProps,
    ModalProps,
    NumericInputProps,
    UpdateProductRowProps,
    ProductRowProps,
    RankDisplayProps,
    SwitchMeasurementProps,
    SelectComponentProps,
    IconButtonProps
};