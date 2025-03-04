// React and modules imports
import { useTranslation } from "react-i18next";

// Custom imports
import { PageHeader } from "../../../components";
import { Container, Subtitle, Paragraph, List, ListItem, FeaturesList, FeatureItem } from "./whyWePage.wrappers";


const WhyWePage = () => {
    const { t: translate } = useTranslation("common");


    return (
        <>
            <PageHeader title={translate("common:pages.whyWeCreatedCalcPrice.title")}
                        subTitle={translate("common:pages.whyWeCreatedCalcPrice.intro")} linkTo={"/"} />
            <Container>

                {/* Problem Section */}
                <Subtitle>{translate("common:pages.whyWeCreatedCalcPrice.problem.description")}</Subtitle>
                <Paragraph>{translate("common:pages.whyWeCreatedCalcPrice.problem.example")}</Paragraph>

                {/* Real Sizes Section */}
                <Subtitle>{translate("common:pages.whyWeCreatedCalcPrice.realSizes.title")}</Subtitle>
                <Paragraph>{translate("whyWeCreatedCalcPrice.realSizes.description")}</Paragraph>
                <List>
                    <ListItem>{translate("common:pages.whyWeCreatedCalcPrice.realSizes.examples.cereal")}</ListItem>
                    <ListItem>{translate("common:pages.whyWeCreatedCalcPrice.realSizes.examples.shampoo")}</ListItem>
                    <ListItem>{translate("common:pages.whyWeCreatedCalcPrice.realSizes.examples.dishSoap")}</ListItem>
                </List>

                {/* Solution Section */}
                <Subtitle>{translate("common:pages.whyWeCreatedCalcPrice.solution.title")}</Subtitle>
                <Paragraph>{translate("common:pages.whyWeCreatedCalcPrice.solution.description")}</Paragraph>

                {/* Features List */}
                <FeaturesList>
                    <FeatureItem>{translate("common:pages.whyWeCreatedCalcPrice.solution.features.free")}</FeatureItem>
                    <FeatureItem>{translate("common:pages.whyWeCreatedCalcPrice.solution.features.noSignup")}</FeatureItem>
                    <FeatureItem>{translate("common:pages.whyWeCreatedCalcPrice.solution.features.noTracking")}</FeatureItem>
                    <FeatureItem>{translate("common:pages.whyWeCreatedCalcPrice.solution.features.realTime")}</FeatureItem>
                </FeaturesList>

                {/* Conclusion */}
                <Paragraph><strong>{translate("common:pages.whyWeCreatedCalcPrice.solution.conclusion")}</strong></Paragraph>
            </Container>
        </>
    );
};

export default WhyWePage;