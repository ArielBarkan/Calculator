// Modules imports
import { useTranslation } from "react-i18next";

// Custom imports
import { Row } from "../SettingWrappers";
import { SelectComponent } from "../../../components/select";
import { selectType } from "../../../types";
import { convertCurrenciesToSelect } from "../../../utils";
import { currenciesArray } from "../../../data";
import { TitleWithBack } from "../../../components/titleWithBack";

const Currency = () => {
    const { t: translate } = useTranslation("common");

    const currenciesOptions: selectType[] = convertCurrenciesToSelect(currenciesArray);


    const handleChangeCurrency = (newCurrency: string) => {
        console.log(newCurrency);
        // TODO : set globally
    };
    return (

        <>
            <TitleWithBack title={translate("common:pages.settings.setCurrency")} linkTo={"/settings"} />
            <Row>
                {translate("common:pages.settings.setCurrency")}
                <SelectComponent options={currenciesOptions} returnFunction={handleChangeCurrency}
                />
            </Row>
        </>
    );
};

export { Currency };