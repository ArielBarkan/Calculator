import React from "react";
import { LayoutWrapper, MainContent } from "./layoutWrappers";
import { Outlet } from "react-router-dom";

import { TopBarMenu } from "../topBarMenu";

const Layout = () => {
    return (
        <LayoutWrapper>
            <TopBarMenu />
            <MainContent>
                <Outlet />
            </MainContent>
        </LayoutWrapper>
    );
};

export default Layout;