// Modules imports
import { useTranslation } from "react-i18next";
import { CustomButton } from "../../../components/customButton";


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