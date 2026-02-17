// React and modules imports
import { useTranslation } from "react-i18next";

// Custom imports
import {
    FirstTimeModalWrapper,
    FirstTimeModalItem,
    FirstTimeModalItemTitle,
    FirstTimeModalItemDescription
} from "./firstTimeVisitorModalContent.wrappers";

const FirstTimeVisitorModalContent = () => {
    const { t: translate } = useTranslation("common");
    return (
        <FirstTimeModalWrapper>
            <FirstTimeModalItem>
                <FirstTimeModalItemTitle>{translate("common:firstTimeModal.item1.title")}</FirstTimeModalItemTitle>
                <FirstTimeModalItemDescription>
                    {translate("common:firstTimeModal.item1.description")}
                </FirstTimeModalItemDescription>
            </FirstTimeModalItem>
            <FirstTimeModalItem>
                <FirstTimeModalItemTitle>{translate("common:firstTimeModal.item2.title")}</FirstTimeModalItemTitle>
                <FirstTimeModalItemDescription>
                    {translate("common:firstTimeModal.item2.description")}
                </FirstTimeModalItemDescription>
            </FirstTimeModalItem>
            <FirstTimeModalItem>
                <FirstTimeModalItemTitle>{translate("common:firstTimeModal.item3.title")}</FirstTimeModalItemTitle>
                <FirstTimeModalItemDescription>
                    {translate("common:firstTimeModal.item3.description")}
                </FirstTimeModalItemDescription>
            </FirstTimeModalItem>
            <FirstTimeModalItem>
                <FirstTimeModalItemTitle>{translate("common:firstTimeModal.item4.title")}</FirstTimeModalItemTitle>
                <FirstTimeModalItemDescription>
                    {translate("common:firstTimeModal.item4.description")}
                </FirstTimeModalItemDescription>
            </FirstTimeModalItem>
            <FirstTimeModalItem>
                <FirstTimeModalItemTitle>{translate("common:firstTimeModal.item5.title")}</FirstTimeModalItemTitle>
                <FirstTimeModalItemDescription>
                    {translate("common:firstTimeModal.item5.description")}
                </FirstTimeModalItemDescription>
            </FirstTimeModalItem>
        </FirstTimeModalWrapper>
    );
};
export { FirstTimeVisitorModalContent };
