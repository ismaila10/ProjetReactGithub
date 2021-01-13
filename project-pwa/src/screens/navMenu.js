import React, { useState } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import Logout from '../components/Logout';
import Logo from '../components/logo';
import url from '../assets/logo.png';
import { useHistory } from 'react-router-dom';


const NavMenu = () => {
    const history = useHistory();
    const [isToken, setToken] = useState(localStorage.getItem('token'));
    const onClick= () => {
        localStorage.removeItem('token');
        setToken(null);
        history.push('/')
    }

    return(
        <NavMenuContainer>
            <div>
                <Link to="/home"> <Logo url={url} alt="Logo"></Logo> </Link>
                {isToken ? (
                    <Logout handleClick={onClick}></Logout>
                )//Ne s'affiche qu'aprés refresh de la page (apres auth) malgrés le state comme je vous avais montré
                 : null}
                
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