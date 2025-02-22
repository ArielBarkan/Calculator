import { useTranslation } from "react-i18next";
import { ProductRow } from "../../../components/productRow";
import { useState } from "react";
import { ProductListType } from "../../../types";
import { CustomButton } from "../../../components/customButton";

const CalculatorPage = () => {
    const { t: translate } = useTranslation("common");

    const initialRows: number = 1;
    const maxRows: number = 5;

    // Ensure each row has a unique ID
    const generateId = () => Date.now() + Math.random();

    // Initialize state with unique objects
    const [productsList, setProductsList] = useState<ProductListType[]>(
        Array.from({ length: initialRows }, () => ({ id: generateId() }))
    );

    const handleAddProduct = () => {
        if (productsList.length < maxRows) {
            setProductsList([...productsList, { id: generateId() }]);
        }
    };

    const handleRemoveProduct = (rowId: number) => {
        setProductsList((prevProducts) => prevProducts.filter((product) => product.id !== rowId));
    };

    return (
        <div style={{ padding: "5rem 0 0" }}>
            <p>{translate("pages.calculator.title")}</p>

            {productsList.map((product) => (
                <ProductRow key={product.id} id={product.id} deleteFunction={handleRemoveProduct} />
            ))}

            <CustomButton onClick={handleAddProduct} id="addProduct">
                + {translate("pages.calculator.button.addProduct")}
            </CustomButton>
        </div>
    );
};

export default CalculatorPage;
