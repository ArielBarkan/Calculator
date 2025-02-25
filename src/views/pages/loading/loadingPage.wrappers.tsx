// React and modules imports
import styled, { keyframes } from "styled-components";


const spin = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;


const LoadingWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh; // Full screen height
    background: ${({ theme }) => theme.body.bgColor};
`;

const Spinner = styled.div`
    border: 6px solid rgba(0, 0, 0, 0.1);
    border-top: 6px solid ${({ theme }) => theme.generic.foreground};
    border-radius: 50%;
    width: 50px;
    height: 50px;
    animation: ${spin} 1s linear infinite;
`;

export { LoadingWrapper, Spinner };