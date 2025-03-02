// Styled Components for the banner
import styled from "styled-components";

const CookieBannerWrapper = styled.div<{ $visible: boolean }>`
    position: fixed;
    bottom: ${(props) => (props.$visible ? "0" : "-100px")}; /* Show/Hide smoothly */
    left: 0;
    width: 100%;
    background-color: ${({ theme }) => theme.body.bgColor};
    color: ${({ theme }) => theme.body.fontColor};
    padding: 12px 20px;
    max-width: fit-content;
    display: flex;
    justify-content: space-around;
    align-items: center;
    box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
    transition: bottom 0.3s ease-in-out;
    z-index: 9999;
`;

const CookieText = styled.p`
    padding: 0 2rem;
`;

const ButtonGroup = styled.div`
    display: flex;
    gap: 10px;
`;

const Button = styled.button`
    padding: 8px 14px;
    font-size: 14px;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    transition: background 0.2s ease-in-out;

    &.accept {
        background: #4caf50;
        color: white;
    }

    &.reject {
        background: #e53935;
        color: white;
    }

    &:hover {
        opacity: 0.9;
    }
`;

export { CookieBannerWrapper, CookieText, ButtonGroup, Button };