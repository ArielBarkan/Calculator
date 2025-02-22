import { useState } from "react";
import { NumberInputStyled } from "./numberInputWrappers";

/*export type InputCompProps = {
    value?: string
}*/
const NumericInput = () => {
    const [value, setValue] = useState<string>("");
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value;

        // ✅ Allow only numbers and one decimal point
        if (/^\d*\.?\d*$/.test(inputValue)) {
            // alert(inputValue);
            setValue(inputValue);
        }
    };

    return (<NumberInputStyled value={value} onChange={handleChange} />);

};

export { NumericInput };