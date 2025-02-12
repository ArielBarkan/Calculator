// React imports
import React from "react";

// Modules imports

// Custom imports
import AppRoutes from "./routes/AppRoutes";
import "./services/i18nService";
import { ThemeProviderWrapper } from "./context/ThemeContext";
import { Header } from "./components/header/Header";

const App: React.FC = () => {

    // TODO: implement the "ChangeLanguage()" by the selected language in the settings page (TBD save in cookie)
    // TODO: implement the Theme by the selected theme in the settings page (TBD save in cookie)


    return (
        <ThemeProviderWrapper>
            <Header />
            <AppRoutes />
        </ThemeProviderWrapper>
    );
};

export default App;
