// Modules imports
import { useTranslation } from "react-i18next";

// Custom imports
import { ChangeLanguage } from "../../services";
import { useTheme } from "../../context/ThemeContext";
import { SelectComponent } from "../../components/select";
import { convertCurrenciesToSelect, convertLanguagesToSelect } from "../../utils";
import { selectType } from "../../types";
import { currenciesArray } from "../../data";
import { ToggleSwitch } from "../../components/toggleSwitch";
import { THEME_ENUMS } from "../../enums";
import { Row } from "./SettingWrappers";
import { SUPPORTED_LANGUAGES } from "../../constants";
import { localStorageGetSelectedLanguage } from "../../services/localStorageService";


const SettingsPage = () => {
    const { t: translate } = useTranslation("common");
    const { theme, toggleTheme } = useTheme();

    const currenciesOptions: selectType[] = convertCurrenciesToSelect(currenciesArray);
    const languageOptions: selectType[] = convertLanguagesToSelect(SUPPORTED_LANGUAGES);

    const handleChangeTheme = () => {
        toggleTheme();
    };

    const handleChangeLanguage = (newLocale: string) => {
        ChangeLanguage(newLocale);
    };

    const handleChangeCurrency = (newCurrency: string) => {
        console.log(newCurrency);
        // TODO : set globally
    };

    return (
        <>
            <h1> {translate("pages.settings.title")} </h1>

            <Row>
                {translate("pages.settings.setDarkMode")}
                <ToggleSwitch checked={theme === THEME_ENUMS.dark} returnFunction={handleChangeTheme} />
            </Row>
            <Row>
                {translate("common:pages.settings.setLanguage")}
                <SelectComponent options={languageOptions} returnFunction={handleChangeLanguage}
                                 currentValue={localStorageGetSelectedLanguage()}
                />
            </Row>
            <Row>
                {translate("common:pages.settings.setCurrency")}
                <SelectComponent options={currenciesOptions} returnFunction={handleChangeCurrency}
                />
            </Row>


        </>
    );
};

export { SettingsPage };