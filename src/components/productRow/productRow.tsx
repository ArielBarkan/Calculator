import { ProductRowContainer } from "./productRowWrappers";
import { NumberInput } from "../numberInput";


const ProductRow = () => {

    return (
        <ProductRowContainer>
            <NumberInput />
            <NumberInput />
        </ProductRowContainer>
    );
};

export { ProductRow };