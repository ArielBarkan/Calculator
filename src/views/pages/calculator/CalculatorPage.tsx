// Modules imports
import { useTranslation } from "react-i18next";


const CalculatorPage = () => {
    const { t: translate } = useTranslation("common");


    return (
        <p style={{ padding: "5rem 0 0" }}>
            {translate("pages.calculator.title")}
        </p>
    );
};

export default CalculatorPage;