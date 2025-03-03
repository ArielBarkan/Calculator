// React and modules imports
import { useState } from "react";

// Custom imports
import { ProductRowContainer, ProductRowsItem } from "./productRow.wrappers";
import { NumericInput } from "../numberInput";
import { IconDelete } from "../../styles";
import { UnstyledButton } from "../buttonUnstyled";
import { SlideOutMotion } from "../animations";
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
                <ProductRowsItem width={90}>

                    <NumericInput maxLength={4} blurFunction={handleBlur} focusFunction={handleFocus}
                                  returnFunction={handlePriceUpdated} value={price} />

                </ProductRowsItem>
                <ProductRowsItem width={90}>
                    <NumericInput maxLength={4} blurFunction={handleBlur} focusFunction={handleFocus}
                                  returnFunction={handleAmountUpdated} value={quantity} />
                </ProductRowsItem>
                <ProductRowsItem width={90}>
                    <PricePerDisplay priceUnified={unifiedPrice} />
                </ProductRowsItem>
                <ProductRowsItem>
                    <RankDisplay {...{ rank }} dimension={30}></RankDisplay>
                </ProductRowsItem>
                {productCount > 1 && (
                    <ProductRowsItem>
                        <UnstyledButton onClick={() => deleteFunction(id)}>
                            <IconDelete size={30} />
                        </UnstyledButton>
                    </ProductRowsItem>
                )}
            </ProductRowContainer>

        </SlideOutMotion>
    );
};

export { ProductRow };
