// React imports
import React, { useEffect } from "react";

// Modules imports
import { useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";

// Custom imports
import AppRoutes from "./routes/AppRoutes";
import { ChangeLanguage } from "./services";
import "./services/i18nService";
import { ThemeProviderWrapper } from "./context/ThemeContext";
import { GlobalStyles } from "./styles";
import { localStorageGetSelectedLanguage } from "./services/localStorageService";
import { NotifyCustom } from "./components/toast/toast";
import { GOOGLE_ANALYTICS } from "./utils/analytics";


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
