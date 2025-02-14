import { currencyType, selectType } from "../types";

const convertCurrenciesToSelect = (currencies: currencyType[]): selectType[] => {

    return currencies.map((currency: currencyType) => {
        return {
            label: `${currency.name}-${currency.symbol}`,
            value: currency.symbol
        };
    });

};

export { convertCurrenciesToSelect };