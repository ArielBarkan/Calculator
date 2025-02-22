// Modules imports
import { useTranslation } from "react-i18next";
import { ProductRow } from "../../../components/productRow";
import { useState } from "react";
import { NumericKeyboard } from "../../../components/numericKeyboard";


const CalculatorPage = () => {
    const { t: translate } = useTranslation("common");

    const initialRows: number = Number(import.meta.env.VITE_INITIAL_ROWS);
    const maxRows: number = Number(import.meta.env.VITE_MAX_ROWS);

    const [rows, setRows] = useState<number>(initialRows);

    return (
        <p style={{ padding: "5rem 0 0" }}>
            {translate("pages.calculator.title")}
            <NumericKeyboard />
            {Array.from({ length: maxRows }).map((_, index) => (
                <ProductRow key={index} />
            ))}


        </p>
    );
};

export default CalculatorPage;