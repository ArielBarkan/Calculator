import { useState } from "react";

import { NumericKeyboardWrapper, NumericKeyButton, TemporaryInputDisplay } from "./numericKeyboardWrappers";

const NumericKeyboard = () => {
    const [value, setValue] = useState<string>("");

    const handleClick = (num: string) => {
        setValue((prev) => {
            // Prevent multiple decimal points
            if (num === "." && prev.includes(".")) return prev;

            // Prevent starting with a decimal point (".")
            if (num === "." && prev === "") return prev;

            return prev + num;
        });
    };


    const handleBackspace = () => {
        setValue((prev) => prev.slice(0, -1));
    };

    const handleClear = () => {
        setValue("");
    };

    return (
        <div>
            <TemporaryInputDisplay type="text" value={value} readOnly />
            <NumericKeyboardWrapper>
                {["1", "2", "3", "4", "5", "6", "7", "8", "9"].map((num) => (
                    <NumericKeyButton key={num} onClick={() => handleClick(num)}>{num}</NumericKeyButton>
                ))}
                <NumericKeyButton onClick={handleClear}>C</NumericKeyButton>
                <NumericKeyButton onClick={() => handleClick("0")}>0</NumericKeyButton>
                <NumericKeyButton onClick={() => handleClick(".")}>.</NumericKeyButton> {/* ✅ Added decimal point */}
                <NumericKeyButton onClick={handleBackspace}>⌫</NumericKeyButton>
            </NumericKeyboardWrapper>
        </div>
    );
};

export { NumericKeyboard };
