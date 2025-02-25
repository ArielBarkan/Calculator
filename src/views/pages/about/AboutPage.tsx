// React and modules imports
import { useTranslation } from "react-i18next";

// Custom imports
import { CustomButton } from "../../../components";


const AboutPage = () => {
    const { t: translate } = useTranslation("common");


    return (
        <p style={{ padding: "5rem 0 0" }}>
            {translate("common:pages.about.title")}

            <CustomButton>Hello</CustomButton>

        </p>
    );
};

export default AboutPage;