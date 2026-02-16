// Custom imports
import { ButtonContainer } from "./iconButton.wrappers";
import { IconButtonProps } from "../../types";

const IconButton = (props: IconButtonProps) => {
    const { label, icon, disabled, returnFunction } = props;
    return (
        <ButtonContainer onClick={returnFunction} {...{ disabled }}>
            {icon}
            <span>{label}</span>
        </ButtonContainer>
    );
};

export { IconButton };
