// React and modules imports
import styled from "styled-components";


const NumericKeyboardWrapper = styled.div`
    direction: ltr;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
    max-width: 250px;
    margin: auto;
`;

const NumericKeyButton = styled.button`
    padding: 15px;
    font-size: 20px;
    cursor: pointer;
    border: none;
    background-color: #f0f0f0;

    &:hover {
        background-color: #dcdcdc;
    }
`;

const TemporaryInputDisplay = styled.input`
    width: 100%;
    padding: 10px;
    font-size: 20px;
    text-align: center;
    margin-bottom: 10px;
`;

export { NumericKeyboardWrapper, NumericKeyButton, TemporaryInputDisplay };