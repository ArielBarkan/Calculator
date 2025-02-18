import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";


// Lazy loading the app pages
const Layout = lazy(() => import("../components/layout/layout"));
const LoadingPage = lazy(() => import("../views/pages/loading/loadingPage"));
const CalculatorPage = lazy(() => import("../views/pages/calculator/CalculatorPage"));
const AboutPage = lazy(() => import("../views/pages/about/AboutPage"));
const SettingsPage = lazy(() => import("../views/pages/settings/SettingsPage"));
const Language = lazy(() => import("../views/pages/settings/language/languagePage"));
const Currency = lazy(() => import("../views/pages/settings/currency/currencyPage"));


const AppRoutes: React.FC = () => {
    return (
        <Suspense fallback={<LoadingPage />}>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<CalculatorPage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/settings" element={<SettingsPage />} />
                    <Route path="/settings/language" element={<Language />} />
                    <Route path="/settings/currency" element={<Currency />} />
                    <Route path="*" element={<p>404</p>} />
                </Route>
            </Routes>
        </Suspense>
    );
};

export default AppRoutes;
