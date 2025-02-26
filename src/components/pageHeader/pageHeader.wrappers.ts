// React and modules imports
import styled from "styled-components";

const PageTitleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start; /* Align items to start */
    padding: 2rem 0 1rem;
`;

// ✅ New Wrapper to Align Back and Title Horizontally
const TitleRow = styled.div`
    display: flex;
    align-items: center; /* Vertically center Back and Title */
    gap: 1rem; /* Adds space between Back and Title */
    width: 100%;
`;

const Back = styled.div`
    display: flex;

    padding: 0 1rem;
`;

const Title = styled.h1`
    margin: 0;
    flex-grow: 1; /* Allows title to take available space */
`;

const SubTitle = styled.p`
    margin: 0;
    width: 100%; /* Ensures it takes full width */
`;

export { PageTitleWrapper, TitleRow, Title, SubTitle, Back };
