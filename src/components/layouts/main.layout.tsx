// React and modules imports
import React from "react";
import { Outlet } from "react-router-dom";

// Custom imports
import { LayoutWrapper, MainContent } from "./layout.wrappers";
import { TopBarMenu } from "../topBarMenu";
import { CookieBanner } from "../cookieBanner";
import { HamburgerMenu } from "../hamburgerMenu";
import { ErrorBoundary, PageErrorFallback } from "../errorBoundary";

const MainLayout = () => {
    return (
        <LayoutWrapper>
            <HamburgerMenu />
            <TopBarMenu />
            <MainContent>
                <ErrorBoundary fallbackUI={<PageErrorFallback />}>
                    <Outlet />
                </ErrorBoundary>
            </MainContent>
            <CookieBanner />
        </LayoutWrapper>
    );
};

export default MainLayout;
