import { ProductRowContainer } from "./productRowWrappers";
import { NumericInput } from "../numberInput";
import { IconDelete } from "../../styles";
import { UnstyledButton } from "../buttonUnstyled";

type ProductRowProps = {
    id: number;
    deleteFunction: (rowId: number) => void;
};

const ProductRow = ({ id, deleteFunction }: ProductRowProps) => {
    return (
        <ProductRowContainer>
            <NumericInput />
            <NumericInput />
            <UnstyledButton onClick={() => deleteFunction(id)}>
                <IconDelete size={30} />
            </UnstyledButton>
        </ProductRowContainer>
    );
};

export { ProductRow };
