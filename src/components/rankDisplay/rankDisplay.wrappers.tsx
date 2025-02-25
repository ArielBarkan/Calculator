// React and modules imports
import styled from "styled-components";

const RankWrapper = styled.span<{ color: string; $dimension: number }>`
    background-color: ${({ color }) => color};
    width: ${({ $dimension }) => `${$dimension}px`};
    height: ${({ $dimension }) => `${$dimension}px`};
    min-width: ${({ $dimension }) => `${$dimension}px`};

    /* Center content */
    display: flex;
    align-items: center;
    justify-content: center;

    /* Optional: Make it a circle */
    border-radius: 50%;
`;

const Rank = styled.p`

    font-weight: bold;
    color: black;
    margin: 0;
`;

export { RankWrapper, Rank };
