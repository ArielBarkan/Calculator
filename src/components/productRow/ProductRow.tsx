// React and modules imports
import { useState } from "react";

// Custom imports
import { ProductRowContainer, ProductTd } from "./productRow.wrappers";
import { NumericInput } from "../numberInput";
import { IconDelete } from "../../styles";
import { UnstyledButton } from "../buttonUnstyled";
import { RankDisplay } from "../rankDisplay";
import { ProductRowProps } from "../../types";
import { PricePerDisplay } from "../pricePerDisplay";


const ProductRow = (props: ProductRowProps) => {
    const { returnFunction, productCount, id, deleteFunction, rank, price, quantity, unifiedPrice } = props;
    const [selected, setSelected] = useState<boolean>(false);

    const handleFocus = () => {
        setSelected(true);
    };
    const handleBlur = () => {
        setSelected(false);
    };

    const handlePriceUpdated = (price: number) => {

        returnFunction({ id: id, keyToUpdate: "price", updatedValue: price });
    };

    const handleAmountUpdated = (quantity: number) => {

        returnFunction({ id: id, keyToUpdate: "quantity", updatedValue: quantity });
    };
    return (
        <ProductRowContainer {...{ selected }}>
            <ProductTd><NumericInput maxLength={4} blurFunction={handleBlur} focusFunction={handleFocus}
                                     returnFunction={handlePriceUpdated} value={price} /></ProductTd>
            <ProductTd> <NumericInput maxLength={4} blurFunction={handleBlur} focusFunction={handleFocus}
                                      returnFunction={handleAmountUpdated} value={quantity} /></ProductTd>
            <ProductTd><PricePerDisplay priceUnified={unifiedPrice} /></ProductTd>
            <ProductTd> <RankDisplay {...{ rank }} dimension={30}></RankDisplay></ProductTd>

            {productCount > 1 && (
                <ProductTd>
                    <UnstyledButton onClick={() => deleteFunction(id)}>
                        <IconDelete size={30} />
                    </UnstyledButton>
                </ProductTd>
            )}
        </ProductRowContainer>
    );
};

export { ProductRow };
