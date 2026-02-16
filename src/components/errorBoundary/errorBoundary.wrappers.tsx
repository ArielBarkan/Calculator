import styled from "styled-components";

const FullPageFallbackWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background-color: ${({ theme }) => theme.body.bgColor};
    color: ${({ theme }) => theme.body.fontColor};
    padding: 2rem;
    text-align: center;
`;

const PageFallbackWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 3rem 2rem;
    text-align: center;
    color: ${({ theme }) => theme.body.fontColor};
`;

const FallbackTitle = styled.h2`
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
`;

const FallbackMessage = styled.p`
    font-size: 1rem;
    margin-bottom: 1.5rem;
    opacity: 0.7;
`;

const FallbackButton = styled.button`
    padding: 10px 20px;
    font-size: 1rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    background-color: ${({ theme }) => theme.buttons.primary.backgroundColor};
    color: ${({ theme }) => theme.buttons.primary.color};
    transition: opacity 0.2s ease-in-out;
    margin: 0.25rem;

    &:hover {
        opacity: 0.9;
    }
`;

export { FullPageFallbackWrapper, PageFallbackWrapper, FallbackTitle, FallbackMessage, FallbackButton };