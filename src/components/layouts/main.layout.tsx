import React from "react";
import { LayoutWrapper, MainContent } from "./layout.wrappers";
import { Outlet } from "react-router-dom";

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