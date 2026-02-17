// React and modules imports
import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

// Custom imports
import {
    InstallBannerWrapper,
    ContentRow,
    AppIcon,
    TextBlock,
    AppName,
    InstallText,
    ButtonGroup,
    InstallButton,
    DismissButton,
} from "./installBanner.wrappers";
import {
    localStorageGetInstallBannerDismissed,
    localStorageUpdateInstallBannerDismissed,
} from "../../services/localStorage.service";
import { GOOGLE_ANALYTICS } from "../../utils/analytics.util";
import { GA_EVENTS } from "../../consts";

interface BeforeInstallPromptEvent extends Event {
    prompt: () => Promise<void>;
    userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

declare global {
    interface Window {
        __pwaInstallPrompt?: BeforeInstallPromptEvent;
    }
}

const InstallBanner = () => {
    const { t: translate } = useTranslation("common");
    const [visible, setVisible] = useState(false);
    const deferredPromptRef = useRef<BeforeInstallPromptEvent | null>(null);

    useEffect(() => {
        // Don't show if already in standalone mode
        if (window.matchMedia("(display-mode: standalone)").matches) {
            return;
        }

        // Don't show if previously dismissed
        if (localStorageGetInstallBannerDismissed()) {
            return;
        }

        // Check for early-captured prompt (fired before React mounted)
        if (window.__pwaInstallPrompt) {
            deferredPromptRef.current = window.__pwaInstallPrompt;
            delete window.__pwaInstallPrompt;
            setVisible(true);
        }

        const handleBeforeInstallPrompt = (e: Event) => {
            e.preventDefault();
            deferredPromptRef.current = e as BeforeInstallPromptEvent;
            setVisible(true);
        };

        const handleAppInstalled = () => {
            setVisible(false);
            deferredPromptRef.current = null;
        };

        window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
        window.addEventListener("appinstalled", handleAppInstalled);

        return () => {
            window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
            window.removeEventListener("appinstalled", handleAppInstalled);
        };
    }, []);

    const handleInstall = async () => {
        if (!deferredPromptRef.current) return;

        await deferredPromptRef.current.prompt();
        const { outcome } = await deferredPromptRef.current.userChoice;

        if (outcome === "accepted") {
            GOOGLE_ANALYTICS.trackEvent(
                GA_EVENTS.CATEGORIES.USER_ACTIONS,
                GA_EVENTS.ACTIONS.PWA_INSTALL_BANNER_ACCEPTED,
                "success"
            );
        }

        deferredPromptRef.current = null;
        setVisible(false);
    };

    const handleDismiss = () => {
        localStorageUpdateInstallBannerDismissed();
        GOOGLE_ANALYTICS.trackEvent(
            GA_EVENTS.CATEGORIES.USER_ACTIONS,
            GA_EVENTS.ACTIONS.PWA_INSTALL_BANNER_DISMISSED,
            "success"
        );
        setVisible(false);
    };

    return visible ? (
        <InstallBannerWrapper $visible={visible}>
            <ContentRow>
                <AppIcon src="/icons/icon-192x192.png" alt="CalcPrice" />
                <TextBlock>
                    <AppName>CalcPrice</AppName>
                    <InstallText>{translate("common:installBanner.text")}</InstallText>
                </TextBlock>
            </ContentRow>
            <ButtonGroup>
                <InstallButton onClick={handleInstall}>
                    {translate("common:installBanner.button.install")}
                </InstallButton>
                <DismissButton onClick={handleDismiss}>
                    {translate("common:installBanner.button.dismiss")}
                </DismissButton>
            </ButtonGroup>
        </InstallBannerWrapper>
    ) : null;
};

export { InstallBanner };
