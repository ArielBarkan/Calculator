// React and modules imports
import React from "react";
import { Outlet } from "react-router-dom";

// Custom imports
import { LayoutWrapper, MainContent } from "./layout.wrappers";
import { TopBarMenu } from "../topBarMenu";


const MainLayout = () => {
    return (
        <LayoutWrapper>
            <TopBarMenu />
            <MainContent>
                <Outlet />
            </MainContent>
        </LayoutWrapper>
    );
};

export default MainLayout;