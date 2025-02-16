// Modules imports
import { useTranslation } from "react-i18next";
import Flag from "react-world-flags";
// Custom imports
import { Row } from "../SettingWrappers";
import { supportedLanguages } from "../../../data";
import { ChangeLanguage } from "../../../services";
import { TitleWithBack } from "../../../components/titleWithBack";

const Language = () => {
    const { t: translate } = useTranslation("common");


    const handleChangeLanguage = (newLocale: string) => {
        ChangeLanguage(newLocale);
    };

    return (
        <>
            <TitleWithBack title={translate("common:pages.settings.setLanguage")} linkTo={"/settings"} />
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