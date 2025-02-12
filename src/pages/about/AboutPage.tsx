// Modules imports
import { useTranslation } from "react-i18next";
import { Button } from "../../components/button";


const AboutPage = () => {
    const { t: translate } = useTranslation("common");


    return (
        <p>
            {translate("pages.about.title")}

            <Button>Hello</Button>

        </p>
    );
};

export { AboutPage };