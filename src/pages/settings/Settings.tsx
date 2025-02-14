// Modules imports
import { useTranslation } from "react-i18next";

// Custom imports
import { ChangeLanguage } from "../../services";
import { Button } from "../../components/button";
import { useTheme } from "../../context/ThemeContext";
import { SelectComponent } from "../../components/select";
import { convertCurrenciesToSelect } from "../../utils";
import { selectType } from "../../types";
import { currenciesArray } from "../../data";
import { ToggleSwitch } from "../../components/toggleSwitch";
import { THEME_ENUMS } from "../../enums";


const SettingsPage = () => {
    const { t: translate } = useTranslation("common");
    const { theme, toggleTheme } = useTheme();

    const currenciesOptions: selectType[] = convertCurrenciesToSelect(currenciesArray);

    const handleChangeTheme = () => {
        toggleTheme();
    };

    return (
        <>
            <h1> {translate("pages.settings.title")} </h1>
            <br />
            <Button onClick={toggleTheme}>Toggle Theme ({theme})</Button>
            <br />
            <Button onClick={() => ChangeLanguage("en-US")}>English</Button>
            <Button onClick={() => ChangeLanguage("es")}>Spanish</Button>
            <Button onClick={() => ChangeLanguage("he-IL")}>Hebrew</Button>
            <br />
            <ToggleSwitch checked={theme === THEME_ENUMS.dark} returnFunction={handleChangeTheme} />
            <br />
            {translate("common:pages.settings.setDarkMode")} <SelectComponent options={currenciesOptions} />

        </>
    );
};

export { SettingsPage };