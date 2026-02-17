// React and modules imports
import styled from "styled-components";

const LayoutWrapper = styled.div`
    margin: auto;
    display: flex;
    flex-direction: column;
`;

const MainContent = styled.main`
    flex-grow: 1;
    align-items: center;
    padding-top: 50px;
    max-width: 600px;
    margin: 0 auto;
    width: 100%;
`;

export { LayoutWrapper, MainContent };
