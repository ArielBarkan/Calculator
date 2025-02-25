import { useTranslation } from "react-i18next";

import { localStorageGetSelectedMeasurement, localStorageUpdateSelectedMeasurement } from "../../services";
import { MeasurementItemContainer } from "./switchMeasurementWrappers";
import { MEASUREMENT_ENUMS } from "../../enums";

type SwitchMeasurementProps = {
    returnFunction: (measurement: MEASUREMENT_ENUMS) => void;

}
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

<span style={{ display: "flex", flexDirection: "row", gap: 5 }}>
            <MeasurementItemContainer onClick={() => {
                handleChangeMeasurement(MEASUREMENT_ENUMS.weight);
            }}
                                      selected={selectedMeasurement === MEASUREMENT_ENUMS.weight}
            >
                {translate("common:pages.calculator.measurement.weight.name")}
            </MeasurementItemContainer>


            <MeasurementItemContainer onClick={() => {
                handleChangeMeasurement(MEASUREMENT_ENUMS.liquid);
            }}
                                      selected={selectedMeasurement === MEASUREMENT_ENUMS.liquid}
            >
                {translate("common:pages.calculator.measurement.liquid.name")}
            </MeasurementItemContainer>


            <MeasurementItemContainer onClick={() => {
                handleChangeMeasurement(MEASUREMENT_ENUMS.quantity);
            }}
                                      selected={selectedMeasurement === MEASUREMENT_ENUMS.quantity}
            >
                {translate("common:pages.calculator.measurement.quantity.name")}
            </MeasurementItemContainer>
</span>

        </>

    );
};

export { SwitchMeasurement };