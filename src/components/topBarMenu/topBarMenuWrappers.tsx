import styled from "styled-components";


const Navbar = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: ${({ theme }) => theme.body.bgColor}; // Uses theme
    padding-block-start: 0.5rem;
    padding-top: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;


export { Navbar } ;