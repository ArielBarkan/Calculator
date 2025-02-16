import styled from "styled-components";

const Row = styled.div<{ selected?: boolean }>`
    padding: 1rem 2rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border: 1px solid ${({ selected, theme }) => selected ? theme.SelectableRow.selectedBorder : "transparent"};
    border-radius: 15px;
    background-color: ${({ selected, theme }) => selected ? theme.SelectableRow.selectedBackground : "transparent"};
    cursor: pointer;

    &:active {
        background-color: ${({ theme }) => theme.SelectableRow.activeBackground};
    }
`;

export { Row };