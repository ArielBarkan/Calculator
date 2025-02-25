// React and modules imports
import styled from "styled-components";


const CustomButton = styled.button`
    color: ${({ theme }) => theme.buttons.primary.color};
    background: ${({ theme }) => theme.buttons.primary.backgroundColor};
`;

export { CustomButton };