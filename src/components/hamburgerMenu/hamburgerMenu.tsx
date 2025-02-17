import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

import { Navbar, MenuIcon, Menu, CloseIcon, MenuItem } from "./hamburgerMenuWrappers";


import { IconHamburger, IconClose } from "../../styles"; // Import hamburger & close icons

const HamburgerMenu = () => {
    const [menuOpen, setMenuOpen] = useState<boolean>(false);
    const menuRef = useRef<HTMLDivElement | null>(null);
    const location = useLocation(); // ✅ Detects route changes

    // ✅ Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setMenuOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    // ✅ Close menu when navigating to another page
    useEffect(() => {
        setMenuOpen(false);
    }, [location.pathname]);

    return (
        <>
            <Navbar>

                {menuOpen ?
                    <MenuIcon onClick={() => setMenuOpen(false)}>
                        <IconClose />
                    </MenuIcon>
                    :
                    <MenuIcon onClick={() => setMenuOpen(true)}>
                        <IconHamburger />
                    </MenuIcon>
                }
            </Navbar>

            <Menu ref={menuRef} open={menuOpen}>
                <CloseIcon onClick={() => setMenuOpen(false)}>
                    <IconClose />
                </CloseIcon>
                <MenuItem to="/settings">⚙️ Settings</MenuItem>
                <MenuItem to="/about">ℹ️ About</MenuItem>
            </Menu>
        </>
    );
};
export { HamburgerMenu };