// React and modules imports
import styled from "styled-components";

const MAX_CHAR_WIDTH = 10; // Adjust this based on font size
const PADDING = 15; // Total left & right padding

const NumberInputStyled = styled.input.attrs(({ maxLength = 7 }) => ({
    type: "text",
    inputMode: "numeric",
    placeholder: "",
    maxLength
}))<{ maxLength: number }>`
    width: ${({ maxLength }) => `${maxLength * MAX_CHAR_WIDTH + PADDING}px`};
    padding: 10px;
    border: 1px solid ${({ theme }) => theme.input.borderColor};
    border-radius: 5px;
    background: ${({ theme }) => theme.input.backgroundColor};
    color: ${({ theme }) => theme.body.fontColor};

    &:focus {
        background: ${({ theme }) => theme.input.focusBackgroundColor};
    }
`;

export { NumberInputStyled };
