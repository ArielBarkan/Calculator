// Modules imports
import { useTranslation } from "react-i18next";
import { Button } from "../../../components/button";


const AboutPage = () => {
    const { t: translate } = useTranslation("common");


    return (
        <p style={{ padding: "5rem 0 0" }}>
            {translate("common:pages.about.title")}

            <Button>Hello</Button>

        </p>
    );
};

export default AboutPage;