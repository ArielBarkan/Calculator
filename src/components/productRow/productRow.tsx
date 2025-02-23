import { ProductRowContainer } from "./productRowWrappers";
import { NumericInput } from "../numberInput";
import { IconDelete } from "../../styles";
import { UnstyledButton } from "../buttonUnstyled";
import { FadeOutMotion } from "../fadeOutMotion";
import { RankDisplay } from "../rankDisplay";
import { useState } from "react";


export type ProductRowProps = {
    listOrder: number,
    productCount: number
    id: number;
    deleteFunction: (rowId: number) => void;
    quantity?: number;
    price?: number;
    unifiedPrice?: number;
    rank: number;
};

const ProductRow = (props: ProductRowProps) => {

    const { listOrder, productCount, id, deleteFunction, rank } = props;
    const [selected, setSelected] = useState<boolean>(false);

    const handleFocus = () => {
        setSelected(true);
    };
    const handleBlur = () => {
        setSelected(false);
    };
    return (
        <FadeOutMotion>
            <ProductRowContainer {...{ selected }}>
                {listOrder + 1}
                <NumericInput blurFunction={handleBlur} focusFunction={handleFocus} />
                <NumericInput blurFunction={handleBlur} focusFunction={handleFocus} />

                {productCount > 1 && (
                    <UnstyledButton onClick={() => deleteFunction(id)}>
                        <IconDelete size={30} />
                    </UnstyledButton>
                )}

                <RankDisplay {...{ rank }} dimension={30}></RankDisplay>


            </ProductRowContainer>

        </FadeOutMotion>
    );
};

export { ProductRow };
