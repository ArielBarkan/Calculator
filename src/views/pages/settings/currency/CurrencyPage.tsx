// Modules imports
import { useTranslation } from "react-i18next";

// Custom imports
import { Row } from "../SettingWrappers";
import { CurrencyType, currencyType } from "../../../../types";

import { GA_EVENTS, SUPPORTED_CURRENCIES } from "../../../../consts";
import { TitleWithBack } from "../../../../components/titleWithBack";

import {
    localStorageGetSelectedCurrency, localStorageUpdateSelectedCurrency

} from "../../../../services";


import Flag from "react-world-flags";
import { useState } from "react";
import { IconsGroup } from "./currencyWrappers";
import { InternationalFlag } from "../../../../assets";
import { NotifySuccess } from "../../../../components/toast/toast";
import { GOOGLE_ANALYTICS } from "../../../../utils/analytics.util";

const CurrencyPage = () => {
    const { t: translate } = useTranslation("common");

    const [currentCurrency, setCurrentCurrency] = useState<CurrencyType>(localStorageGetSelectedCurrency());

    const handleChangeCurrency = (newCurrency: string) => {

        if (newCurrency === currentCurrency) return;
        localStorageUpdateSelectedCurrency(newCurrency);
        setCurrentCurrency(localStorageGetSelectedCurrency());
        GOOGLE_ANALYTICS.trackEvent(GA_EVENTS.CATEGORIES.USER_ACTIONS, GA_EVENTS.ACTIONS.CHANGE_CURRENCY, newCurrency);
        NotifySuccess(translate("common:pages.settings.setCurrencySuccess"));
    };


    return (

        <>
            <TitleWithBack title={translate("common:pages.settings.setCurrency")} linkTo={"/settings"} />

            {SUPPORTED_CURRENCIES.map((currency: currencyType, index: number) => (
                <Row onClick={() => handleChangeCurrency(currency.ISO)}
                     selected={currentCurrency === currency.ISO} key={index}>
                    <IconsGroup>
                        <Flag code={currency.flag} width={50}
                              fallback={<img alt={"generic"}
                                             src={InternationalFlag} width="50px" />} />
                        <p> {currency.localName}</p>
                    </IconsGroup>
                    <p>{currency.symbol}</p>
                </Row>

            ))}

        </>
    );
};

export default CurrencyPage;