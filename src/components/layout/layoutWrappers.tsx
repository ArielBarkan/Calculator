import styled from "styled-components";

const LayoutWrapper = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    min-height: calc(100vh - 50px); /* Makes sure it always fills the viewport */
`;

const MainContent = styled.main`
    flex-grow: 1; /* Takes up remaining space */
    //display: flex; /* Enables better centering if needed */
    //  justify-content: center; /* Center horizontally */
    align-items: center; /* Center vertically */
`;

export { LayoutWrapper, MainContent };
