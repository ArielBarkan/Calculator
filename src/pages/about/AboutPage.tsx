import { useTranslation } from "react-i18next";

// Custom imports
import { ChangeLanguage } from "../../services";

const AboutPage = () => {
    const { t: translate } = useTranslation("common");


    return (
        <p>
            {translate("pages.about.title")}
            <br />
            <button onClick={() => ChangeLanguage("he-IL")}>Hebrew</button>
            <button onClick={() => ChangeLanguage("en-US")}>English</button>
        </p>
    );
};

export { AboutPage };