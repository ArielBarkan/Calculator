import styled from "styled-components";

const NumberInputStyled = styled.input.attrs({
    type: "text",
    inputMode: "numeric",
    pattern: "[0-9]*",
    placeholder: "Enter a number"
})`
    width: 100%;
    padding: 10px;
    font-size: 18px;
    border: 1px solid #ccc;
    border-radius: 5px;
`;

export { NumberInputStyled };