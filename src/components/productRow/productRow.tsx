import { ProductRowContainer } from "./productRowWrappers";
import { NumericInput } from "../numberInput";
import { IconDelete } from "../../styles";
import { UnstyledButton } from "../buttonUnstyled";
import { FadeOutMotion } from "../fadeOutMotion";


type ProductRowProps = {
    listOrder: number,
    productCount: number
    id: number;
    deleteFunction: (rowId: number) => void;
};

const ProductRow = (props: ProductRowProps) => {

    const { listOrder, productCount, id, deleteFunction } = props;


    return (
        <FadeOutMotion>
            <ProductRowContainer>
                {listOrder + 1}
                <NumericInput />
                <NumericInput />
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
