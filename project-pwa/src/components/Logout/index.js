import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom';

const Logout = ({handleLogout}) => {
    const history = useHistory();
    const handleClick= () => {
        localStorage.removeItem('token');
        history.push('/')
    }

    return(
        <LogoutButton onClick={handleClick}>
            Logout
        </LogoutButton>
    )
}

const LogoutButton = styled.button `
    font-size: 1em;
    margin-right: 1em;
    padding: 0.25em 1em;
    border-radius: 3px;
    color: red;
    background-color: transparent;
    float: right
`

export default Logout;