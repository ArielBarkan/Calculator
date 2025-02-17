import { Link } from "react-router-dom";
import styled from "styled-components";


const Navbar = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: ${({ theme }) => theme.body.bgColor}; // Uses theme
    padding: 1rem 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

const MenuIcon = styled.div`
    font-size: 2rem;
    cursor: pointer;
`;

const Menu = styled.div<{ open: boolean }>`
    z-index: 100000000;
    position: fixed;
    top: 0;
    right: 0;
    width: 250px;
    height: 100vh;
    background: ${({ theme }) => theme.body.bgColor};
    box-shadow: -5px 0 10px rgba(0, 0, 0, 0.2);
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    transition: transform 0.3s ease-in-out;
    display: flex;
    flex-direction: column;
    padding: 2rem;
`;

const CloseIcon = styled.div`
    font-size: 2rem;
    align-self: flex-end;
    cursor: pointer;
`;

const MenuItem = styled(Link)`
    padding: 1rem 0;
    text-decoration: none;
    font-size: 1.2rem;
    color: ${({ theme }) => theme.body.fontColor};
`;

export { Navbar, MenuIcon, Menu, CloseIcon, MenuItem };