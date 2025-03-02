import { useState } from "react";
import { MenuButton, MenuContainer, MenuItem, Overlay } from "./hamburgerMenu.wrappers";
import { useTheme } from "styled-components";
import { useTranslation } from "react-i18next";
import { IconClose, IconMenu } from "../../styles";
import { useLocation } from "react-router-dom";


// Hamburger Menu Component
const HamburgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { direction } = useTheme();
    const location = useLocation();
    const { t: translate } = useTranslation("common");
    return (
        <>
            {/* Overlay to close menu when clicking outside */}
                <Overlay isOpen={isOpen} onClick={() => setIsOpen(false)} />

            {/* Menu Button */}
                <MenuButton onClick={() => setIsOpen(!isOpen)}>{isOpen ? <IconClose size={30} /> :
                    <IconMenu size={30} />}</MenuButton>

                {/* Menu */}
                <MenuContainer isOpen={isOpen} $isRtl={direction === "rtl"}>
                    <MenuItem href="/" disabled={location.pathname === "/"}
                              onClick={() => setIsOpen(false)}>{translate("common:pages.calculator.title")}</MenuItem>
                    <MenuItem href="/settings" disabled={location.pathname === "/settings"}
                              onClick={() => setIsOpen(false)}>{translate("common:pages.settings.title")}</MenuItem>
                    <MenuItem href="/share" disabled={location.pathname === "/en(fal"}
                              onClick={() => setIsOpen(false)}>{translate("common:pages.share.title")}</MenuItem>
                </MenuContainer>
        </>
    );
};

export { HamburgerMenu };
