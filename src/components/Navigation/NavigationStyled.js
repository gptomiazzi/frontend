import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavContainer = styled.nav`
  background-color: #333;
  padding: 10px;
`;

export const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: space-around;
`;

export const NavItem = styled.li`
  margin: 0;
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;