import { useState } from "react";

import { NumericKeyboardWrapper, NumericKeyButton, TemporaryInputDisplay } from "./numericKeyboard.wrappers";

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
        <>
            <TemporaryInputDisplay type="text" value={value} readOnly />
            <NumericKeyboardWrapper>
                {["1", "2", "3", "4", "5", "6", "7", "8", "9"].map((num) => (
                    <NumericKeyButton key={num} onClick={() => handleClick(num)}>{num}</NumericKeyButton>
                ))}
                <NumericKeyButton onClick={handleClear}>C</NumericKeyButton>
                <NumericKeyButton onClick={() => handleClick("0")}>0</NumericKeyButton>
                <NumericKeyButton onClick={() => handleClick(".")}>.</NumericKeyButton>
                <NumericKeyButton onClick={handleBackspace}>⌫</NumericKeyButton>
            </NumericKeyboardWrapper>
        </>
    );
};

export { NumericKeyboard };
