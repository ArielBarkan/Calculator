import styled from "styled-components";


const ButtonContainer = styled.button`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 10px 16px;
    border: none;
    background-color: #007bff;
    color: white;
    font-size: 16px;
    border-radius: 5px;
    cursor: pointer;

    &:disabled {
        cursor: not-allowed;
        opacity: 0.3;
    }

    &:hover {
        background-color: #0056b3;
    }
`;


export { ButtonContainer };
