// React and modules imports
import { Link } from "react-router-dom";

// Custom imports
import { PageHeaderWrapper, TitleRow, Title, SubTitle, Back } from "./pageHeader.wrappers";
import { IconBack } from "../../styles";
import { PageHeaderProps } from "../../types";

const PageHeader = (props: PageHeaderProps) => {
    const { title, subTitle, linkTo } = props;

    return (
        <PageHeaderWrapper>
            <TitleRow>
                {linkTo && (
                    <Back>
                        <Link to={linkTo}><IconBack /></Link>
                    </Back>
                )}
                <Title>{title}</Title>
            </TitleRow>
            <SubTitle alignStart={!linkTo}>{subTitle}</SubTitle>
        </PageHeaderWrapper>
    );
};

export { PageHeader };
