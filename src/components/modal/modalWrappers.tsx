import styled from "styled-components";
import Modal from "react-modal";

const StyledModal = styled(Modal)`
    background-color: ${({ theme }) => theme.body.bgColor};
    max-width: 400px;
    padding: 20px;
    margin: auto;
    border-radius: 10px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    outline: none;
`;

const Title = styled.h2`
    margin: 0 0 10px;
    font-size: 20px;
`;

const Content = styled.div`
    font-size: 16px;
    margin-bottom: 15px;
`;

const CloseButton = styled.button`
    padding: 10px;
    background: #2196f3;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    width: 100%;
    text-align: center;

    &:hover {
        background: #1976d2;
    }
`;

export { StyledModal, Title, Content, CloseButton };
