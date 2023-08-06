import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledNavigation = styled.nav`
    background-color: ${({ theme }) => theme.color.teal};
    
`;

export const List = styled.ul`

    list-style-type: none;
    display: flex;
    justify-content: center;
    padding-left: 0;
    align-item: center;
    
`;

export const Item = styled.li`
    padding: 20px;
    
`;

export const StyledNavLink = styled(NavLink)`
    text-decoration: none;
    color: ${({ theme }) => theme.color.white};

    &.active {
        font-weight: bold;
    }
`;