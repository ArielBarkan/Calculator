import { ProductListType } from "../types";
import { GOOGLE_ANALYTICS } from "./analytics.util";

const CalculateStats = (productsList: ProductListType[]) => {
    if (productsList.length === 0) {
        return {
            priceDifference: 0,
            percentageDifference: 0,
            totalPrice: 0,
            productCount: 0
        };
    }

    const prices = productsList.map((p) => p.unifiedPrice || 0);
    const minPrice = Math?.min(...prices);
    const maxPrice = Math.max(...prices);

    const priceDifference = maxPrice - minPrice;
    const percentageDifference = minPrice > 0 ? (priceDifference / minPrice) * 100 : 0;

    const totalPrice = productsList.reduce((sum, product) => sum + product.price!, 0);
    const productCount = productsList.length;
    const stats = { priceDifference, percentageDifference, totalPrice, productCount };
    GOOGLE_ANALYTICS.sendProductStatsToGA(stats);
};

export { CalculateStats };
