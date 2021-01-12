import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import { useHistory } from 'react-router-dom';

const NavMenu = props => {
    const history = useHistory();

    const handleLogout = () => {
        localStorage.removeItem('token');
        history.push('/')
    }

    return(
        <NavMenuContainer>
            <Link to="/home"> Home </Link>
        </NavMenuContainer>
    );
};

const NavMenuContainer = styled.div`
    background-color: ${props => props.theme.menu};
    min-height: 3rem;
    padding-top: 15px;
    padding-left: 15px;
    color: white;
`

export default NavMenu;