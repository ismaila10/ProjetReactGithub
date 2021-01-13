import React from 'react';
import styled from 'styled-components'
import RepositoryForm from '../repositoryForm';

const Repository = ({ details, onDelete }) => {
    return(
        <RepositoryContainer>
            <li>
                {details.name} : {details.describe} <button onClick={() => onDelete(details.id)}>X</button>
            </li>
        </RepositoryContainer>
    )
     
}

const RepositoryContainer = styled.div `
    text-align: center;
`

export default Repository