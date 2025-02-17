// Modules imports
import { useTranslation } from "react-i18next";
import { Button } from "../../../components/button";


const AboutPage = () => {
    const { t: translate } = useTranslation("common");


    return (
        <p style={{ paddingTop: "5rem" }}>
            {translate("common:pages.about.title")}

            <Button>Hello</Button>

        </p>
    );
};

export default AboutPage;