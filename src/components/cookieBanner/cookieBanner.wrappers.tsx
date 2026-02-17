// Styled Components for the banner
import styled from "styled-components";

const CookieBannerWrapper = styled.div<{ $visible: boolean }>`
    position: fixed;
    bottom: 0;
    left: 0;
    min-width: 100%;
    background-color: ${({ theme }) => theme.cookieBanner.bgColor};
    color: ${({ theme }) => theme.cookieBanner.fontColor};
    padding: 12px 20px;
    max-width: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
    transform: ${(props) => (props.$visible ? "translateY(0)" : "translateY(100%)")};
    transition: transform 0.3s ease-in-out;
    z-index: 9999;
`;

const CookieText = styled.p`
    padding: 0 2rem;
`;

const ButtonGroup = styled.div`
    display: flex;
    align-self: flex-end;
    gap: 10px;
`;

const AcceptButton = styled.button`
    flex: 1;
    padding: 10px 16px;
    font-size: 14px;
    font-weight: 600;
    border: none;
    cursor: pointer;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.buttons.primary.backgroundColor};
    color: ${({ theme }) => theme.buttons.primary.color};
    white-space: nowrap;
    transition: opacity 0.2s ease-in-out;

    &:hover {
        opacity: 0.9;
    }
`;

const RejectButton = styled.button`
    flex: 1;
    padding: 10px 16px;
    font-size: 14px;
    font-weight: 500;
    background: transparent;
    border: 1px solid ${({ theme }) => theme.cookieBanner.fontColor}33;
    color: ${({ theme }) => theme.cookieBanner.fontColor};
    cursor: pointer;
    border-radius: 10px;
    white-space: nowrap;
    transition: opacity 0.2s ease-in-out;

    &:hover {
        opacity: 0.7;
    }
`;

export { CookieBannerWrapper, CookieText, ButtonGroup, AcceptButton, RejectButton };
