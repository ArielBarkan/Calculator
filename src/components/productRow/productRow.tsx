import { motion } from "framer-motion";

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
        <motion.div
            initial={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0, margin: 0, padding: 0 }}
            transition={{ duration: 0.3 }}
        >
            <ProductRowContainer>
                {listOrder + 1}
                <NumericInput />
                <NumericInput />
                <UnstyledButton onClick={() => deleteFunction(id)}>
                    <IconDelete size={30} />
                </UnstyledButton>
            </ProductRowContainer>
        </motion.div>
    );
};

export { ProductRow };
