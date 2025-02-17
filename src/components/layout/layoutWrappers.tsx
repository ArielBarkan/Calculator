import styled from "styled-components";

const LayoutWrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-height: calc(100vh - 60px);
`;

const MainContent = styled.main`
    flex-grow: 1; // Ensures the content expands properly
    padding: 20px;
`;

export { LayoutWrapper, MainContent };