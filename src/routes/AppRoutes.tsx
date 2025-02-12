import { Routes, Route } from "react-router-dom";

// Custom imports
import { AboutPage, SettingsPage } from "../pages";


const AppRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<p>Home</p>} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="*" element={<p>404</p>} />
        </Routes>
    );
};

export default AppRoutes;
