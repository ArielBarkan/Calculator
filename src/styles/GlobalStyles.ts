import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    body {
        max-width: 500px;
        border: 1px solid ${({ theme }) => theme.body.fontColor};
        border-radius: 15px;
        margin: auto;
        height: 99vh;
        padding: 1rem;
        background-color: ${({ theme }) => theme.body.bgColor};
        color: ${({ theme }) => theme.body.fontColor};
        font-family: 'Rubik', sans-serif;
        font-size: 1.5rem;
    }
`;

export { GlobalStyles };
