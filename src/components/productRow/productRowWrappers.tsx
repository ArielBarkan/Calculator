import styled from "styled-components";

const ProductRowContainer = styled.span<{ selected?: boolean }>`
    display: flex;
    flex-direction: row;
    gap: 10px; /* Adds space between elements */
    /*    justify-content: flex-start; !* Align items without stretching *!*/
    justify-content: space-around;
    padding: 0.5rem;
    border: 1px solid ${({ selected, theme }) => selected ? theme.SelectableElement.selectedBorder : "transparent"};
    border-radius: 15px;
    align-items: center;
`;

export { ProductRowContainer };