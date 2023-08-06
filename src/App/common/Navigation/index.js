import { Item, List, StyledNavigation, StyledNavLink } from "./styled";

const Navigation = () => (
    <StyledNavigation>
        <List>
            <Item>
                <StyledNavLink to="/zadania">Zadania</StyledNavLink>
            </Item>
            <Item>
                <StyledNavLink to="/author">O autorze</StyledNavLink>
            </Item>
        </List>
    </StyledNavigation>
);

export default Navigation;