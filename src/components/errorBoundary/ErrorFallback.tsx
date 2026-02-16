import { useTranslation } from "react-i18next";
import { FullPageFallbackWrapper, FallbackTitle, FallbackMessage, FallbackButton } from "./errorBoundary.wrappers";

const ErrorFallback = () => {
    const { t } = useTranslation();

    return (
        <FullPageFallbackWrapper>
            <FallbackTitle>{t("errorBoundary.title")}</FallbackTitle>
            <FallbackMessage>{t("errorBoundary.message")}</FallbackMessage>
            <FallbackButton onClick={() => window.location.reload()}>
                {t("errorBoundary.reload")}
            </FallbackButton>
        </FullPageFallbackWrapper>
    );
};

export { ErrorFallback };