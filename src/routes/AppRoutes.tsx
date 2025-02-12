import { Routes, Route } from "react-router-dom";

// Custom imports
import { AboutPage } from "../pages/about";

const AppRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<p>Home</p>} />
            <Route path="/configuration" element={<p>Configuration</p>} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="*" element={<p>404</p>} />
        </Routes>
    );
};

export default AppRoutes;
