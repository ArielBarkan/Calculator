import styled from "styled-components";


const WhyModalWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
`;

const WhyItem = styled.span`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    p {
        padding: 0;
        margin: 0;
    }
`;

const WhyItemTitle = styled.p`
    font-weight: bold;

`;
const WhyItemTitleItemDescription = styled.p`

`;

export { WhyModalWrapper, WhyItem, WhyItemTitle, WhyItemTitleItemDescription };