import { useState } from "react";
import { NumberInputStyled } from "./numberInputWrappers";

export type InputCompProps = {
    focusFunction: () => void;
    blurFunction: () => void;
}
const NumericInput = (props: InputCompProps) => {
    const { focusFunction, blurFunction } = props;
    const [value, setValue] = useState<string>("");
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value;

        // ✅ Allow only numbers and one decimal point
        if (/^\d*\.?\d*$/.test(inputValue)) {

            setValue(inputValue);
        }
    };

    return (<NumberInputStyled value={value} onChange={handleChange} onFocus={focusFunction} onBlur={blurFunction} />);

};

export { NumericInput };