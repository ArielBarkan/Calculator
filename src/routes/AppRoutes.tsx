import { Routes, Route } from "react-router-dom";

// Custom imports
import { CalculatorPage, AboutPage, SettingsPage, Language, Currency } from "../pages";


const AppRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<CalculatorPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="/settings/language" element={<Language />} />
            <Route path="/settings/currency" element={<Currency />} />
            <Route path="*" element={<p>404</p>} />
        </Routes>
    );
};

export default AppRoutes;
