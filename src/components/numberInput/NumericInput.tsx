// React and modules imports
import React, { useState } from "react";

// Custom imports
import { NumberInputStyled } from "./numericInput.wrappers";
import { NumericInputProps } from "../../types";


const NumericInput = (props: NumericInputProps) => {
    const { maxLength, focusFunction, blurFunction, returnFunction, value: displayValue = 0 } = props;
    const [value, setValue] = useState<number>(displayValue);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value;

        // Allow only numbers and one decimal point
        if (/^\d*\.?\d*$/.test(inputValue)) {
            const numericValue = inputValue === "" ? 0 : parseFloat(inputValue); // ✅ Convert to number, keep empty string


            returnFunction(numericValue); // ✅ Send 0 when empty, otherwise parseFloat value


            setValue(numericValue); // ✅ Keep input empty visually instead of forcing "0"
        }
    };


    return (<NumberInputStyled {...{ maxLength }} value={(value !== 0 ? value : "")} onChange={handleChange}
                               onFocus={focusFunction}
                               onBlur={blurFunction} />);

};

export { NumericInput };