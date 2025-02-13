// React imports
import React from "react";

// Modules imports

// Custom imports
import AppRoutes from "./routes/AppRoutes";
import { ChangeLanguage } from "./services";
import "./services/i18nService";
import { ThemeProviderWrapper } from "./context/ThemeContext";
import { Header } from "./components/header/Header";
import { useUserLanguage } from "./hooks";
import { GlobalStyles } from "./theme/GlobalStyles";

const App: React.FC = () => {

    const language = useUserLanguage();
    // ChangeLanguage("en-US");
    ChangeLanguage(language);
    console.log(language);

    return (
        <ThemeProviderWrapper>
            <GlobalStyles />
            <Header />
            <AppRoutes />
        </ThemeProviderWrapper>
    );
};

export default App;
