// Modules imports
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

// Custom imports
import { useTheme } from "../../../context/ThemeContext";
import { ToggleSwitch } from "../../../components/toggleSwitch";
import { THEME_ENUMS } from "../../../enums";
import { Row, DoubleLineWrapper, TopLine, BottomLine } from "./SettingWrappers";

import { IconNext } from "../../../styles";
import { TitleWithBack } from "../../../components/titleWithBack";
import { NotifySuccess } from "../../../components/toast/toast";

import { getSelectedLanguageByLocale } from "../../../utils";
import {
    localStorageGetSelectedCurrency, localStorageGetSelectedTheme

} from "../../../services/localStorageService";
import { useState } from "react";


const SettingsPage = () => {
    const { t: translate } = useTranslation("common");
    const { toggleTheme } = useTheme();
    const navigate = useNavigate();

    const [selectedTheme, setSelectedTheme] = useState<THEME_ENUMS>(localStorageGetSelectedTheme());


    const handleChangeTheme = () => {
        setSelectedTheme(toggleTheme());
        NotifySuccess(translate("common:pages.settings.setThemeSuccess"));
    };

    const isDarkMode = (): boolean => {
        return selectedTheme === THEME_ENUMS.dark;
    };

    return (
        <>
            <TitleWithBack title={translate("common:pages.settings.title")} linkTo={"/"} />

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