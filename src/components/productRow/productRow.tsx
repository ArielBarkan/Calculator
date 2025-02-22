import { ProductRowContainer } from "./productRowWrappers";
import { NumericInput } from "../numberInput";
import { IconDelete } from "../../styles";
import { UnstyledButton } from "../buttonUnstyled";
import { useState } from "react";

type ProductRowProps = {
    listOrder: number,
    id: number;
    deleteFunction: (rowId: number) => void;
};

const ProductRow = (props: ProductRowProps) => {
    const [isFading, setIsFading] = useState(false);

    const { listOrder, id, deleteFunction } = props;

    const handleRemoveRow = () => {
        setIsFading(true); // Start fade-out animation
        setTimeout(() => {
            deleteFunction(id); // Remove row after animation completes
        }, 300); // Match CSS transition duration
    };

    return (
        <ProductRowContainer className={isFading ? "fade-out" : ""}>
            {listOrder + 1}
            <NumericInput />
            <NumericInput />
            <UnstyledButton onClick={handleRemoveRow}>
                <IconDelete size={30} />
            </UnstyledButton>
        </ProductRowContainer>
    );
};

export { ProductRow };
