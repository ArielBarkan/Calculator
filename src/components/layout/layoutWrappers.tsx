import styled from "styled-components";

const LayoutWrapper = styled.div`
    margin: auto;
    /* max-width: var(--max-width);
     min-height: calc(100vh - var(--navbar-height));*/
    display: flex;
    flex-direction: column;
    //border: 1px solid black;

`;

const MainContent = styled.main`
    flex-grow: 1;
    align-items: center;
`;

export { LayoutWrapper, MainContent };
//       --navbar-height: 50px;
//         --max-width: 600px;