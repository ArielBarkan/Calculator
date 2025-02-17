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
    localStorageGetSelectedCurrency

} from "../../../services/localStorageService";


const SettingsPage = () => {
    const { t: translate } = useTranslation("common");
    const { theme, toggleTheme } = useTheme();
    const navigate = useNavigate();


    const handleChangeTheme = () => {
        toggleTheme();
        NotifySuccess(translate("common:pages.settings.setThemeSuccess"));
    };


    return (
        <>
            <TitleWithBack title={translate("pages.settings.title")} linkTo={"/"} />

            <Row onClick={() => handleChangeTheme()}>
                {translate("pages.settings.setDarkMode")}
                <ToggleSwitch checked={theme === THEME_ENUMS.dark} returnFunction={() => {

                }} />
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