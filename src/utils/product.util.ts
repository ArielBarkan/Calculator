// utils/productUtils.ts
import { MEASUREMENT_ENUMS } from "../enums";
import { ProductListType } from "../types";

/**
 * Calculate the unified price based on measurement type.
 */
const calculateUnifiedPrice = (price: number, quantity: number, measurement: MEASUREMENT_ENUMS): number => {
    let calculatedUnifiedPrice: number;

    switch (measurement) {
        case MEASUREMENT_ENUMS.quantity:
            calculatedUnifiedPrice = price / quantity;
            break;
        case MEASUREMENT_ENUMS.liquid:
        case MEASUREMENT_ENUMS.weight:
        default:
            calculatedUnifiedPrice = (price / quantity) * 100;
            break;
    }

    return parseFloat(calculatedUnifiedPrice.toFixed(2));
};

/**
 * Sorts and ranks products based on their full precision unified price.
 */
const sortAndRankProducts = (products: ProductListType[], measurement: MEASUREMENT_ENUMS): ProductListType[] => {
    // Sort products based on full precision before rounding
    const sortedProducts = [...products]
        .filter((p) => p.unifiedPrice !== undefined) // Ignore products without unifiedPrice
        .sort((a, b) => {
            const priceA = (a.price! / a.quantity!) * (measurement === MEASUREMENT_ENUMS.quantity ? 1 : 100);
            const priceB = (b.price! / b.quantity!) * (measurement === MEASUREMENT_ENUMS.quantity ? 1 : 100);
            return priceA - priceB;
        });

    // Assign ranks based on sorted order
    let currentRank = 1;
    let previousFullPrecisionPrice: number | undefined;

    return products.map((product) => {
        const sortedIndex = sortedProducts.findIndex((p) => p.id === product.id);

        if (sortedIndex !== -1) {
            const sortedProduct = sortedProducts[sortedIndex];
            const fullPrecisionPrice = (sortedProduct.price! / sortedProduct.quantity!) *
                (measurement === MEASUREMENT_ENUMS.quantity ? 1 : 100);

            if (previousFullPrecisionPrice !== fullPrecisionPrice) {
                currentRank = sortedIndex + 1;
                previousFullPrecisionPrice = fullPrecisionPrice;
            }

            return { ...product, rank: currentRank };
        }

        return product;
    });
};

export { calculateUnifiedPrice, sortAndRankProducts };