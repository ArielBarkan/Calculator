import styled from "styled-components";

const UnstyledButton = styled.button<{ selected?: boolean, disabled?: boolean }>`
    all: unset; // ✅ Removes default button styles
    display: inline-flex;
    cursor: pointer;
    width: auto;
    height: auto;
    align-items: center;
    border-radius: 5px; // ✅ Helps with focus visibility
    outline: 1px solid ${({ selected, theme }) => selected ? theme.SelectableElement.selectedBorder : "transparent"};
    background-color: ${({
                             selected,
                             disabled,
                             theme
                         }) => (selected && !disabled) && theme.SelectableElement.activeBackground};


    &:focus {
        outline: 2px solid #000; // ✅ Makes it visible when navigating via Tab
        outline-offset: 2px;
    }

    &:active {
        background-color: ${({
                                 selected,
                                 disabled,
                                 theme
                             }) => (selected && !disabled) && theme.SelectableElement.activeBackground};
    }
`;


export { UnstyledButton };