import { ProductRowContainer } from "./productRowWrappers";
import { NumericInput } from "../numberInput";
import { IconDelete } from "../../styles";
import { UnstyledButton } from "../buttonUnstyled";

type ProductRowProps = {
    listOrder: number,
    id: number;
    deleteFunction: (rowId: number) => void;
};

const ProductRow = (props: ProductRowProps) => {
    const { listOrder, id, deleteFunction } = props;
    return (
        <ProductRowContainer>
            {listOrder + 1}
            <NumericInput />
            <NumericInput />
            <UnstyledButton onClick={() => deleteFunction(id)}>
                <IconDelete size={30} />
            </UnstyledButton>
        </ProductRowContainer>
    );
};

export { ProductRow };
