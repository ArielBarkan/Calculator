// Modules imports
import { useTranslation } from "react-i18next";

// Custom imports
import { ChangeLanguage } from "../../services";
import { Button } from "../../components/button";
import { useTheme } from "../../context/ThemeContext";


const SettingsPage = () => {
    const { t: translate } = useTranslation("common");
    const { theme, toggleTheme } = useTheme();

    return (
        <>
            {translate("pages.settings.title")}
            <br />
            <h1>Current Theme: {theme}</h1>
            <Button onClick={toggleTheme}>Toggle Theme{theme}</Button>
            <Button onClick={() => ChangeLanguage("he-IL")}>Hebrew</Button>
            <Button onClick={() => ChangeLanguage("en-US")}>English</Button>
        </>
    );
};

export { SettingsPage };