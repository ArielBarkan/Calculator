import { useState } from "react";
import styled, { useTheme } from "styled-components";


// Styled Components
const MenuContainer = styled.div<{ isOpen: boolean; $isRtl: boolean }>`
    position: fixed;
    top: 50px;
    ${({ $isRtl }) => ($isRtl ? "right: 0;" : "left: 0;")}
    width: 250px;
    height: 100vh;
    background: #333;
    color: white;
    transform: ${({ isOpen, $isRtl }) =>
            isOpen ? "translateX(0)" : $isRtl ? "translateX(100%)" : "translateX(-100%)"};
        //visibility: ${({ isOpen }) => isOpen ? "visible" : "hidden"};
    transition: transform 0.5s ease-in-out;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    z-index: 1000;
`;

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
    color: white;
    font-size: 24px;
    cursor: pointer;
    z-index: 1001;
`;

const MenuItem = styled.a`
    color: white;
    text-decoration: none;
    font-size: 18px;
    padding: 10px;
    cursor: pointer;

    &:hover {
        background: rgba(255, 255, 255, 0.2);
    }
`;

// Hamburger Menu Component
const HamburgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { direction } = useTheme(); // Get RTL/LTR dynamically

    return (
        <>
            {/* Overlay to close menu when clicking outside */}
            <Overlay isOpen={isOpen} onClick={() => setIsOpen(false)} />

            {/* Menu Button */}
            <MenuButton onClick={() => setIsOpen(!isOpen)}>{isOpen ? "☰" : "|||"}</MenuButton>

            {/* Menu */}
            <MenuContainer isOpen={isOpen} $isRtl={direction === "rtl"}>
                <MenuItem href="/" onClick={() => setIsOpen(false)}>Calculator</MenuItem>
                <MenuItem href="/settings" onClick={() => setIsOpen(false)}>Settings</MenuItem>
                <MenuItem href="/about" onClick={() => setIsOpen(false)}>About</MenuItem>
            </MenuContainer>
        </>
    );
};

export { HamburgerMenu };
