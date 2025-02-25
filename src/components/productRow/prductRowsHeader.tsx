import { useTranslation, Trans } from "react-i18next";

import { ProductRowContainer, ProductRowsTitle } from "./productRowWrappers";
import { ProductRowProps } from "./productRow";
import { CustomModal, UnstyledButton } from "../";

import { useEffect, useState } from "react";
import { SwitchMeasurement } from "../switchMeasurement";
import { MEASUREMENT_ENUMS } from "../../enums";
import { localStorageGetSelectedMeasurement } from "../../services";

//
const ProductRowsHeader = (props: Partial<ProductRowProps>) => {


    const { productCount } = props;
    const { t: translate } = useTranslation("common");
    const [selectedMeasurement, setSelectedMeasurement] = useState<MEASUREMENT_ENUMS>(localStorageGetSelectedMeasurement());
    const [isModalOpen, setModalOpen] = useState(false);
    const [measurementLabel, setMeasurementLabel] = useState<string>("Measurement");

    const handleChangeMeasurement = (measurement: MEASUREMENT_ENUMS) => {
        setSelectedMeasurement(measurement);
    };


    useEffect(() => {
        let label: string;
        switch (selectedMeasurement) {
            case MEASUREMENT_ENUMS.weight:
            default:
                label = translate("common:pages.calculator.measurement.weight");
                break;
            case MEASUREMENT_ENUMS.liquid:
                label = translate("common:pages.calculator.measurement.liquid");
                break;
            case MEASUREMENT_ENUMS.quantity:
                label = translate("common:pages.calculator.header.quantity");
                break;
        }

        setMeasurementLabel(label);

    }, [translate, selectedMeasurement]);
    //<p dangerouslySetInnerHTML={{ __html: t("welcome") }} />

    return (
        <>
            <ProductRowContainer>
                <ProductRowsTitle>{translate("common:pages.calculator.header.price")}</ProductRowsTitle>
                <ProductRowsTitle><UnstyledButton
                    onClick={() => setModalOpen(true)}>{measurementLabel}&#9660;</UnstyledButton></ProductRowsTitle>
                <ProductRowsTitle>
                    <Trans i18nKey="common:pages.calculator.header.unifiedPrice" /> 100גרם
                </ProductRowsTitle>
                <ProductRowsTitle>{translate("common:pages.calculator.header.rank")}</ProductRowsTitle>
                {productCount! > 1 && (
                    <ProductRowsTitle />
                )}
            </ProductRowContainer>
            <CustomModal isOpen={isModalOpen} onClose={() => setModalOpen(false)}
                         title={translate("common:pages.calculator.modal.title")}>
                <span onClick={() => setModalOpen(false)}>
                    <SwitchMeasurement returnFunction={handleChangeMeasurement} />
                </span>
            </CustomModal>
        </>
    );
};

export { ProductRowsHeader };