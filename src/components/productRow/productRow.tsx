import { ProductRowContainer } from "./productRowWrappers";
import { NumericInput } from "../numberInput";
import { IconDelete } from "../../styles";
import { UnstyledButton } from "../buttonUnstyled";
import { FadeOutMotion } from "../fadeOutMotion";
import { Medal } from "../medal";


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

                <UnstyledButton>
                    <Medal rank={rank} size={50} />
                </UnstyledButton>
            </ProductRowContainer>

        </FadeOutMotion>
    );
};

export { ProductRow };
