// React and modules imports
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { AnimatePresence } from "framer-motion";

// Custom imports
import { ProductRow, ProductRowsHeader, IconButton, PageHeader } from "../../../components";
import { ProductListType, UpdateProductRowProps } from "../../../types";
import { CalculateStats } from "../../../utils";
import { IconAdd, IconRestart } from "../../../styles";
import { ButtonsLineContainer } from "./calculatorPage.wrappers";
import { localStorageGetSelectedMeasurement } from "../../../services";
import { MEASUREMENT_ENUMS } from "../../../enums";


const CalculatorPage = () => {
    const { t: translate } = useTranslation("common");

    const initialRows: number = Number(import.meta.env.VITE_INITIAL_ROWS);
    const maxRows: number = Number(import.meta.env.VITE_MAX_ROWS);
    const generateId = () => Date.now() + Math.random();


    const initialProductsList: ProductListType[] = Array.from({ length: initialRows }, () => ({ id: generateId() }));
    // Initialize state with unique objects
    const [productsList, setProductsList] = useState<ProductListType[]>(initialProductsList);

    const handleAddProduct = () => {
        if (productsList.length < maxRows) {
            setProductsList([...productsList, { id: generateId() }]);
        }
    };
    const handleResetPage = () => {
        CalculateStats(productsList);
        setProductsList(initialProductsList);
    };

    const handleRemoveProduct = (rowId: number) => {
        setProductsList((prevProducts) => prevProducts.filter((product) => product.id !== rowId));
        handleProductUpdate(({ id: 0, keyToUpdate: "price", updatedValue: 0 }));
    };

    const handleUpdateCurrency = () => {
        const selectedMeasurement: MEASUREMENT_ENUMS = localStorageGetSelectedMeasurement();

        setProductsList((prevProducts) => {
            // Update products with recalculated unifiedPrice
            const updatedProducts = prevProducts.map((product) => {
                if (product.price && product.quantity) {
                    let calculatedUnifiedPrice: number;

                    switch (selectedMeasurement) {
                        case MEASUREMENT_ENUMS.quantity:
                            console.log("Calculate quantity");
                            calculatedUnifiedPrice = product.price / product.quantity;
                            break;
                        case MEASUREMENT_ENUMS.liquid:
                        case MEASUREMENT_ENUMS.weight:
                        default:
                            console.log("Calculate liquid/weight");
                            calculatedUnifiedPrice = (product.price / product.quantity) * 100;
                            break;
                    }

                    // Apply rounding only for display
                    const formattedUnifiedPrice = parseFloat(calculatedUnifiedPrice.toFixed(2));

                    return { ...product, unifiedPrice: formattedUnifiedPrice };
                }

                return product; // Keep unchanged products
            });

            // Sort products based on full precision (before rounding)
            const sortedProducts = [...updatedProducts]
                .filter((p) => p.unifiedPrice !== undefined) // Ignore products without unifiedPrice
                .sort((a, b) => {
                    const priceA = (a.price! / a.quantity!) * (selectedMeasurement === MEASUREMENT_ENUMS.quantity ? 1 : 100);
                    const priceB = (b.price! / b.quantity!) * (selectedMeasurement === MEASUREMENT_ENUMS.quantity ? 1 : 100);
                    return priceA - priceB; // Sorting based on full precision
                });

            // Assign ranks based on sorted order
            let currentRank = 1;
            let previousFullPrecisionPrice: number | undefined;

            const rankedProducts = updatedProducts.map((product) => {
                const sortedIndex = sortedProducts.findIndex((p) => p.id === product.id);

                if (sortedIndex !== -1) {
                    const sortedProduct = sortedProducts[sortedIndex];
                    const fullPrecisionPrice = (sortedProduct.price! / sortedProduct.quantity!) *
                        (selectedMeasurement === MEASUREMENT_ENUMS.quantity ? 1 : 100);

                    if (previousFullPrecisionPrice !== fullPrecisionPrice) {
                        currentRank = sortedIndex + 1; // Assign a new rank only if price is different
                        previousFullPrecisionPrice = fullPrecisionPrice;
                    }

                    return { ...product, rank: currentRank };
                }

                return product;
            });

            return rankedProducts;
        });
    };


    const handleProductUpdate = (props: UpdateProductRowProps) => {
        const { id, keyToUpdate, updatedValue } = props;
        console.log(id, keyToUpdate, updatedValue);
        const selectedMeasurement: MEASUREMENT_ENUMS = localStorageGetSelectedMeasurement();
        setProductsList((prevProducts) => {
            // Update the product with the new value
            const updatedProducts = prevProducts.map((product) => {
                if (product.id === id) {
                    const updatedProduct = { ...product, [keyToUpdate]: updatedValue };

                    if (updatedProduct.price && updatedProduct.quantity) {

                        let calculatedUnifiedPrice: number;

                        switch (selectedMeasurement) {
                            case MEASUREMENT_ENUMS.quantity:
                                console.log("Calculate quantity");
                                calculatedUnifiedPrice = updatedProduct.price / updatedProduct.quantity;
                                break;
                            case MEASUREMENT_ENUMS.liquid:
                            case MEASUREMENT_ENUMS.weight:
                            default:
                                console.log("Calculate liquid/weight");
                                calculatedUnifiedPrice = (updatedProduct.price / updatedProduct.quantity) * 100;
                                break;
                        }

                        // Apply rounding only for display purposes
                        updatedProduct.unifiedPrice = parseFloat(calculatedUnifiedPrice.toFixed(2));
                    } else {
                        delete updatedProduct.unifiedPrice;
                        delete updatedProduct.rank;
                    }

                    return updatedProduct;
                }
                return product;
            });

            // Sort products based on full precision (before rounding)
            const sortedProducts = [...updatedProducts]
                .filter((p) => p.unifiedPrice !== undefined) // Ignore products without unifiedPrice
                .sort((a, b) => {
                    const priceA = (a.price! / a.quantity!) * (selectedMeasurement === MEASUREMENT_ENUMS.quantity ? 1 : 100);
                    const priceB = (b.price! / b.quantity!) * (selectedMeasurement === MEASUREMENT_ENUMS.quantity ? 1 : 100);
                    return priceA - priceB; // Sorting based on full precision
                });

            // Assign ranks based on sorted order
            let currentRank = 1;
            let previousFullPrecisionPrice: number | undefined;

            const rankedProducts = updatedProducts.map((product) => {
                const sortedIndex = sortedProducts.findIndex((p) => p.id === product.id);

                if (sortedIndex !== -1) {
                    const sortedProduct = sortedProducts[sortedIndex];
                    const fullPrecisionPrice = (sortedProduct.price! / sortedProduct.quantity!) *
                        (selectedMeasurement === MEASUREMENT_ENUMS.quantity ? 1 : 100);

                    if (previousFullPrecisionPrice !== fullPrecisionPrice) {
                        currentRank = sortedIndex + 1; // Assign a new rank only if price is different
                        previousFullPrecisionPrice = fullPrecisionPrice;
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
                <ProductRowsHeader productCount={productsList.length} updateCurrency={handleUpdateCurrency} />
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
