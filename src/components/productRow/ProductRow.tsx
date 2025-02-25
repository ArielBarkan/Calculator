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
        <SlideOutMotion>
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

        </SlideOutMotion>
    );
};

export { ProductRow };
