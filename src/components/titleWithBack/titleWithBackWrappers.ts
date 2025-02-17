// React imports

// Modules imports
import styled from "styled-components";
// Custom imports


const TitleWithBackWrapper = styled.div`
    display: flex;
    align-items: flex-start;
    padding: 5rem 0 1rem;
`;

const Back = styled.div`
    display: flex;
    align-items: center;
    padding: 0 1rem
`;

const Title = styled.h1`
    font-size: 1.5rem;
    margin: 0;
    text-align: center;
`;


export { TitleWithBackWrapper, Title, Back };