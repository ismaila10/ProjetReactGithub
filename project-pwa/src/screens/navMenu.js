import React, { useEffect } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import { useHistory } from 'react-router-dom';

const NavMenu = props => {
    const history = useHistory();
    const isToken = localStorage.getItem('token');

    const handleLogout = () => {
        localStorage.removeItem('token');
        history.push('/')
    }

    return(
        <NavMenuContainer>
            
            {isToken ? (
                <div>
                    <Link to="/home"> Home </Link>
                    <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
                </div>
            ) : null}
            
        </NavMenuContainer>
    );
};

const LogoutButton = styled.button `
    padding: 12px;
    background-color: green;
`

const NavMenuContainer = styled.div`
    background-color: ${props => props.theme.menu};
    min-height: 3rem;
    padding-top: 15px;
    padding-left: 15px;
    color: white;
`

export default NavMenu;