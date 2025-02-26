// React and modules imports
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { AnimatePresence } from "framer-motion";

// Custom imports
import { ProductRow, ProductRowsHeader, IconButton, PageHeader } from "../../../components";
import { ProductListType } from "../../../types";
import { getCurrencySymbolByISO, getRandomNumber } from "../../../utils";
import { IconAdd } from "../../../styles";


const CalculatorPage = () => {
    const { t: translate } = useTranslation("common");

    const initialRows: number = Number(import.meta.env.VITE_INITIAL_ROWS);
    const maxRows: number = Number(import.meta.env.VITE_MAX_ROWS);
    const generateId = () => Date.now() + Math.random();

    const currencySymbol = getCurrencySymbolByISO();

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

    useEffect(() => {
        console.log(productsList);
    }, [productsList]);
    const productsToAddLeft: number = (maxRows - productsList.length);
    return (
        <>
            <PageHeader title={translate("common:pages.calculator.title")}
                        subTitle={translate("common:pages.calculator.subTitle")} />

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
            <IconButton
                label={translate("common:pages.calculator.button.addProduct", { left: productsToAddLeft })}
                returnFunction={handleAddProduct}
                icon={<IconAdd size={30} color={"white"} />}
                disabled={productsToAddLeft === 0}

            />

        </>
    );
};

export default CalculatorPage;
