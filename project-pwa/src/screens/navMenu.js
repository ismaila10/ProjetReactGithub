import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const NavMenu = props => {
    return(
        <NavMenuContainer>
            <Link to="/home"> Home </Link>
            <Link to="/"> Login</Link>
        </NavMenuContainer>
    );
};

const NavMenuContainer = styled.div`
    background-color: ${props => props.theme.menu};
    height: 3rem;
    padding-top: 15px;
    padding-left: 15px;
    color: white;
`

export default NavMenu;