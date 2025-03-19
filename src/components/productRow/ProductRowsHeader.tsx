// React and modules imports
import { useEffect, useState } from "react";
import { useTranslation, Trans } from "react-i18next";
import { useTheme } from "styled-components";
// Custom imports
import { ProductRowContainer, ProductRowsTitle } from "./productRow.wrappers";
import { CustomModal, UnstyledButton } from "../";
import { SwitchMeasurement } from "../switchMeasurement";
import { MEASUREMENT_ENUMS } from "../../enums";
import { localStorageGetSelectedMeasurement } from "../../services";
import { ProductRowProps } from "../../types";
import { IconServices, IconTrophy } from "../../styles";
import { SpinnerAnimation } from "../animations/spinner";


const ProductRowsHeader = (props: Partial<ProductRowProps>) => {


    const { productCount, updateCurrency } = props;
    const { t: translate } = useTranslation("common");
    const [selectedMeasurement, setSelectedMeasurement] = useState<MEASUREMENT_ENUMS>(localStorageGetSelectedMeasurement());
    const [measurementUnit, setMeasurementUnit] = useState<string>("גרם");
    const [isModalOpen, setModalOpen] = useState(false);
    const [measurementLabel, setMeasurementLabel] = useState<string>("Measurement");
    const theme = useTheme();
    const handleChangeMeasurement = (measurement: MEASUREMENT_ENUMS) => {
        setSelectedMeasurement(measurement);
        if (updateCurrency) {
            updateCurrency();
        }
    };


    useEffect(() => {
        let label: string;
        let labelPricePer: string;
        switch (selectedMeasurement) {
            case MEASUREMENT_ENUMS.weight:
            default:
                label = translate("common:pages.calculator.measurement.weight.tableHeader");
                labelPricePer = translate("common:pages.calculator.measurement.weight.shortUnit");
                break;
            case MEASUREMENT_ENUMS.liquid:
                label = translate("common:pages.calculator.measurement.liquid.tableHeader");
                labelPricePer = translate("common:pages.calculator.measurement.liquid.shortUnit");
                break;
            case MEASUREMENT_ENUMS.quantity:
                label = translate("common:pages.calculator.measurement.quantity.tableHeader");
                labelPricePer = translate("common:pages.calculator.measurement.quantity.shortUnit");

                break;
        }
        setMeasurementUnit(labelPricePer);
        setMeasurementLabel(label);

    }, [translate, selectedMeasurement]);

    const closeModal = () => {
        setTimeout(() => {
            setModalOpen(false);
        }, 1000);
    };
    return (
        <>
            <ProductRowContainer>
                <ProductRowsTitle width={90}><Trans
                    i18nKey={"common:pages.calculator.header.price"} /></ProductRowsTitle>
                <ProductRowsTitle width={90}>
                    <UnstyledButton
                        onClick={() => setModalOpen(true)}>
                        {<Trans i18nKey={measurementLabel} />}<SpinnerAnimation><IconServices
                        size={25}
                        color={theme.logoColor} /></SpinnerAnimation>
                    </UnstyledButton>
                </ProductRowsTitle>
                <ProductRowsTitle width={90}>
                    <p>{translate("common:pages.calculator.header.unifiedPrice")}</p>
                    <p>{measurementUnit}</p>
                </ProductRowsTitle>
                <ProductRowsTitle style={{ textAlign: "center" }}><IconTrophy size={30} /></ProductRowsTitle>
                {productCount! > 1 && (
                    <ProductRowsTitle width={30}></ProductRowsTitle>
                )}
            </ProductRowContainer>
            <CustomModal isOpen={isModalOpen}
                         onClose={() => setModalOpen(false)}
                         title={translate("common:pages.calculator.modal.title")}
                         width="85%" // Set custom width
                         height="200px" // Set custom height
                         position="top" // Position modal on the right
                         closeButtonText={translate("common:pages.calculator.modal.closeButton")}

            >
                <span onClick={() => closeModal()}>
                    <SwitchMeasurement returnFunction={handleChangeMeasurement} />
                </span>
            </CustomModal>
        </>
    );
};

export { ProductRowsHeader };