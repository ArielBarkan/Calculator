import React from "react";

// Custom imports
import AppRoutes from "./routes/AppRoutes";
import { ChangeLanguage } from "./services";
import "./services/i18nService";


const App: React.FC = () => {
    // ChangeLanguage("en-US");
    ChangeLanguage("he-IL");
    return <AppRoutes />;
};

export default App;
