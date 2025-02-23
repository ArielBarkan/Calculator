import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    body {
        margin: auto;
        padding: 1rem .5rem;
        background-color: ${({ theme }) => theme.body.bgColor};
        color: ${({ theme }) => theme.body.fontColor};
        font-family: 'Rubik', sans-serif;
        font-size: 1.5rem;
    }
`;

export { GlobalStyles };
