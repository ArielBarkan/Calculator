import styled from "styled-components";

const MenuContainer = styled.div<{ isOpen: boolean; $isRtl: boolean }>`
    position: fixed;
    top: 50px;
    ${({ $isRtl }) => ($isRtl ? "right: 0;" : "left: 0;")}
    width: 250px;
    height: 100vh;
    background-color: ${({ theme }) => theme.cookieBanner.bgColor};
    color: ${({ theme }) => theme.cookieBanner.fontColor};
    transform: ${({ isOpen, $isRtl }) =>
            isOpen ? "translateX(0)" : $isRtl ? "translateX(100%)" : "translateX(-100%)"};
        // visibility: ${({ isOpen }) => isOpen ? "visible" : "hidden"};
    transition: transform 0.3s linear;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    z-index: 1000;
`;
//    background-color: ${({ theme }) => theme.cookieBanner.bgColor};
//     color: ${({ theme }) => theme.cookieBanner.fontColor};
const Overlay = styled.div<{ isOpen: boolean }>`
    display: ${({ isOpen }) => (isOpen ? "block" : "none")};
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    z-index: 999;
`;

const MenuButton = styled.button`
    position: fixed;
    top: 10px;
    ${({ theme }) => (theme.direction === "rtl" ? "right: 20px;" : "left: 20px;")}
    background: none;
    border: none;
    color: ${({ theme }) => theme.cookieBanner.fontColor};
    font-size: 24px;
    cursor: pointer;
    z-index: 1001;
`;

const MenuItem = styled.a<{ disabled: boolean }>`
    color: ${({ theme }) => theme.cookieBanner.fontColor};
    text-decoration: none;
    width: 100%;
    font-size: 18px;
    padding: 10px;
    cursor: ${({ disabled }) => disabled ? "default" : "pointer"};
    background: ${({ disabled }) => disabled ? "rgba(182, 180, 180, 0.2)" : "inherit"};


    &:hover {
        background: rgba(255, 255, 255, 0.2);
    }
`;

export { MenuContainer, Overlay, MenuButton, MenuItem };