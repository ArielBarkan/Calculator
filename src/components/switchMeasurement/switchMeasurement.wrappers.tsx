// React and modules imports
import styled from "styled-components";

// Custom imports
import { UnstyledButton } from "../buttonUnstyled";

const MeasurementWrapper = styled.span`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 1rem;

`;
const MeasurementItemContainer = styled(UnstyledButton)`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 100px;
    height: 100px;
    padding: 0 5px;
    background-color: rgba(122, 117, 117, 0.74);
`;

const MeasurementTitle = styled.p`
    font-size: 1rem;
    font-weight: bold;
    margin: 0;
`;
const MeasurementExplanation = styled.p`
    font-size: .7rem;
    margin: 0;
`;


export { MeasurementWrapper, MeasurementItemContainer, MeasurementTitle, MeasurementExplanation };

