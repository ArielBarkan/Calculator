// Modules imports
import { useTranslation } from "react-i18next";
import Flag from "react-world-flags";
// Custom imports
import { Row } from "../SettingWrappers";
import { supportedLanguages } from "../../../../data";
import { ChangeLanguage } from "../../../../services";
import { TitleWithBack } from "../../../../components/titleWithBack";
import { localStorageGetSelectedLanguage } from "../../../../services/localStorageService";
import { LocaleType } from "../../../../types";
import { NotifySuccess, NotifyWarning } from "../../../../components/toast/toast";

const LanguagePage = () => {
    const { t: translate } = useTranslation("common");
    const currentLanguage: LocaleType = localStorageGetSelectedLanguage();

    const handleChangeLanguage = async (newLocale: string) => {

        const success = await ChangeLanguage(newLocale);

        if (success) {
            NotifySuccess(translate("common:pages.settings.setLanguageSuccess"));
        } else {
            NotifyWarning(translate("common:pages.settings.setLanguageFailed"));
        }
    };

    return (
        <>
            <TitleWithBack title={translate("common:pages.settings.setLanguage")} linkTo={"/settings"} />

            {supportedLanguages.map((language, index: number) => (
                <Row onClick={() => handleChangeLanguage(language.locale)}
                     selected={currentLanguage === language?.locale} key={index}>
                    <p>{language.name}</p>
                    <Flag code={language.flag} width={50} />
                </Row>

            ))}

        </>

    );
};

export default LanguagePage;