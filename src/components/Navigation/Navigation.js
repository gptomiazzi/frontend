import { 
  NavContainer,
  NavList,
  NavItem,
  NavLink 
} from "./NavigationStyled";

const Navigation = () => {
  return (
    <NavContainer>
      <NavList>
        <NavItem>
          <NavLink to="/customer">Clientes</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/employee">Funcionários</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/product">Produto</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/order">Pedido</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/productionReport">Relatório</NavLink>
        </NavItem>

        <NavItem>
          <NavLink to="/logout">Sair</NavLink>
        </NavItem>
      </NavList>
    </NavContainer>
  );
};

export default Navigation;