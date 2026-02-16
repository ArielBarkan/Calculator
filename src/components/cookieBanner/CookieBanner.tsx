// React and modules imports
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

// Custom imports
import { CookieBannerWrapper, CookieText, ButtonGroup, Button } from "./cookieBanner.wrappers";
import { localStorageGetCookiesConsent, localStorageUpdateCookiesConsent } from "../../services/localStorage.service";
import { COOKIES_CONSENT_ENUMS } from "../../enums";
import { GOOGLE_ANALYTICS } from "../../utils/analytics.util";
import { GA_EVENTS } from "../../consts";

const CookieBanner = () => {
    const { t: translate } = useTranslation("common");
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const consent = localStorageGetCookiesConsent();
        if (!consent) {
            setVisible(true); // Show banner if no consent is stored
        }
    }, []);

    const handleConsent = (accepted: boolean) => {
        localStorageUpdateCookiesConsent(accepted ? COOKIES_CONSENT_ENUMS.accepted : COOKIES_CONSENT_ENUMS.rejected);

        if (!accepted) {
            window[`ga-disable-${import.meta.env.VITE_GOOGLE_ANALYTICS_TRACKING_ID}`] = true; // Disable GA
            GOOGLE_ANALYTICS.trackEvent(
                GA_EVENTS.CATEGORIES.USER_ACTIONS,
                GA_EVENTS.ACTIONS.COOKIES_CONSENT_REJECT,
                "success"
            );
        } else {
            GOOGLE_ANALYTICS.trackEvent(
                GA_EVENTS.CATEGORIES.USER_ACTIONS,
                GA_EVENTS.ACTIONS.COOKIES_CONSENT_ACCEPT,
                "success"
            );
        }

        setVisible(false); // Hide banner after choice is made
    };

    return visible ? (
        <CookieBannerWrapper $visible={visible}>
            <CookieText>{translate("common:cookieBanner.text")}</CookieText>
            <ButtonGroup>
                <Button className="accept" onClick={() => handleConsent(true)}>
                    {translate("common:cookieBanner.button.accept")}
                </Button>
                <Button className="reject" onClick={() => handleConsent(false)}>
                    {translate("common:cookieBanner.button.reject")}
                </Button>
            </ButtonGroup>
        </CookieBannerWrapper>
    ) : null;
};

export { CookieBanner };
