import { useState } from "react";
import styled from "styled-components";

const KeyboardWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr); /* ✅ Adjusted for extra keys */
    gap: 10px;
    max-width: 250px;
    margin: auto;
`;

const Button = styled.button`
    padding: 15px;
    font-size: 20px;
    cursor: pointer;
    border: none;
    background-color: #f0f0f0;

    &:hover {
        background-color: #dcdcdc;
    }
`;

const InputDisplay = styled.input`
    width: 100%;
    padding: 10px;
    font-size: 20px;
    text-align: center;
    margin-bottom: 10px;
`;

const NumericKeyboard = () => {
    const [value, setValue] = useState<string>("");

    const handleClick = (num: string) => {
        setValue((prev) => {
            // ✅ Prevent multiple decimal points
            if (num === "." && prev.includes(".")) return prev;

            // ✅ Prevent starting with a decimal point (".")
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
            <InputDisplay type="text" value={value} readOnly />
            <KeyboardWrapper>
                {["1", "2", "3", "4", "5", "6", "7", "8", "9"].map((num) => (
                    <Button key={num} onClick={() => handleClick(num)}>{num}</Button>
                ))}
                <Button onClick={handleClear}>C</Button>
                <Button onClick={() => handleClick("0")}>0</Button>
                <Button onClick={() => handleClick(".")}>.</Button> {/* ✅ Added decimal point */}
                <Button onClick={handleBackspace}>⌫</Button>
            </KeyboardWrapper>
        </div>
    );
};

export { NumericKeyboard };


///  {["1", "2", "3", "4", "5", "6", "7", "8", "9"].map((num) => (
//                     <Button key={num} onClick={() => handleClick(num)}>{num}</Button>
//                 ))}