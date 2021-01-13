import React, { useEffect } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import Logout from '../components/Logout';

const NavMenu = () => {
    //const history = useHistory();
    const isToken = localStorage.getItem('token');

    const handleLogout = () => {
        
    }

    return(
        <NavMenuContainer>
            
            {isToken ? (
                <div>
                    <Link to="/home"> Home </Link>
                    <Logout></Logout>
                </div>
            ) : null}
            
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