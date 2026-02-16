// React and modules imports
import { useTranslation } from "react-i18next";

// Custom imports
import { PageHeader } from "../../../components";
import { QRShareApp } from "../../../assets";
import { QRImage } from "./shareQRPage.wrappers";

const ShareQRPage = () => {
    const { t: translate } = useTranslation("common");

    return (
        <>
            <PageHeader
                title={translate("common:pages.share.title")}
                subTitle={translate("common:pages.share.subTitle")}
                linkTo={"/"}
            />

            <QRImage src={QRShareApp} alt={"QR Share"} />
        </>
    );
};

export default ShareQRPage;
