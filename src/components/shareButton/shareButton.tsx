// React imports
import React, { useState, useEffect } from "react";

// Modules imports
import { useTranslation } from "react-i18next";
// Custom imports
const ShareButton: React.FC = () => {
    const { t: translate } = useTranslation("common");
    const [isShareSupported, setIsShareSupported] = useState(false);

    useEffect(() => {
        setIsShareSupported(!!navigator.share); // Check if the Web Share API is supported
    }, []);

    const shareApp = async () => {
        try {
            await navigator.share({
                title: translate("share.title"),
                text: translate("share.text"),
                url: import.meta.env.VITE_URL_TO_SHARE
            });
            console.log("Successfully shared!");
        } catch (error) {
            console.error("Error sharing:", error);
        }
    };

    return (
        isShareSupported && (
            <button onClick={shareApp}>{translate("share.label")}</button>
        )
    );
};

export { ShareButton };
