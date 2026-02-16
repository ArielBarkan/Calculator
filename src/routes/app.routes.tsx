// React and modules imports
import React, { Suspense, lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// Custom imports
// Lazy loading the app pages
const MainLayout = lazy(() => import("../components/layouts/main.layout"));
const LoadingPage = lazy(() => import("../views/pages/loading/LoadingScreen"));
const CalculatorPage = lazy(() => import("../views/pages/calculator/CalculatorPage"));
const SettingsPage = lazy(() => import("../views/pages/settings/SettingsPage"));
const Language = lazy(() => import("../views/pages/settings/language/LanguagePage"));
const Currency = lazy(() => import("../views/pages/settings/currency/CurrencyPage"));
const QRShare = lazy(() => import("../views/pages/shareQR/ShareQRPage"));
const WhyCalcPricePage = lazy(() => import("../views/pages/whyCalcPrice/WhyCalcPricePage"));
const WhyWePage = lazy(() => import("../views/pages/whyMe/WhyWePage"));

const AppRoutes: React.FC = () => {
    return (
        <Suspense fallback={<LoadingPage />}>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<CalculatorPage />} />
                    <Route path="/settings" element={<SettingsPage />} />
                    <Route path="/settings/language" element={<Language />} />
                    <Route path="/settings/currency" element={<Currency />} />

                    <Route path="/share" element={<QRShare />} />
                    <Route path="/why" element={<WhyCalcPricePage />} />
                    <Route path="/why-we" element={<WhyWePage />} />
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Route>
            </Routes>
        </Suspense>
    );
};

export default AppRoutes;
