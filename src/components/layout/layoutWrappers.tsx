import styled from "styled-components";

const LayoutWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const MainContent = styled.main`
    flex-grow: 1; // Ensures the content expands properly
`;

export { LayoutWrapper, MainContent };