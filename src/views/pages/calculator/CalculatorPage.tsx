// Modules imports
import { useTranslation } from "react-i18next";
import { ProductRow } from "../../../components/productRow";


const CalculatorPage = () => {
    const { t: translate } = useTranslation("common");


    return (
        <p style={{ padding: "5rem 0 0" }}>
            {translate("pages.calculator.title")}
            <ProductRow></ProductRow>
            <ProductRow></ProductRow>
            <ProductRow></ProductRow>
        </p>
    );
};

export default CalculatorPage;