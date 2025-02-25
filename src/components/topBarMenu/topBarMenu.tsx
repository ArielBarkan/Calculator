// React imports
import { useEffect, useState } from "react";
// Modules imports
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

// Custom imports
import { IconSettings, IconShare } from "../../styles";
import { Navbar } from "./topBarMenuWrappers";
import { UnstyledButton } from "../buttonUnstyled";
import { GOOGLE_ANALYTICS } from "../../utils/analytics.util";
import { GA_EVENTS } from "../../consts";

const TopBarMenu = () => {
    const { t: translate } = useTranslation("common");

    const location = useLocation();
    const navigate = useNavigate();

    const settingBaseRoute: string = "/settings";

    const [isSelected, setIsSelected] = useState<boolean>(false);

    useEffect(() => {
        setIsSelected(location.pathname.startsWith(settingBaseRoute));
    }, [location.pathname]);


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
            GOOGLE_ANALYTICS.trackEvent(GA_EVENTS.CATEGORIES.USER_ACTIONS, GA_EVENTS.ACTIONS.SHARE_APPLICATION, "success");
        } catch (error) {
            GOOGLE_ANALYTICS.trackError(GA_EVENTS.CATEGORIES.USER_ACTIONS, GA_EVENTS.ACTIONS.SHARE_APPLICATION, JSON.stringify(error));
        }
    };


    return (
        <Navbar>
            <UnstyledButton onClick={() => navigate(settingBaseRoute)} selected={isSelected}>
                <IconSettings size={30} rtlIgnore={true} />
            </UnstyledButton>
            {isShareSupported && (
                <UnstyledButton onClick={handleShareApp}>
                    <IconShare size={30} rtlIgnore={true} />
                </UnstyledButton>)}
        </Navbar>
    );
};
export { TopBarMenu };