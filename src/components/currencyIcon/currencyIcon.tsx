import icons from "currency-icons";

import { CurrencyIconImage } from "./currencyIconWrappers";
import { CurrencyIconImageProps } from "../../types";
import { GenericCurrencyIcon } from "../../assets";

const getCurrencyIcon = (currency: string) => {
    return icons[currency]?.icon || GenericCurrencyIcon;
};

const CurrencyIcon = (props: CurrencyIconImageProps) => {
    const { iconISO, width, height, alt } = props;
    return (<CurrencyIconImage
        iconISO={getCurrencyIcon(iconISO)} {...{ width }} {...{ height }} {...{ alt }} />);
};

export { CurrencyIcon };