// React and modules imports
import styled from "styled-components";

const PageHeaderWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start; /* Align items to start */
    padding: 2rem 1rem 1rem;
`;

// ✅ New Wrapper to Align Back and Title Horizontally
const TitleRow = styled.div`
    display: flex;
    align-items: center; /* Vertically center Back and Title */
    width: 100%;
`;

const Back = styled.div`
    display: flex;
    padding: 0 0 0 .5rem;
    //background-color: yellow;
`;

const Title = styled.h1`
    margin: 0;
    flex-grow: 1;
    //background-color: green;
`;

const SubTitle = styled.p<{ $alignStart: boolean }>`
    margin: 0;
    margin-inline-start: ${({ $alignStart }) => ($alignStart) ? "0" : "2rem"};
    width: 100%; /* Ensures it takes full width */

`;

export { PageHeaderWrapper, TitleRow, Title, SubTitle, Back };
