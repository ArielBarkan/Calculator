// Styled Components for the install banner
import styled from "styled-components";

const InstallBannerWrapper = styled.div<{ $visible: boolean }>`
    position: fixed;
    bottom: 16px;
    left: 16px;
    right: 16px;
    background-color: ${({ theme }) => theme.cookieBanner.bgColor};
    color: ${({ theme }) => theme.cookieBanner.fontColor};
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 14px;
    border-radius: 16px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
    border-top: 3px solid #51dcd5;
    transform: ${(props) => (props.$visible ? "translateY(0)" : "translateY(calc(100% + 32px))")};
    transition: transform 0.3s ease-in-out;
    z-index: 9999;
`;

const ContentRow = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
`;

const AppIcon = styled.img`
    width: 48px;
    height: 48px;
    border-radius: 12px;
    flex-shrink: 0;
`;

const TextBlock = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
`;

const AppName = styled.span`
    font-weight: 700;
    font-size: 15px;
`;

const InstallText = styled.span`
    font-size: 13px;
    opacity: 0.8;
`;

const ButtonGroup = styled.div`
    display: flex;
    gap: 10px;
`;

const InstallButton = styled.button`
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

const DismissButton = styled.button`
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

export { InstallBannerWrapper, ContentRow, AppIcon, TextBlock, AppName, InstallText, ButtonGroup, InstallButton, DismissButton };
