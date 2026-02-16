import styled from "styled-components";

const Container = styled.div`
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    line-height: 1.6;
    font-family: Arial, sans-serif;
`;

const Subtitle = styled.h3`
    font-size: 1.5rem;
    font-weight: bold;
    margin-top: 20px;
`;

const Paragraph = styled.p`
    font-size: 1rem;
`;

const List = styled.ul`
    list-style-type: disc;
    padding-left: 20px;
`;

const ListItem = styled.li`
    margin-bottom: 5px;
`;

const FeaturesList = styled.ul`
    list-style-type: none;
    padding-left: 0;
    margin-top: 10px;
`;

const FeatureItem = styled.li`
    padding: 10px;
    border-radius: 5px;
    margin-bottom: 5px;
`;

export { Container, Subtitle, Paragraph, List, ListItem, FeaturesList, FeatureItem };
