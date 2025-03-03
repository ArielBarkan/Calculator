// React and modules imports
import styled from "styled-components";

const ProductRowContainer = styled.span<{ selected?: boolean }>`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    gap: 10px;
    padding: 10px;
    background-color: ${({
                             selected,
                             theme
                         }) => selected ? theme.SelectableElement.activeBackground : "inherit"};;
`;

const ProductRowsTitle = styled.span<{ width?: number }>`
    width: ${({ width }) => width ? `${width}px` : "30px"};
    white-space: nowrap;

    display: flex;
    flex-direction: column;
    margin: 0;
    text-align: justify-all;

    p {
        padding: 0;
        margin: 0;
    }
`;
const ProductRowsItem = styled.span<{ width?: number }>`
    width: ${({ width }) => width ? `${width}px` : "30px"};
`;

export { ProductRowContainer, ProductRowsTitle, ProductRowsItem };