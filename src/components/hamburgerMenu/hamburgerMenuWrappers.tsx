import { Link } from "react-router-dom";
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

const MenuIcon = styled.div`
    font-size: 2rem;
    cursor: pointer;
    padding-inline-start: 20px;
`;

const Menu = styled.div<{ open: boolean }>`
    z-index: 10000;
    position: fixed;
    top: 0;
    ${({ theme }) => (theme.direction === "rtl" ? "left: 0;" : "right: 0;")}
    width: 250px;
    height: 100vh;
    background: ${({ theme }) => theme.body.bgColor};
    box-shadow: ${({ theme }) => (theme.direction === "rtl" ? "5px 0px 10px rgba(0, 0, 0, 0.2);" : "-5px 0px 10px rgba(0, 0, 0, 0.2);")};
    transform: ${({
                      open,
                      theme
                  }) => (open ? "translateX(0)" : theme.direction === "rtl" ? "translateX(-100%)" : "translateX(100%)")};
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