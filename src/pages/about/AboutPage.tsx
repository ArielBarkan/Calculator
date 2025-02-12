import { useTranslation } from "react-i18next";


const AboutPage = () => {
    const { t: translate } = useTranslation("common");
    return (
        <p>
            {translate("pages.about.title")}
        </p>
    );
};

export { AboutPage };