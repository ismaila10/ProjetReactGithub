import React, { useState } from 'react';
import styled from 'styled-components';
import Repository from '../components/repository'
import RepositoryForm from '../components/repositoryForm';

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
                <h1> { title } <button>+</button> </h1> 
                <ul>
                    {repos.map((repo) => (
                       <Repository details={repo} onDelete={handleDelete}></Repository>
                    ))}
                </ul>
                <RepositoryForm onRepositoryAdd={handleAdd}></RepositoryForm>
            </div>
            
        </HomeContainer>
    );
};

const HomeContainer = styled.div`
    text-align: center
`

export default Home;