// React imports
import React from "react";

// Modules imports
import AppRoutes from "./routes/AppRoutes";

// Custom imports
import { ChangeLanguage } from "./services";
import "./services/i18nService";
import { ThemeProviderWrapper } from "./context/ThemeContext";

import { GlobalStyles } from "./styles";
import { localStorageGetSelectedLanguage } from "./services/localStorageService";
import { ToastContainer } from "react-toastify";
import { NotifyCustom } from "./components/toast/toast";


const App: React.FC = () => {
    ChangeLanguage(localStorageGetSelectedLanguage());

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
