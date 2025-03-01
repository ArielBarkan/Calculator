// React and modules imports
import styled from "styled-components";
import Modal from "react-modal";

const StyledModal = styled(Modal)<{ width?: string; height?: string; position?: string }>`
    background-color: ${({ theme }) => theme.body.bgColor};
    padding: 20px;
    border-radius: 10px;
    outline: none;
    width: ${({ width }) => width || "50%"}; /* Default width: 50% */
    height: ${({ height }) => height || "auto"}; /* Default height: auto */
    position: absolute;

    /* Dynamic Positioning */
    ${({ position }) => {
        switch (position) {
            case "top":
                return "top: 10%; left: 50%; transform: translate(-50%, 0);";
            case "bottom":
                return "bottom: 10%; left: 50%; transform: translate(-50%, 0);";
            case "left":
                return "top: 50%; left: 10%; transform: translate(0, -50%);";
            case "right":
                return "top: 50%; right: 10%; transform: translate(0, -50%);";
            default:
                return "top: 50%; left: 50%; transform: translate(-50%, -50%);"; /* Default: Center */
        }
    }}
`;

const Title = styled.h2`
    margin: 0 0 10px 0;
    text-align: center;
`;

const Content = styled.div`
    text-align: center;
`;

const CloseButton = styled.button`
    align-self: center;
    margin-top: 5px;
    padding: 8px 16px;
    background-color: ${({ theme }) => theme.buttons.primary.backgroundColor};
    color: ${({ theme }) => theme.buttons.primary.color};
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-left: auto;
    margin-right: auto;
    display: block;

    &:hover {
        background-color: ${({ theme }) => theme.buttons.primary.activeBackgroundColor};
    }
}


`;


export { StyledModal, Title, Content, CloseButton };
