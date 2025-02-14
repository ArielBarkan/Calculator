// React imports
import React from "react";

// Modules imports
import AppRoutes from "./routes/AppRoutes";

// Custom imports
import { ChangeLanguage } from "./services";
import "./services/i18nService";
import { ThemeProviderWrapper } from "./context/ThemeContext";
import { Header } from "./components/header/Header";
import { GlobalStyles } from "./theme/GlobalStyles";
import { getSelectedLanguage } from "./services/localStorageService";

const App: React.FC = () => {


    ChangeLanguage(getSelectedLanguage());


    return (
        <ThemeProviderWrapper>
            <GlobalStyles />
            <Header />
            <AppRoutes />
        </ThemeProviderWrapper>
    );
};

export default App;
