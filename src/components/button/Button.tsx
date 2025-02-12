// React imports

// Modules imports
import styled from "styled-components";

// Custom imports


const Button = styled.button`
    color: ${({ theme }) => theme.colors.buttons.primary.color};
    background: ${({ theme }) => theme.colors.buttons.primary.backgroundColor};
`;

export { Button };