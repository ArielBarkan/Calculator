// React and modules imports
import React from "react";
import { Outlet } from "react-router-dom";

// Custom imports
import { LayoutWrapper, MainContent } from "./layout.wrappers";
import { TopBarMenu } from "../topBarMenu";
import { CookieBanner } from "../cookieBanner";
import { HamburgerMenu } from "../hamburgerMenu";

const MainLayout = () => {
    return (
        <LayoutWrapper>
            <HamburgerMenu />
            <TopBarMenu />
            <MainContent>
                <Outlet />
            </MainContent>
            <CookieBanner />
        </LayoutWrapper>
    );
};

export default MainLayout;
