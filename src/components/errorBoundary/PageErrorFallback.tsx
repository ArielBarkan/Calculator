import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { PageFallbackWrapper, FallbackTitle, FallbackMessage, FallbackButton } from "./errorBoundary.wrappers";

const PageErrorFallback = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    return (
        <PageFallbackWrapper>
            <FallbackTitle>{t("errorBoundary.title")}</FallbackTitle>
            <FallbackMessage>{t("errorBoundary.message")}</FallbackMessage>
            <FallbackButton onClick={() => navigate("/")}>{t("errorBoundary.goHome")}</FallbackButton>
            <FallbackButton onClick={() => window.location.reload()}>
                {t("errorBoundary.reload")}
            </FallbackButton>
        </PageFallbackWrapper>
    );
};

export { PageErrorFallback };