import styled from "styled-components";

const ProductRowContainer = styled.span<{ selected?: boolean }>`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr auto; /* Same structure for header & rows */
    align-items: center;
    gap: 10px;
    padding: 10px;
    border-bottom: 1px solid ${({
                                    selected,
                                    theme
                                }) => selected ? theme.SelectableElement.selectedBorder : "black"};
    border-top: 1px solid ${({ selected, theme }) => selected ? theme.SelectableElement.selectedBorder : "black"};

`;

const ProductRowsTitle = styled.p`
    width: fit-content;
    border: 1px solid black;
    font-weight: bold;

`;
export { ProductRowContainer, ProductRowsTitle };