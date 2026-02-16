// React and modules imports
import { useTranslation } from "react-i18next";
import Flag from "react-world-flags";

// Custom imports
import { Row } from "../settings.wrappers";
import { GA_EVENTS, SUPPORTED_LANGUAGES } from "../../../../consts";
import { ChangeLanguage } from "../../../../services";
import { PageHeader, NotifySuccess, NotifyWarning } from "../../../../components";
import { localStorageGetSelectedLanguage } from "../../../../services";
import { LocaleType } from "../../../../types";
import { GOOGLE_ANALYTICS } from "../../../../utils/analytics.util";

const LanguagePage = () => {
    const { t: translate } = useTranslation("common");
    const currentLanguage: LocaleType = localStorageGetSelectedLanguage();

    const handleChangeLanguage = async (newLocale: string) => {
        if (newLocale === currentLanguage) return;
        const success = await ChangeLanguage(newLocale);

        if (success) {
            GOOGLE_ANALYTICS.trackEvent(
                GA_EVENTS.CATEGORIES.USER_ACTIONS,
                GA_EVENTS.ACTIONS.CHANGE_LANGUAGE,
                newLocale
            );
            NotifySuccess(translate("common:pages.settings.setLanguageSuccess"));
        } else {
            GOOGLE_ANALYTICS.trackError(
                GA_EVENTS.CATEGORIES.USER_ACTIONS,
                GA_EVENTS.ACTIONS.CHANGE_LANGUAGE,
                newLocale
            );
            NotifyWarning(translate("common:pages.settings.setLanguageFailed"));
        }
    };

    return (
        <>
            <PageHeader
                title={translate("common:pages.settings.setLanguage")}
                subTitle={translate("common:pages.settings.language.subTitle")}
                linkTo={"/settings"}
            />

            {SUPPORTED_LANGUAGES.map((language, index: number) => (
                <Row
                    onClick={() => handleChangeLanguage(language.locale)}
                    selected={currentLanguage === language?.locale}
                    key={index}
                >
                    <p>{language.name}</p>
                    <Flag code={language.flag} width={50} />
                </Row>
            ))}
        </>
    );
};

export default LanguagePage;
