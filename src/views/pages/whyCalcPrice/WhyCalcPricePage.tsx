// React and modules imports
import { useTranslation } from "react-i18next";

// Custom imports
import { PageHeader } from "../../../components";
import { WhyModalWrapper, WhyItem, WhyItemTitle, WhyItemTitleItemDescription } from "./whyCalcPricePage.wrappers";


const WhyCalcPricePage = () => {
    const { t: translate } = useTranslation("common");
    return (
        <>
            <PageHeader title={translate("common:pages.whyCalcPrice.title")}
                        subTitle={translate("common:pages.whyCalcPrice.subTitle")} linkTo={"/"} />

            <WhyModalWrapper>
                <WhyItem>
                    <WhyItemTitle>
                        {translate("common:pages.whyCalcPrice.item1.title")}
                    </WhyItemTitle>
                    <WhyItemTitleItemDescription>
                        {translate("common:pages.whyCalcPrice.item1.description")}
                    </WhyItemTitleItemDescription>
                </WhyItem>
                <WhyItem>
                    <WhyItemTitle>
                        {translate("common:pages.whyCalcPrice.item2.title")}
                    </WhyItemTitle>
                    <WhyItemTitleItemDescription>
                        {translate("common:pages.whyCalcPrice.item2.description")}
                    </WhyItemTitleItemDescription>
                </WhyItem>
                <WhyItem>
                    <WhyItemTitle>
                        {translate("common:pages.whyCalcPrice.item3.title")}
                    </WhyItemTitle>
                    <WhyItemTitleItemDescription>
                        {translate("common:pages.whyCalcPrice.item3.description")}
                    </WhyItemTitleItemDescription>
                </WhyItem>
                <WhyItem>
                    <WhyItemTitle>
                        {translate("common:pages.whyCalcPrice.item4.title")}
                    </WhyItemTitle>
                    <WhyItemTitleItemDescription>
                        {translate("common:pages.whyCalcPrice.item4.description")}
                    </WhyItemTitleItemDescription>
                </WhyItem>
                <WhyItem>
                    <WhyItemTitle>
                        {translate("common:pages.whyCalcPrice.item5.title")}
                    </WhyItemTitle>
                    <WhyItemTitleItemDescription>
                        {translate("common:pages.whyCalcPrice.item5.description")}
                    </WhyItemTitleItemDescription>
                </WhyItem>
            </WhyModalWrapper>


        </>
    );
};

export default WhyCalcPricePage;