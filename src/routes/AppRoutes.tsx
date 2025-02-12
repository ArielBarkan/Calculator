import { Routes, Route } from "react-router-dom";
const AppRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<p>Home</p>} />
            <Route path="/configuration" element={<p>Configuration</p>} />
            <Route path="/about" element={<p>About</p>} />
            <Route path="*" element={<p>404</p>}/>
        </Routes>
    );
};

export default AppRoutes;