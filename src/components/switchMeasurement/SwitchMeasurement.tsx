// React and modules imports
import { useTranslation } from "react-i18next";

// Custom imports
import { localStorageGetSelectedMeasurement, localStorageUpdateSelectedMeasurement } from "../../services";
import {
    MeasurementWrapper,
    MeasurementItemContainer,
    MeasurementTitle,
    MeasurementExplanation
} from "./switchMeasurement.wrappers";
import { MEASUREMENT_ENUMS } from "../../enums";
import { SwitchMeasurementProps } from "../../types";
import { IconWeight, IconLiquid, IconQuantity } from "../../styles";

const SwitchMeasurement = (props: SwitchMeasurementProps) => {
    const selectedMeasurement = localStorageGetSelectedMeasurement();
    const { t: translate } = useTranslation("common");

    const { returnFunction } = props;
    const handleChangeMeasurement = (measurement: MEASUREMENT_ENUMS) => {
        localStorageUpdateSelectedMeasurement(measurement);
        returnFunction(measurement);
    };

    return (
        <>
            <MeasurementWrapper>
                <MeasurementItemContainer
                    onClick={() => {
                        handleChangeMeasurement(MEASUREMENT_ENUMS.weight);
                    }}
                    selected={selectedMeasurement === MEASUREMENT_ENUMS.weight}
                >
                    <MeasurementTitle>{translate("common:pages.calculator.measurement.weight.name")}</MeasurementTitle>
                    <IconWeight />
                    <MeasurementExplanation>
                        {translate("common:pages.calculator.measurement.weight.modal.explanation")}
                    </MeasurementExplanation>
                </MeasurementItemContainer>

                <MeasurementItemContainer
                    onClick={() => {
                        handleChangeMeasurement(MEASUREMENT_ENUMS.liquid);
                    }}
                    selected={selectedMeasurement === MEASUREMENT_ENUMS.liquid}
                >
                    <MeasurementTitle>{translate("common:pages.calculator.measurement.liquid.name")}</MeasurementTitle>
                    <IconLiquid />
                    <MeasurementExplanation>
                        {translate("common:pages.calculator.measurement.liquid.modal.explanation")}
                    </MeasurementExplanation>
                </MeasurementItemContainer>

                <MeasurementItemContainer
                    onClick={() => {
                        handleChangeMeasurement(MEASUREMENT_ENUMS.quantity);
                    }}
                    selected={selectedMeasurement === MEASUREMENT_ENUMS.quantity}
                >
                    <MeasurementTitle>
                        {translate("common:pages.calculator.measurement.quantity.name")}
                    </MeasurementTitle>
                    <IconQuantity rtlIgnore={true} />
                    <MeasurementExplanation>
                        {translate("common:pages.calculator.measurement.quantity.modal.explanation")}
                    </MeasurementExplanation>
                </MeasurementItemContainer>
            </MeasurementWrapper>
        </>
    );
};

export { SwitchMeasurement };
