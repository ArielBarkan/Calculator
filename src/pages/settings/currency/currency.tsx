// Modules imports
import { useTranslation } from "react-i18next";

// Custom imports
import { Row } from "../SettingWrappers";
import { SelectComponent } from "../../../components/select";
import { selectType } from "../../../types";
import { convertCurrenciesToSelect } from "../../../utils";
import { currenciesArray } from "../../../data";
import { Link } from "react-router-dom";

const Currency = () => {
    const { t: translate } = useTranslation("common");

    const currenciesOptions: selectType[] = convertCurrenciesToSelect(currenciesArray);


    const handleChangeCurrency = (newCurrency: string) => {
        console.log(newCurrency);
        // TODO : set globally
    };
    return (

        <>
            <Row>
                {translate("common:pages.settings.setLanguage")}
                <Link to="/settings">Back</Link>
            </Row>
            <Row>
                {translate("common:pages.settings.setCurrency")}
                <SelectComponent options={currenciesOptions} returnFunction={handleChangeCurrency}
                />
            </Row>
        </>
    );
};

export { Currency };