// hooks/useProductHandlers.ts
import { useState } from "react";
import { ProductListType, UpdateProductRowProps } from "../types";
import { calculateUnifiedPrice, sortAndRankProducts } from "../utils";
import { localStorageGetSelectedMeasurement } from "../services";
import { MEASUREMENT_ENUMS } from "../enums";

const useProductHandlers = (initialProductsList: ProductListType[]) => {
    const [productsList, setProductsList] = useState<ProductListType[]>(initialProductsList);

    /**
     * Handles updating the unified price of all products when the currency changes.
     */
    const handleUpdateCurrency = () => {
        const selectedMeasurement: MEASUREMENT_ENUMS = localStorageGetSelectedMeasurement();

        setProductsList((prevProducts) => {
            const updatedProducts = prevProducts.map((product) => {
                if (product.price && product.quantity) {
                    return {
                        ...product,
                        unifiedPrice: calculateUnifiedPrice(product.price, product.quantity, selectedMeasurement)
                    };
                }
                return product;
            });

            return sortAndRankProducts(updatedProducts, selectedMeasurement);
        });
    };

    /**
     * Handles updating a specific product row when a value changes.
     */
    const handleProductUpdate = (props: UpdateProductRowProps) => {
        const { id, keyToUpdate, updatedValue } = props;
        const selectedMeasurement: MEASUREMENT_ENUMS = localStorageGetSelectedMeasurement();

        setProductsList((prevProducts) => {
            const updatedProducts = prevProducts.map((product) => {
                if (product.id === id) {
                    const updatedProduct = { ...product, [keyToUpdate]: updatedValue };

                    if (updatedProduct.price && updatedProduct.quantity) {
                        updatedProduct.unifiedPrice = calculateUnifiedPrice(updatedProduct.price, updatedProduct.quantity, selectedMeasurement);
                    } else {
                        delete updatedProduct.unifiedPrice;
                        delete updatedProduct.rank;
                    }

                    return updatedProduct;
                }
                return product;
            });

            return sortAndRankProducts(updatedProducts, selectedMeasurement);
        });
    };
    /**
     * Handles removing a product row from the list.
     */
    const handleRemoveProduct = (rowId: number) => {
        setProductsList((prevProducts) => {
            const updatedProducts = prevProducts.filter((product) => product.id !== rowId);
            return sortAndRankProducts(updatedProducts, localStorageGetSelectedMeasurement());
        });
    };
    return {
        productsList,
        setProductsList,
        handleUpdateCurrency,
        handleProductUpdate,
        handleRemoveProduct
    };
};
export { useProductHandlers };