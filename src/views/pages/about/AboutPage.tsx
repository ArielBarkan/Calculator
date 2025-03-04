// React and modules imports
import { useTranslation } from "react-i18next";

// Custom imports
import { PageHeader } from "../../../components";
import { FirstTimeVisitorModalContent } from "../../../components/firstTimeVisitorModalContent";


const AboutPage = () => {
    const { t: translate } = useTranslation("common");


    return (
        <>
            <PageHeader title={translate("common:pages.about.title")}
                        subTitle={translate("common:pages.about.subTitle")} linkTo={"/"} />

            <FirstTimeVisitorModalContent />
        </>
    );
};

export default AboutPage;