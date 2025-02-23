import { useTranslation } from "react-i18next";

import { ProductRowContainer, ProductRowsTitle } from "./productRowWrappers";
import { ProductRowProps } from "./productRow";


const ProductRowsHeader = (props: Partial<ProductRowProps>) => {


    const { productCount } = props;
    const { t: translate } = useTranslation("common");

    return (
        <ProductRowContainer>
            <ProductRowsTitle>1</ProductRowsTitle>
            <ProductRowsTitle>{translate("common:pages.calculator.header.price")}</ProductRowsTitle>
            <ProductRowsTitle>{translate("common:pages.calculator.header.quantity")}</ProductRowsTitle>
            <ProductRowsTitle>{translate("common:pages.calculator.header.unifiedPrice")}</ProductRowsTitle>
            <ProductRowsTitle>{translate("common:pages.calculator.header.rank")}</ProductRowsTitle>
            {productCount! > 1 && (
                <ProductRowsTitle>{translate("common:pages.calculator.header.delete")}</ProductRowsTitle>
            )}

        </ProductRowContainer>
    );
};

export { ProductRowsHeader };