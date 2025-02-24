import { useTranslation } from "react-i18next";

import { ProductRowContainer, ProductRowsTitle } from "./productRowWrappers";
import { ProductRowProps } from "./productRow";
import { SegmentedControl, CustomModal, UnstyledButton } from "../index";

import { useState } from "react";

//
const ProductRowsHeader = (props: Partial<ProductRowProps>) => {


    const { productCount } = props;
    const { t: translate } = useTranslation("common");
    const [isModalOpen, setModalOpen] = useState(false);
    return (
        <>
            <ProductRowContainer>
                <ProductRowsTitle>{translate("common:pages.calculator.header.price")}</ProductRowsTitle>
                <ProductRowsTitle><UnstyledButton
                    onClick={() => setModalOpen(true)}>{translate("common:pages.calculator.header.quantity")}&#9660;</UnstyledButton></ProductRowsTitle>
                <ProductRowsTitle>{translate("common:pages.calculator.header.unifiedPrice")}</ProductRowsTitle>
                <ProductRowsTitle>{translate("common:pages.calculator.header.rank")}</ProductRowsTitle>
                {productCount! > 1 && (
                    <ProductRowsTitle />
                )}
            </ProductRowContainer>
            <CustomModal isOpen={isModalOpen} onClose={() => setModalOpen(false)}
                         title={translate("common:pages.calculator.modal.title")}>
                <span onClick={() => setModalOpen(false)}><SegmentedControl /></span>
            </CustomModal>
        </>
    );
};

export { ProductRowsHeader };