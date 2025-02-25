// React and modules imports
import { Link } from "react-router-dom";

// Custom imports
import { TitleWithBackWrapper, Title, Back } from "./titleWithBack.wrappers";
import { IconBack } from "../../styles";
import { TitleWithBackProps } from "../../types";


const TitleWithBack = (props: TitleWithBackProps) => {
    const { title, linkTo } = props;
    return (
        <TitleWithBackWrapper>
            <Back> <Link to={linkTo}><IconBack /></Link></Back>
            <Title>{title}</Title>
        </TitleWithBackWrapper>
    );
};
export { TitleWithBack };