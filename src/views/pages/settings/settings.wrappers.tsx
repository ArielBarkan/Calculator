// React and modules imports
import styled from "styled-components";

const Row = styled.div<{ selected?: boolean; disabled?: boolean }>`
    padding: 1rem 2rem;
    margin: 0;
    border-bottom: 1px solid ${({ theme }) => theme.BoxElement.shadowColor};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border: 1px solid ${({ selected, theme }) => (selected ? theme.SelectableElement.selectedBorder : "transparent")};
    border-radius: 15px;
    background-color: ${({ selected, theme }) =>
        selected ? theme.SelectableElement.selectedBackground : "transparent"};
    cursor: ${({ selected, disabled }) => (selected || disabled ? "default" : "pointer")};

    &:active {
        background-color: ${({ selected, disabled, theme }) =>
            !selected && !disabled && theme.SelectableElement.activeBackground};
    }
`;

const DoubleLineWrapper = styled.span`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`;

const TopLine = styled.span``;
const BottomLine = styled.span`
    padding: 0.5rem;
`;

export { Row, DoubleLineWrapper, TopLine, BottomLine };
