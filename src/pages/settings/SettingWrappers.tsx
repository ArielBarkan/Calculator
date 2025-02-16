import styled from "styled-components";

const Row = styled.div<{ selected?: boolean }>`
    padding: 1rem 2rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border: 1px solid ${({ selected }) => selected ? "black" : "transparent"};
    border-radius: 15px;
    background-color: inherit;
    transition: background-color 0.1s ease-in-out;

    &:active {
        background-color: #888888;
    }
`;

export { Row };