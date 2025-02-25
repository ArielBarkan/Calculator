// React and modules imports
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";

// Custom imports
import AppRoutes from "./routes/app.routes";
import { ChangeLanguage } from "./services";
import "./services/i18n.service";
import { ThemeProviderWrapper } from "./context/theme.context";
import { GlobalStyles } from "./styles";
import { localStorageGetSelectedLanguage } from "./services";
import { NotifyCustom } from "./components/toast/toast";
import { GOOGLE_ANALYTICS } from "./utils/analytics.util";


const App: React.FC = () => {
    ChangeLanguage(localStorageGetSelectedLanguage());
    const location = useLocation();

    useEffect(() => {
        GOOGLE_ANALYTICS.initGA();
    }, []);

    useEffect(() => {
        GOOGLE_ANALYTICS.trackPageView(location.pathname);
    }, [location]);

    return (
        <ThemeProviderWrapper>
            <GlobalStyles />
            <ToastContainer />
            <NotifyCustom />
            <AppRoutes />
        </ThemeProviderWrapper>
    );
};

export default App;
