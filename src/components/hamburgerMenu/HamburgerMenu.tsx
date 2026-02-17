import { useState } from "react";
import { MenuButton, MenuContainer, MenuItem, Overlay } from "./hamburgerMenu.wrappers";
import { useTheme } from "styled-components";
import { useTranslation } from "react-i18next";
import { IconClose, IconMenu, IconSettings, IconQR, IconQuestionMark, IconHeart } from "../../styles";
import { useLocation } from "react-router-dom";
import { StyledImage } from "../styledImage";
import { CalcPriceIcon } from "../../assets";
import { BeatingHeart } from "../animations";

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
            <MenuButton onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <IconClose size={30} /> : <IconMenu size={30} />}
            </MenuButton>

            {/* Menu */}
            <MenuContainer isOpen={isOpen} $isRtl={direction === "rtl"}>
                <MenuItem to="/" disabled={location.pathname === "/"} onClick={() => setIsOpen(false)}>
                    <StyledImage src={CalcPriceIcon} width={"30px"} height={"30px"} />

                    {translate("common:pages.calculator.title")}
                </MenuItem>
                <MenuItem
                    to="/settings"
                    disabled={location.pathname === "/settings"}
                    onClick={() => setIsOpen(false)}
                >
                    <IconSettings />
                    {translate("common:pages.settings.title")}
                </MenuItem>
                <MenuItem to="/share" disabled={location.pathname === "/share"} onClick={() => setIsOpen(false)}>
                    <IconQR />
                    {translate("common:pages.share.linkLabel")}
                </MenuItem>

                <MenuItem to="/why" disabled={location.pathname === "/why"} onClick={() => setIsOpen(false)}>
                    <IconQuestionMark rtlIgnore={true} />
                    {translate("common:pages.whyCalcPrice.title")}
                </MenuItem>

                <MenuItem to="/why-we" disabled={location.pathname === "/why-we"} onClick={() => setIsOpen(false)}>
                    <BeatingHeart>
                        {" "}
                        <IconHeart rtlIgnore={true} color={"red"} />
                    </BeatingHeart>
                    {translate("common:pages.whyWeCreatedCalcPrice.title")}
                </MenuItem>
            </MenuContainer>
        </>
    );
};

export { HamburgerMenu };
