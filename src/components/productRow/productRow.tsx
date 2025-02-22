import { ProductRowContainer } from "./productRowWrappers";
import { NumericInput } from "../numberInput";


const ProductRow = () => {

    return (
        <ProductRowContainer>
            <NumericInput />
            <NumericInput />
        </ProductRowContainer>
    );
};

export { ProductRow };