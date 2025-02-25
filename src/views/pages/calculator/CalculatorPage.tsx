// React and modules imports
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { AnimatePresence } from "framer-motion";

// Custom imports
import { ProductRow, ProductRowsHeader, CustomButton } from "../../../components";
import { ProductListType } from "../../../types";
import { getRandomNumber } from "../../../utils";


const CalculatorPage = () => {
    const { t: translate } = useTranslation("common");

    const initialRows: number = Number(import.meta.env.VITE_INITIAL_ROWS);
    const maxRows: number = Number(import.meta.env.VITE_MAX_ROWS);
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
            <div style={{ display: "grid", width: "100%" }}>
                <ProductRowsHeader productCount={productsList.length} />
                <AnimatePresence>
                    {productsList.map((product: ProductListType, index: number) => (
                        <ProductRow key={product.id} listOrder={index} id={product.id}
                                    deleteFunction={handleRemoveProduct} productCount={productsList.length}
                                    rank={getRandomNumber(1, 5)} />
                    ))}
                </AnimatePresence>
            </div>
            <CustomButton onClick={handleAddProduct} id="addProduct">
                + {translate("pages.calculator.button.addProduct")}
            </CustomButton>
        </div>
    );
};

export default CalculatorPage;
