// React and modules imports
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

// Custom imports
import { useTheme } from "../../../context/theme.context";
import { ToggleSwitch, PageHeader, NotifySuccess, NotifyWarning } from "../../../components";
import { THEME_ENUMS } from "../../../enums";
import { Row, DoubleLineWrapper, TopLine, BottomLine } from "./settings.wrappers";
import { IconNext } from "../../../styles";
import { getSelectedLanguageByLocale } from "../../../utils";
import { localStorageGetSelectedCurrency } from "../../../services";
import { GOOGLE_ANALYTICS } from "../../../utils/analytics.util";
import { GA_EVENTS } from "../../../consts";


const SettingsPage = () => {
    const { t: translate } = useTranslation("common");
    const { theme, toggleTheme } = useTheme();
    const navigate = useNavigate();

    const [selectedTheme, setSelectedTheme] = useState<THEME_ENUMS>(theme);


    const handleChangeTheme = () => {
        const newTheme = toggleTheme();
        if (newTheme !== selectedTheme) {
            setSelectedTheme(newTheme);
            NotifySuccess(translate("common:pages.settings.setThemeSuccess"));
            GOOGLE_ANALYTICS.trackEvent(GA_EVENTS.CATEGORIES.USER_ACTIONS, GA_EVENTS.ACTIONS.TOGGLE_THEME, newTheme);
        } else {
            NotifyWarning(translate("common:pages.settings.setThemeFailed"));
            GOOGLE_ANALYTICS.trackError(GA_EVENTS.CATEGORIES.USER_ACTIONS, GA_EVENTS.ACTIONS.TOGGLE_THEME, newTheme);
        }

    };

    const isDarkMode = (): boolean => {
        return selectedTheme === THEME_ENUMS.dark;
    };

    return (
        <>
            <PageHeader title={translate("common:pages.settings.title")}
                        subTitle={translate("common:pages.settings.subTitle")} linkTo={"/"} />

            <Row disabled={true}>
                <DoubleLineWrapper>
                    <TopLine>{translate("common:pages.settings.setDarkMode")}</TopLine>
                    <BottomLine>{isDarkMode() ? translate("common:components.toggleSwitch.on") : translate("common:components.toggleSwitch.off")}</BottomLine>
                </DoubleLineWrapper>
                <ToggleSwitch checked={isDarkMode()} returnFunction={handleChangeTheme}
                              id={"themeSwitch"} />
            </Row>
            <Row onClick={() => navigate("/settings/language")}>
                <DoubleLineWrapper>
                    <TopLine>   {translate("common:pages.settings.setLanguage")}</TopLine>
                    <BottomLine>{getSelectedLanguageByLocale().name}</BottomLine>
                </DoubleLineWrapper>
                <IconNext />
            </Row>
            <Row onClick={() => navigate("/settings/currency")}>
                <DoubleLineWrapper>
                    <TopLine>{translate("common:pages.settings.setCurrency")}</TopLine>
                    <BottomLine>{localStorageGetSelectedCurrency()}</BottomLine>
                </DoubleLineWrapper>
                <IconNext />
            </Row>

        </>
    );
};

export default SettingsPage;