import { CurrencyISOType, CurrencySymbolType, currencyType } from "../types";
import { localStorageGetSelectedCurrency } from "../services";
import { SUPPORTED_CURRENCIES } from "../consts";

const getCurrencySymbolByISO = (): CurrencySymbolType => {

    const currentCurrencySymbol: CurrencyISOType = localStorageGetSelectedCurrency();

    return SUPPORTED_CURRENCIES.find((currency: currencyType) => currency.ISO === currentCurrencySymbol)!.symbol;


};

export { getCurrencySymbolByISO };