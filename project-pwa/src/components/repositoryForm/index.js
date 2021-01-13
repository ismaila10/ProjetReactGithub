import React, {useState} from 'react';
import styled from 'styled-components'
import ButtonSubmit from '../button';

const RepositoryForm = ({ onRepositoryAdd }) =>{
    const [nouveauRepo, setNouveauRepo] = useState({name: '', describe: ''})
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if(!nouveauRepo.name){
            setErrorMessage("Le nom de la repository est obligatoire");
            return
        }

        const id = new Date().getTime();
        const name = nouveauRepo.name;
        const describe = nouveauRepo.describe;

        onRepositoryAdd({id, name, describe});

        setNouveauRepo({name: '', describe: ''});
    }

    return (
        <FormRepo onSubmit={handleSubmit}>
            <div>
                <h2> Nouveau Repository</h2>
                <FormInput 
                    value={nouveauRepo.name}
                    onChange={e => setNouveauRepo({ ...nouveauRepo, name: e.target.value})}
                    type="text"
                    placeholder="Nom du repo"
                />
            </div>
            <div>
                <FormArea 
                    value={nouveauRepo.describe}
                    onChange={e => setNouveauRepo({ ...nouveauRepo, describe: e.target.value})}
                    type="textarea"
                    placeholder="Description"
                />
            </div>
            <span>{errorMessage}</span>
          <ButtonSubmit name="Ajouter" taille></ButtonSubmit>
        </FormRepo>
    )
};

const FormRepo = styled.form `
    text-align: center;
    border: 1px solid;
    border-radius: 5px;
    width: 340px;
    display: block;
    margin-top: 8%;
    margin: 0 auto;
    padding-bottom: 3%;
    float: center;
`

const FormInput = styled.input `
    padding: 5px;
    margin-top: 15px;
    margin-bottom: 10px;
    border-radius: 3px;
`

const FormArea = styled.textarea `
    padding: 5px;
    margin-top: 15px;
    margin-bottom: 10px;
    border-radius: 3px;
`

export default RepositoryForm;