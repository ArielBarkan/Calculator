// React and modules imports
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { AnimatePresence } from "framer-motion";

// Custom imports
import { ProductRow, ProductRowsHeader, IconButton, PageHeader } from "../../../components";
import { ProductListType, UpdateProductRowProps } from "../../../types";
import { getCurrencySymbolByISO } from "../../../utils";
import { IconAdd, IconRestart } from "../../../styles";
import { ButtonsLineContainer } from "./calculatorPage.wrappers";


const CalculatorPage = () => {
    const { t: translate } = useTranslation("common");

    const initialRows: number = Number(import.meta.env.VITE_INITIAL_ROWS);
    const maxRows: number = Number(import.meta.env.VITE_MAX_ROWS);
    const generateId = () => Date.now() + Math.random();

    const currencySymbol = getCurrencySymbolByISO();

    const initialProductsList: ProductListType[] = Array.from({ length: initialRows }, () => ({ id: generateId() }));
    // Initialize state with unique objects
    const [productsList, setProductsList] = useState<ProductListType[]>(initialProductsList);

    const handleAddProduct = () => {
        if (productsList.length < maxRows) {
            setProductsList([...productsList, { id: generateId() }]);
        }
    };
    const handleResetPage = () => {
        setProductsList(initialProductsList);
    };

    const handleRemoveProduct = (rowId: number) => {
        setProductsList((prevProducts) => prevProducts.filter((product) => product.id !== rowId));
        handleProductUpdate(({ id: 0, keyToUpdate: "price", updatedValue: 0 }));
    };

    const handleProductUpdate = (props: UpdateProductRowProps) => {
        const { id, keyToUpdate, updatedValue } = props;
        console.log(id, keyToUpdate, updatedValue);
        setProductsList((prevProducts) => {
            // ✅ Update the product with the new value
            const updatedProducts = prevProducts.map((product) => {
                if (product.id === id) {
                    const updatedProduct = { ...product, [keyToUpdate]: updatedValue };


                    // ✅ If both price and quantity exist, calculate unifiedPrice
                    if (updatedProduct.price && updatedProduct.quantity) {
                        updatedProduct.unifiedPrice = Number((updatedProduct.price / updatedProduct.quantity).toFixed(4));
                    } else {
                        delete updatedProduct.unifiedPrice;
                        delete updatedProduct.rank;
                    }

                    return updatedProduct;
                }
                return product;
            });

            // ✅ Sort products by `unifiedPrice` (lowest first)
            const sortedProducts = [...updatedProducts]
                .filter((p) => p.unifiedPrice !== undefined) // Ignore products without unifiedPrice
                .sort((a, b) => a.unifiedPrice! - b.unifiedPrice!);

            // ✅ Assign ranks correctly
            let currentRank = 1;
            let previousUnifiedPrice: number | undefined;

            const rankedProducts = updatedProducts.map((product) => {
                const sortedIndex = sortedProducts.findIndex((p) => p.id === product.id);

                if (sortedIndex !== -1) {
                    const sortedProduct = sortedProducts[sortedIndex];

                    // ✅ If the `unifiedPrice` is different, increase rank
                    if (previousUnifiedPrice !== sortedProduct.unifiedPrice) {
                        currentRank = sortedIndex + 1; // Rank is 1-based, so we use index + 1
                        previousUnifiedPrice = sortedProduct.unifiedPrice;
                    }


                    return { ...product, rank: currentRank };
                }

                return product;
            });

            return rankedProducts;
        });
    };


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
                                    price={product.price}
                                    quantity={product.quantity}
                                    unifiedPrice={product.unifiedPrice}
                                    deleteFunction={handleRemoveProduct}
                                    returnFunction={handleProductUpdate}
                                    productCount={productsList.length}
                                    rank={product.rank} />
                    ))}
                </AnimatePresence>
            </div>
            <ButtonsLineContainer>
                <IconButton
                    label={translate("common:pages.calculator.button.addProduct", { left: productsToAddLeft })}
                    returnFunction={handleAddProduct}
                    icon={<IconAdd size={30} color={"white"} />}
                    disabled={productsToAddLeft === 0}

                />
                <IconButton
                    label={translate("common:pages.calculator.button.reset")}
                    returnFunction={handleResetPage}
                    icon={<IconRestart size={30} color={"white"} />}
                    disabled={false}
                />
            </ButtonsLineContainer>
        </>
    );
};

export default CalculatorPage;
