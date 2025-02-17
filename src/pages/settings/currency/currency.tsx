// Modules imports
import { useTranslation } from "react-i18next";

// Custom imports
import { Row } from "../SettingWrappers";
import { CurrencyType, currencyType } from "../../../types";

import { currenciesArray } from "../../../data";
import { TitleWithBack } from "../../../components/titleWithBack";

import {
    localStorageGetSelectedCurrency

} from "../../../services/localStorageService";

import { CurrencyIcon } from "../../../components/currencyIcon";

const Currency = () => {
    const { t: translate } = useTranslation("common");

    const currentCurrency: CurrencyType = localStorageGetSelectedCurrency();

    const handleChangeCurrency = (newCurrency: string) => {
        console.log(newCurrency);
        // TODO : set globally
    };
    return (

        <>
            <TitleWithBack title={translate("common:pages.settings.setCurrency")} linkTo={"/settings"} />

            {currenciesArray.map((currency: currencyType, index: number) => (
                <Row onClick={() => handleChangeCurrency(currency.symbol)}
                     selected={currentCurrency === currency.symbol} key={index}>
                    <p>{currency.englishName}</p>
                    <CurrencyIcon iconISO={currency?.ISO} />
                </Row>

            ))}


        </>
    );
};

export { Currency };