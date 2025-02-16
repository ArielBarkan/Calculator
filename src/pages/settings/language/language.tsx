// Modules imports
import { useTranslation } from "react-i18next";
import Flag from "react-world-flags";
// Custom imports
import { Row } from "../SettingWrappers";
import { supportedLanguages } from "../../../data";
import { ChangeLanguage } from "../../../services";
import { Link } from "react-router-dom";
import { IconBack } from "../../../styles";

const Language = () => {
    const { t: translate } = useTranslation("common");


    const handleChangeLanguage = (newLocale: string) => {
        ChangeLanguage(newLocale);
    };

    return (
        <>
            <Row>
                {translate("common:pages.settings.setLanguage")}
                <Link to="/settings"><IconBack /></Link>
            </Row>
            {supportedLanguages.map(language => (
                <Row onClick={() => handleChangeLanguage(language.locale)}>
                    <p>{language.name}</p>
                    <Flag code={language.flag} width={27} />
                </Row>

            ))}

        </>

    );
};

export { Language };