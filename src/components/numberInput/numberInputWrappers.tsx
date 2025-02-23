import styled from "styled-components";

const NumberInputStyled = styled.input.attrs({
    type: "text",
    inputMode: "numeric",
    pattern: "[0-9]*",
    placeholder: "Enter a number"
})`
    //width: 100%;
    padding: 10px;
    font-size: 18px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background: #d2d0d0;

    &:focus {
        //  border: 1px solid #c44646;
        background: #FFF;
    }
`;

export { NumberInputStyled };