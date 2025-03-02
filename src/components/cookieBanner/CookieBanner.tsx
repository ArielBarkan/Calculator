// React and modules imports
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

// Custom imports
import { CookieBannerWrapper, CookieText, ButtonGroup, Button } from "./cookieBanner.wrappers";

const CookieBanner = () => {
    const { t: translate } = useTranslation("common");
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem("cookieConsent");
        if (!consent) {
            setVisible(true); // Show banner if no consent is stored
        }
    }, []);

    const handleConsent = (accepted: boolean) => {
        localStorage.setItem("cookieConsent", accepted ? "accepted" : "rejected");

        if (!accepted) {

            window[`ga-disable-${import.meta.env.VITE_GOOGLE_ANALYTICS_TRACKING_ID}`] = true; // Disable GA
        }

        setVisible(false); // Hide banner after choice is made
    };

    return visible ? (
        <CookieBannerWrapper $visible={visible}>
            <CookieText>{translate("common:cookieBanner.text")}</CookieText>
            <ButtonGroup>
                <Button className="accept"
                        onClick={() => handleConsent(true)}>{translate("common:cookieBanner.button.accept")}</Button>
                <Button className="reject"
                        onClick={() => handleConsent(false)}>{translate("common:cookieBanner.button.reject")}</Button>
            </ButtonGroup>
        </CookieBannerWrapper>
    ) : null;
};


export { CookieBanner };