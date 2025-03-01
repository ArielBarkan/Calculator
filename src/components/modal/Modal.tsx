// React and modules imports
import React from "react";
import Modal from "react-modal";

// Custom imports
import { StyledModal, Title, Content, CloseButton } from "./modal.wrappers";
import { ModalProps } from "../../types";


Modal.setAppElement("#root"); // Ensure accessibility


const CustomModal: React.FC<ModalProps> = ({
                                               isOpen,
                                               onClose,
                                               title,
                                               children,
                                               closeButtonText = "Close",
                                               width,
                                               height,
                                               position = "center" // Default position
                                           }) => {
    return (
        <StyledModal
            isOpen={isOpen}
            onRequestClose={onClose}
            contentLabel={title || "Modal"}
            shouldCloseOnOverlayClick={true}
            width={width}
            height={height}
            position={position}
            style={{
                overlay: {
                    backgroundColor: "rgba(0, 0, 0, 0.6)", // Change color directly
                    backdropFilter: "blur(5px)" // Optional blur effect
                }
            }}
        >

            {title && <Title>{title}</Title>}
            <Content>{children}</Content>
            <CloseButton onClick={onClose}>{closeButtonText}</CloseButton>
        </StyledModal>
    );
};

export { CustomModal };

