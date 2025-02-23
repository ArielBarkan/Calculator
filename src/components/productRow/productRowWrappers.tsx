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
    font-weight: bold;
    display: inline-block;
    transform: rotate(${({ theme }) => theme.direction === "rtl" ? "-45deg" : "45deg"}); /* Adjust angle as needed */
    white-space: nowrap;
    max-width: fit-content;

`;
export { ProductRowContainer, ProductRowsTitle };