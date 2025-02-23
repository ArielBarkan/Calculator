import styled from "styled-components";

const ProductRowContainer = styled.span<{ selected?: boolean }>`
    display: flex;
    flex-direction: row;
    gap: 10px; /* Adds space between elements */
    justify-content: flex-start; /* Align items without stretching */
    padding: 0.5rem 0;
    border: 1px solid ${({ selected, theme }) => selected ? theme.SelectableElement.selectedBorder : "transparent"};
    border-radius: 15px;
`;

export { ProductRowContainer };