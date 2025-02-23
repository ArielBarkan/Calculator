import styled from "styled-components";

const MAX_CHAR_WIDTH = 10; // Adjust this based on font size
const PADDING = 15; // Total left & right padding

const NumberInputStyled = styled.input.attrs(({ maxLength = 7 }) => ({
    type: "text",
    inputMode: "numeric",
    pattern: "[0-9]*",
    placeholder: "",
    maxLength
}))<{ maxLength: number }>`
    width: ${({ maxLength }) => `${maxLength * MAX_CHAR_WIDTH + PADDING}px`};
    padding: 10px;

    border: 1px solid #ccc;
    border-radius: 5px;
    background: #d2d0d0;

    &:focus {
        background: #FFF;
    }
`;

export { NumberInputStyled };
