// React and modules imports
import { Link } from "react-router-dom";

// Custom imports
import { PageTitleWrapper, TitleRow, Title, SubTitle, Back } from "./pageHeader.wrappers";
import { IconBack } from "../../styles";
import { PageHeaderProps } from "../../types";

const PageHeader = (props: PageHeaderProps) => {
    const { title, subTitle, linkTo } = props;

    return (
        <PageTitleWrapper>
            <TitleRow>
                {linkTo && (
                    <Back>
                        <Link to={linkTo}><IconBack /></Link>
                    </Back>
                )}
                <Title>{title}</Title>
            </TitleRow>
            <SubTitle>{subTitle}</SubTitle>
        </PageTitleWrapper>
    );
};

export { PageHeader };
