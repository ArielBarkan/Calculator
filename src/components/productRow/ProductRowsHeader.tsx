// React and modules imports
import { useEffect, useState } from "react";
import { useTranslation, Trans } from "react-i18next";

// Custom imports
import { ProductRowContainer, ProductRowsTitle } from "./productRow.wrappers";
import { CustomModal, UnstyledButton } from "../";
import { SwitchMeasurement } from "../switchMeasurement";
import { MEASUREMENT_ENUMS } from "../../enums";
import { localStorageGetSelectedMeasurement } from "../../services";
import { ProductRowProps } from "../../types";


const ProductRowsHeader = (props: Partial<ProductRowProps>) => {


    const { productCount } = props;
    const { t: translate } = useTranslation("common");
    const [selectedMeasurement, setSelectedMeasurement] = useState<MEASUREMENT_ENUMS>(localStorageGetSelectedMeasurement());
    const [measurementUnit, setMeasurementUnit] = useState<string>("גרם");
    const [isModalOpen, setModalOpen] = useState(false);
    const [measurementLabel, setMeasurementLabel] = useState<string>("Measurement");

    const handleChangeMeasurement = (measurement: MEASUREMENT_ENUMS) => {
        setSelectedMeasurement(measurement);
    };


    useEffect(() => {
        let label: string;
        let labelPricePer: string;
        switch (selectedMeasurement) {
            case MEASUREMENT_ENUMS.weight:
            default:
                label = translate("common:pages.calculator.measurement.weight.name");
                labelPricePer = translate("common:pages.calculator.measurement.weight.shortUnit");
                break;
            case MEASUREMENT_ENUMS.liquid:
                label = translate("common:pages.calculator.measurement.liquid.name");
                labelPricePer = translate("common:pages.calculator.measurement.liquid.shortUnit");
                break;
            case MEASUREMENT_ENUMS.quantity:
                label = translate("common:pages.calculator.measurement.quantity.name");
                labelPricePer = translate("common:pages.calculator.measurement.quantity.shortUnit");
                break;
        }
        setMeasurementUnit(labelPricePer);
        setMeasurementLabel(label);

    }, [translate, selectedMeasurement]);


    return (
        <>
            <ProductRowContainer>
                <ProductRowsTitle><Trans i18nKey={"common:pages.calculator.header.price"} /></ProductRowsTitle>
                <ProductRowsTitle><UnstyledButton
                    onClick={() => setModalOpen(true)}>{measurementLabel}&#9660;</UnstyledButton></ProductRowsTitle>
                <ProductRowsTitle>
                    <p>{translate("common:pages.calculator.header.unifiedPrice")}</p>
                    <p>{measurementUnit}</p>
                </ProductRowsTitle>
                <ProductRowsTitle><Trans i18nKey={"common:pages.calculator.header.rank"} /></ProductRowsTitle>
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