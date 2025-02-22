// React imports

// Modules imports
import styled from "styled-components";

// Custom imports


const CustomButton = styled.button`
    color: ${({ theme }) => theme.buttons.primary.color};
    background: ${({ theme }) => theme.buttons.primary.backgroundColor};
`;

export { CustomButton };