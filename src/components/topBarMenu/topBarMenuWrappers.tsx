import styled from "styled-components";


const Navbar = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: ${({ theme }) => theme.body.bgColor};
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 4px 10px ${({ theme }) => theme.BoxElement.shadowColor};
    padding-inline-start: 20px;
    height: 50px;

    > button {
        margin: 0 30px;
    }
`;

export { Navbar } ;