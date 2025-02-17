// Modules imports
import { useTranslation } from "react-i18next";

// Custom imports
import { Row, ScrollableContainer } from "../SettingWrappers";
import { CurrencyType, currencyType } from "../../../types";

import { currenciesArray } from "../../../data";
import { TitleWithBack } from "../../../components/titleWithBack";

import {
    localStorageGetSelectedCurrency, localStorageUpdateSelectedCurrency

} from "../../../services/localStorageService";

import { CurrencyIcon } from "../../../components/currencyIcon";
import Flag from "react-world-flags";
import { useState } from "react";

const Currency = () => {
    const { t: translate } = useTranslation("common");

    const [currentCurrency, setCurrentCurrency] = useState<CurrencyType>(localStorageGetSelectedCurrency());

    const handleChangeCurrency = (newCurrency: string) => {
        localStorageUpdateSelectedCurrency(newCurrency);
        setCurrentCurrency(localStorageGetSelectedCurrency());
    };
    return (

        <>
            <TitleWithBack title={translate("common:pages.settings.setCurrency")} linkTo={"/settings"} />
            <ScrollableContainer>
                {currenciesArray.map((currency: currencyType, index: number) => (
                    <Row onClick={() => handleChangeCurrency(currency.ISO)}
                         selected={currentCurrency === currency.ISO} key={index}>
                        <Flag code={currency.flag} width={50} />
                        <p>{currency.localName}</p>
                        <CurrencyIcon iconISO={currency.ISO} />

                    </Row>

                ))}

            </ScrollableContainer>
        </>
    );
};

export { Currency };