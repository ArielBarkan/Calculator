// Modules imports
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

// Custom imports
import { useTheme } from "../../context/ThemeContext";
import { ToggleSwitch } from "../../components/toggleSwitch";
import { THEME_ENUMS } from "../../enums";
import { Row } from "./SettingWrappers";

import { IconNext } from "../../styles";
import { TitleWithBack } from "../../components/titleWithBack";


const SettingsPage = () => {
    const { t: translate } = useTranslation("common");
    const { theme, toggleTheme } = useTheme();
    const navigate = useNavigate();


    const handleChangeTheme = () => {
        toggleTheme();
    };


    return (
        <>

            <TitleWithBack title={translate("pages.settings.title")} linkTo={"/"} />

            <Row>
                {translate("pages.settings.setDarkMode")}
                <ToggleSwitch checked={theme === THEME_ENUMS.dark} returnFunction={handleChangeTheme} />
            </Row>
            <Row onClick={() => navigate("/settings/language")}>
                {translate("Language")}
                <IconNext />
            </Row>
            <Row onClick={() => navigate("/settings/currency")}>
                {translate("common:pages.settings.setCurrency")}
                <IconNext />
            </Row>

        </>
    );
};

export { SettingsPage };