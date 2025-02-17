// Modules imports
import { useTranslation } from "react-i18next";


const CalculatorPage = () => {
    const { t: translate } = useTranslation("common");


    return (
        <p>
            {translate("pages.calculator.title")}
        </p>
    );
};

export default CalculatorPage;