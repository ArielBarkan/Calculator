// React and modules imports
import { useTranslation } from "react-i18next";
import { AnimatePresence } from "framer-motion";
import React from "react";

// Custom imports
import { ProductRow, ProductRowsHeader, IconButton, PageHeader } from "../../../components";
import { IconAdd, IconRestart } from "../../../styles";
import { ButtonsLineContainer } from "./calculatorPage.wrappers";
import { useProductHandlers } from "../../../hooks";
import { generateId } from "../../../utils";


const CalculatorPage = () => {
    const { t: translate } = useTranslation("common");


    const initialRows: number = Number(import.meta.env.VITE_INITIAL_ROWS);
    const maxRows: number = Number(import.meta.env.VITE_MAX_ROWS);


    const initialProductsList = Array.from({ length: initialRows }, () => ({ id: generateId() }));

    const {
        productsList,
        setProductsList,
        handleUpdateCurrency,
        handleProductUpdate,
        handleRemoveProduct
    } = useProductHandlers(initialProductsList);

    const handleAddProduct = () => {
        if (productsList.length < maxRows) {
            setProductsList([...productsList, { id: generateId() }]);
        }
    };

    const handleResetPage = () => {
        setProductsList(initialProductsList);
    };
    const productsToAddLeft: number = (maxRows - productsList.length);

    return (
        <>
            <PageHeader title={translate("common:pages.calculator.title")}
                        subTitle={translate("common:pages.calculator.subTitle")} />

            <div style={{ width: "100%" }}>
                <ProductRowsHeader productCount={productsList.length} updateCurrency={handleUpdateCurrency} />
                <AnimatePresence>
                    {productsList.map((product) => (
                        <ProductRow key={product.id}  {...product}
                                    deleteFunction={handleRemoveProduct}
                                    returnFunction={handleProductUpdate}
                                    productCount={productsList.length} />
                    ))}
                </AnimatePresence>
            </div>

            <ButtonsLineContainer>
                <IconButton label={translate("common:pages.calculator.button.addProduct", { left: productsToAddLeft })}
                            returnFunction={handleAddProduct} icon={<IconAdd size={30} color={"white"} />}
                            disabled={productsToAddLeft === 0} />
                <IconButton label={translate("common:pages.calculator.button.reset")} returnFunction={handleResetPage}
                            icon={<IconRestart size={30} color={"white"} />} />
            </ButtonsLineContainer>

        </>
    );
};

export default CalculatorPage;
