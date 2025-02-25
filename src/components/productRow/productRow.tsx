import { ProductRowContainer } from "./productRowWrappers";
import { NumericInput } from "../numberInput";
import { IconDelete } from "../../styles";
import { UnstyledButton } from "../buttonUnstyled";
import { FadeOutMotion } from "../animations";
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
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
                <NumericInput maxLength={5} blurFunction={handleBlur} focusFunction={handleFocus} />
                <NumericInput maxLength={4} blurFunction={handleBlur} focusFunction={handleFocus} />
                <p>58.555</p>
                <RankDisplay {...{ rank }} dimension={30}></RankDisplay>
                {productCount > 1 && (
                    <UnstyledButton onClick={() => deleteFunction(id)}>
                        <IconDelete size={30} />
                    </UnstyledButton>
                )}
            </ProductRowContainer>

        </FadeOutMotion>
    );
};

export { ProductRow };
