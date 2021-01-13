import React from 'react';
import styled from 'styled-components'
import RepositoryForm from '../repositoryForm';

const Repository = ({ details, onDelete }) => {
    return(
        <RepositoryContainer>
            <li>
                {details.name} : {details.describe} <Button onClick={() => onDelete(details.id)}>X</Button>
            </li>
        </RepositoryContainer>
    )
     
}

const RepositoryContainer = styled.div `
    text-align: center;
`

const Button = styled.button `
    border: none;
    color: red;
    margin-left: 5px;
`

export default Repository