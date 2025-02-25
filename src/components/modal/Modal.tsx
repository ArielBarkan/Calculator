import React from "react";
import Modal from "react-modal";

import { StyledModal, Title, Content, CloseButton } from "./modal.wrappers";
import { ModalProps } from "../../types";

Modal.setAppElement("#root"); // Ensure accessibility


const CustomModal: React.FC<ModalProps> = ({ isOpen, onClose, title, children, closeButtonText = "Close" }) => {
    return (
        <StyledModal
            isOpen={isOpen}
            onRequestClose={onClose}
            contentLabel={title || "Modal"}
            shouldCloseOnOverlayClick={true}
        >
            {title && <Title>{title}</Title>}
            <Content>{children}</Content>
            {/*   <CloseButton onClick={onClose}>{closeButtonText}</CloseButton>*/}
        </StyledModal>
    );
};

export { CustomModal };
