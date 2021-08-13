import React, { useEffect, useState } from 'react';

//#Comments

// Para a funcao nao ser executada direto:
// onclick={(() =>  funcao())}

// useEffect(param1, param2)
// param1 é uma funcao que será executada
// quando o param2 for alterado (param2 é uma variavel)

// !repo.favorite funciona como um toggle.

//.filter() espera um booleano
export default function App() {

    const [repositories, setRepositories] = useState([])

    useEffect(async () => {
        const response = await fetch('https://api.github.com/users/LucasRFiori/repos');
        const data = await response.json();

        setRepositories(data);
    }, []) 

    useEffect(() => {
        const filtered = repositories.filter( repo => repo.favorite)

        document.title = `Você tem ${filtered.length} favoritos`
    }, [repositories])
    
    function handleFavorite(id) {
        const newRepositories = repositories.map(repo => {
            return repo.id === id ? {... repo, favorite: !repo.favorite} : repo
        })

        setRepositories(newRepositories);
    }
    return(
        <>
        <ul>
            {repositories.map( repo =>
                <li key={repo.id}>
                    {repo.name}
                    {repo.favorite && <span>(Favorito)</span>}
                    <button onClick={() => handleFavorite(repo.id)}>Favoritar</button>  
                </li>  
            )}
        </ul>
        </>
    )
}