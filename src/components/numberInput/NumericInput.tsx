import React, { useState } from "react";

// Custom imports
import { NumberInputStyled } from "./numericInput.wrappers";
import { NumericInputProps } from "../../types";

const NumericInput = (props: NumericInputProps) => {
    const { maxLength, focusFunction, blurFunction, returnFunction, value: displayValue = 0 } = props;

    const [inputValue, setInputValue] = useState<string>(displayValue.toString()); // Store as string

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;

        // Allow numbers with one optional decimal point & allow deletion
        if (/^\d*\.?\d*$/.test(newValue)) {
            console.log("handlePriceUpdated pass", newValue);

            setInputValue(newValue); // Keep input state as string, allowing full deletion

            // Convert to number only when valid and meaningful
            const numericValue = newValue === "" || newValue === "." ? 0 : parseFloat(newValue);

            returnFunction(numericValue); // Send correct value without interfering with user input
        }
    };

    return (
        <NumberInputStyled
            {...{ maxLength }}
            value={(inputValue !== "0" ? inputValue : "")}
            onChange={handleChange}
            onFocus={focusFunction}
            onBlur={blurFunction}
        />
    );
};

export { NumericInput };
