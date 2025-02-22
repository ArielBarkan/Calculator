// Modules imports
import { useTranslation } from "react-i18next";
import { ProductRow } from "../../../components/productRow";
import { useState } from "react";
import { ProductListType } from "../../../types";
import { CustomButton } from "../../../components/customButton";

const CalculatorPage = () => {
    const { t: translate } = useTranslation("common");

    const initialRows: number = 1;
    const maxRows: number = 5;

    const [rowsCount, setRowsCount] = useState<number>(initialRows);
    const [productsList, setProductsList] = useState<ProductListType[]>(Array(initialRows).fill({}));

    const handleAddProduct = () => {
        if (rowsCount < maxRows) {  // Fix condition
            setProductsList([...productsList, {}]);
            setRowsCount(rowsCount + 1);
        }
    };

    return (
        <div style={{ padding: "5rem 0 0" }}>
            <p>{translate("pages.calculator.title")}</p>

            {productsList.map((product: ProductListType, index: number) => (
                <ProductRow key={index} />
            ))}

            <CustomButton onClick={handleAddProduct} id="addProduct">
                + {translate("pages.calculator.button.addProduct")}
            </CustomButton>
        </div>
    );
};

export default CalculatorPage;
