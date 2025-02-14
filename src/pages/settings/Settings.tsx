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


const SettingsPage = () => {
    const { t: translate } = useTranslation("common");
    const { theme, toggleTheme } = useTheme();

    const currenciesOptions: selectType[] = convertCurrenciesToSelect(currenciesArray);

    return (
        <>
            {translate("pages.settings.title")}
            <br />
            <Button onClick={toggleTheme}>Toggle Theme ({theme})</Button>
            <br />
            <Button onClick={() => ChangeLanguage("he-IL")}>Hebrew</Button>
            <Button onClick={() => ChangeLanguage("en-US")}>English</Button>

            <br />
            <SelectComponent options={currenciesOptions} />

        </>
    );
};

export { SettingsPage };