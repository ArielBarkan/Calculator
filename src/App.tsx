import React from "react";

// Custom imports
import AppRoutes from "./routes/AppRoutes";
import { ChangeLanguage } from "./services";
import "./services/i18nService";


const App: React.FC = () => {
    ChangeLanguage("en-US");
    return <AppRoutes />;
};

export default App;
