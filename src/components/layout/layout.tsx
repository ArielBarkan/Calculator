import React from "react";
import { LayoutWrapper, MainContent } from "./layoutWrappers";
import { Outlet } from "react-router-dom";

import { HamburgerMenu } from "../hamburgerMenu";

const Layout = () => {
    return (
        <LayoutWrapper>
            <HamburgerMenu />
            <MainContent>
                <Outlet />
            </MainContent>
        </LayoutWrapper>
    );
};

export default Layout;