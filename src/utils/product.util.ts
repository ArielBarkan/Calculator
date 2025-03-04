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

    // Assign ranks ensuring the same price gets the same rank
    let currentRank = 1;
    let previousFullPrecisionPrice: number | undefined;

    sortedProducts.forEach((product, index) => {
        const fullPrecisionPrice = (product.price! / product.quantity!) *
            (measurement === MEASUREMENT_ENUMS.quantity ? 1 : 100);

        if (previousFullPrecisionPrice !== undefined && previousFullPrecisionPrice !== fullPrecisionPrice) {
            currentRank = index + 1; // Only increase rank if price is different
        }

        product.rank = currentRank;
        previousFullPrecisionPrice = fullPrecisionPrice;
    });

    // Map ranks back to original products array
    return products.map((product) => {
        const rankedProduct = sortedProducts.find((p) => p.id === product.id);
        return rankedProduct ? { ...product, rank: rankedProduct.rank } : product;
    });
};

const generateId = (): string => crypto.randomUUID();

export { calculateUnifiedPrice, sortAndRankProducts, generateId };