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
            <h1> {translate("pages.settings.title")} </h1>
            <br />
            <Button onClick={toggleTheme}>Toggle Theme ({theme})</Button>
            <br />
            <Button onClick={() => ChangeLanguage("en-US")}>English</Button>
            <Button onClick={() => ChangeLanguage("es")}>Spanish</Button>
            <Button onClick={() => ChangeLanguage("he-IL")}>Hebrew</Button>


            <br />
            <SelectComponent options={currenciesOptions} />

        </>
    );
};

export { SettingsPage };