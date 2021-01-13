import React, {useState} from 'react';

const RepositoryForm = ({ onRepositoryAdd }) =>{
    const [nouveauRepo, setNouveauRepo] = useState({name: '', describe: ''})

    const handleSubmit = (event) => {
        event.preventDefault();

        const id = new Date().getTime();
        const name = nouveauRepo.name;
        console.log(name);
        const describe = nouveauRepo.describe;

        onRepositoryAdd({id, name, describe});

        setNouveauRepo({name: '', describe: ''});
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                value={nouveauRepo.name}
                onChange={e => setNouveauRepo({ ...nouveauRepo, name: e.target.value})}
                type="text"
                placeholder="Nom du repo"
            />
            <input 
                value={nouveauRepo.describe}
                onChange={e => setNouveauRepo({ ...nouveauRepo, describe: e.target.value})}
                type="text"
                placeholder="Description"
            />
            <button>Créer</button>
        </form>
    )
};

export default RepositoryForm;