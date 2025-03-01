// React and modules imports
import { useTranslation } from "react-i18next";
import { AnimatePresence } from "framer-motion";

// Custom imports
import { ProductRow, ProductRowsHeader, IconButton, PageHeader, CustomModal } from "../../../components";
import { IconAdd, IconRestart } from "../../../styles";
import { ButtonsLineContainer } from "./calculatorPage.wrappers";
import { useFirstTimeVisitor, useProductHandlers } from "../../../hooks";
import { generateId } from "../../../utils";

import React from "react";
import { FirstTimeVisitorModalContent } from "../../../components/firstTimeVisitorModalContent";

const CalculatorPage = () => {
    const { t: translate } = useTranslation("common");
    const { isFirstVisit, setIsFirstVisit } = useFirstTimeVisitor(); // ✅ Detect first-time visitors

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

            <div style={{ display: "grid", width: "100%" }}>
                <ProductRowsHeader productCount={productsList.length} updateCurrency={handleUpdateCurrency} />
                <AnimatePresence>
                    {productsList.map((product, index) => (
                        <ProductRow key={product.id} listOrder={index} {...product}
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

            {isFirstVisit && (
                <CustomModal
                    isOpen={isFirstVisit}
                    title={translate("common:firstTimeModal.title")}
                    width="80%" // Set custom width
                    height="80%" // Set custom height
                    position="top" // Position modal on the right
                    onClose={() => {
                        setIsFirstVisit(false);
                    }}
                    closeButtonText={translate("common:firstTimeModal.closeButton")}
                >
                    <FirstTimeVisitorModalContent />
                </CustomModal>
            )}
        </>
    );
};

export default CalculatorPage;
