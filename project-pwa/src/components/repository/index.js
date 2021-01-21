import React from 'react';
import styled from 'styled-components'
import url from '../../assets/delete.png'
import Logo from '../logo';

const Repository = ({ details, onDelete }) => {
    return(
        <RepositoryContainer>
            <li>
                <RepositorySpan>{details.name}</RepositorySpan> : " {details.describe} " <Button onClick={() => onDelete(details.id)}><Logo width="35px" url={url}></Logo></Button>
            </li>
        </RepositoryContainer>
    )
     
}

const RepositoryContainer = styled.div `
    text-align: center;
    padding: 8px;
`

const RepositorySpan = styled.span `
    font-weight: bold;
`

const Button = styled.button `
    border: none;
    background-color: transparent;
`

export default Repository