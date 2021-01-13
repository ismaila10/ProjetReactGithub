import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import Logout from '../components/Logout';
import Logo from '../components/logo';
import url from '../assets/logo.png';


const NavMenu = () => {
    //const history = useHistory();
    //const isToken = localStorage.getItem('token');

    return(
        <NavMenuContainer>
            
         
                <div>
                    <Link to="/home"> <Logo url={url} alt="Logo"></Logo> </Link>
                    <Logout></Logout>
                </div>
            
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