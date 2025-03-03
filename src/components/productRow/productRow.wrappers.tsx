// React and modules imports
import styled from "styled-components";

const ProductRowContainer = styled.tr<{ selected?: boolean }>`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr auto; /* Same structure for header & rows */
    align-items: center;
    gap: 10px;
    padding: 10px;
    background-color: ${({
                             selected,
                             theme
                         }) => selected ? theme.SelectableElement.activeBackground : "inherit"};;
`;

const ProductRowsTitle = styled.td`
    p {
        padding: 0;
        margin: 0;
    }
`;

const ProductTd = styled.td``;
export { ProductRowContainer, ProductRowsTitle, ProductTd };