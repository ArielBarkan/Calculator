// Modules imports
import { useTranslation } from "react-i18next";

// Custom imports
import { useTheme } from "../../context/ThemeContext";
import { ToggleSwitch } from "../../components/toggleSwitch";
import { THEME_ENUMS } from "../../enums";
import { Row } from "./SettingWrappers";

import { Link } from "react-router-dom";
import { IconNext } from "../../styles";
import { TitleWithBack } from "../../components/titleWithBack";


const SettingsPage = () => {
    const { t: translate } = useTranslation("common");
    const { theme, toggleTheme } = useTheme();


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
            <Row>
                {translate("Language")}
                <Link to="/settings/language"><IconNext /></Link>
            </Row>
            <Row>
                {translate("common:pages.settings.setCurrency")}
                <Link to="/settings/currency"><IconNext /></Link>
            </Row>

        </>
    );
};

export { SettingsPage };