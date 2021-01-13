import React, { useState } from 'react';
import styled from 'styled-components';
import Repository from '../components/repository'
import RepositoryForm from '../components/repositoryForm';
import url from '../assets/add1.png'
import Logo from '../components/logo';

const Home = () => {
    const [repos, setRepos] = useState([
        { id: 1, name: "ReactProject", describe: "This is my first react project"},
        { id: 2, name: "APIDotNetCore", describe: "Net Core Framework API"}
    ]);
    const title = "Repositories";

    const handleDelete = (id) => {
        const updatedRepos = [...repos];
        const index = updatedRepos.findIndex((repo) => repo.id === id);

        updatedRepos.splice(index,1);

        setRepos(updatedRepos);
    }

    const handleAdd = (repo) => {
        const createdRepos = [...repos];
        createdRepos.push(repo);

        setRepos(createdRepos);
    }

    return(
        <HomeContainer>
            <div>
                <h1> { title } <ButtonContainer><Logo url={url} width="45px" alt="Ajout"></Logo></ButtonContainer></h1> 
                <p>
                    {repos.map((repo) => (
                       <Repository details={repo} onDelete={handleDelete}></Repository>
                    ))}
                </p>
                <RepositoryForm onRepositoryAdd={handleAdd}></RepositoryForm>
            </div>
            
        </HomeContainer>
    );
};

const HomeContainer = styled.div`
    text-align: center;
    background-color: ${props => props.theme.primary}
`

const ButtonContainer = styled.button`
    background-color: transparent;
    border: none;
    border-radius: 5px;
    padding-top: 8px;
    
`

export default Home;