import styled from "styled-components";

const ProductRowContainer = styled.span<{ selected?: boolean }>`
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

const ProductRowsTitle = styled.span`
    font-weight: bold;
    white-space: nowrap;
    max-width: fit-content;
    display: flex;
    flex-direction: column;
    margin: 0;
    text-align: center;

    p {
        padding: 0;
        margin: 0;
    }
`;
export { ProductRowContainer, ProductRowsTitle };