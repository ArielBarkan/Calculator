// React imports
import React, { useState, useEffect } from "react";

// Modules imports
import { useTranslation } from "react-i18next";


const ShareButton: React.FC = () => {
    const { t: translate } = useTranslation("common");
    const [isShareSupported, setIsShareSupported] = useState(false);

    useEffect(() => {
        // Checking if the Web Share API is supported by the browser
        setIsShareSupported(!!navigator.share);
    }, []);

    const handleShareApp = async () => {
        try {
            await navigator.share({
                title: translate("share.title"),
                text: translate("share.text"),
                url: import.meta.env.VITE_URL_TO_SHARE
            });
            // TODO: add analytics
            console.log("Successfully shared!");
        } catch (error) {
            // TODO: add analytics
            console.error("Error sharing:", error);
        }
    };

    return (
        isShareSupported && (
            <button onClick={handleShareApp}>{translate("share.label")}</button>
        )
    );
};

export { ShareButton };
