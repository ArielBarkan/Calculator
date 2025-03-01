// React and modules imports
import { useState } from "react";

// Custom imports
import { ProductRowContainer } from "./productRow.wrappers";
import { NumericInput } from "../numberInput";
import { IconDelete } from "../../styles";
import { UnstyledButton } from "../buttonUnstyled";
import { SlideOutMotion } from "../animations";
import { RankDisplay } from "../rankDisplay";
import { ProductRowProps } from "../../types";
import { PricePerDisplay } from "../pricePerDisplay";


const ProductRow = (props: ProductRowProps) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { listOrder, returnFunction, productCount, id, deleteFunction, rank, price, quantity, unifiedPrice } = props;
    const [selected, setSelected] = useState<boolean>(false);

    const handleFocus = () => {
        setSelected(true);
    };
    const handleBlur = () => {
        setSelected(false);
    };

    const handlePriceUpdated = (price: number) => {
        console.log("handlePriceUpdated", price);
        returnFunction({ id: id, keyToUpdate: "price", updatedValue: price });
    };

    const handleAmountUpdated = (quantity: number) => {
        console.log("handleAmountUpdated", quantity);
        returnFunction({ id: id, keyToUpdate: "quantity", updatedValue: quantity });
    };
    return (
        <SlideOutMotion>
            <ProductRowContainer {...{ selected }}>
                <NumericInput maxLength={4} blurFunction={handleBlur} focusFunction={handleFocus}
                              returnFunction={handlePriceUpdated} value={price} />
                <NumericInput maxLength={4} blurFunction={handleBlur} focusFunction={handleFocus}
                              returnFunction={handleAmountUpdated} value={quantity} />
                <PricePerDisplay priceUnified={unifiedPrice} />
                <RankDisplay {...{ rank }} dimension={30}></RankDisplay>
                {productCount > 1 && (
                    <UnstyledButton onClick={() => deleteFunction(id)}>
                        <IconDelete size={30} />
                    </UnstyledButton>
                )}
            </ProductRowContainer>

        </SlideOutMotion>
    );
};

export { ProductRow };
