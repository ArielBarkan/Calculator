import styled from "styled-components";

const FirstTimeModalWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: start;
`;

const FirstTimeModalItem = styled.span`
    padding-top: 20px;

    p {
        //  background-color: green;
        display: inline; /* ✅ Ensures text flows in a single line */
    }
`;

const FirstTimeModalItemTitle = styled.p`
    font-weight: bold;
    padding-inline-end: 1rem;
`;
const FirstTimeModalItemDescription = styled.p``;

export { FirstTimeModalWrapper, FirstTimeModalItem, FirstTimeModalItemTitle, FirstTimeModalItemDescription };
