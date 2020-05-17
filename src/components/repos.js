import React, { useEffect, useState } from 'react'
import Repo from './repo'

export default () => {

    const [repos, setRepos] = useState([])
    const [reposCount, setReposCount] = useState([])
    useEffect(() => {
        const data = sessionStorage.getItem("repos");
        let myRepos
        if (data) {
            myRepos = JSON.parse(data)

            setReposCount(myRepos.length)
            return setRepos(myRepos)
        }


        async function fetchRepos() {
            const response = await fetch("https://api.github.com/users/MarcoLF05/repos")
            myRepos = await response.json();

            sessionStorage.setItem("repos", JSON.stringify(myRepos))
            
            setReposCount(myRepos.length)
            myRepos = myRepos.slice(1,13)
            setRepos(myRepos)

            
        }
        fetchRepos();

    }, [])
    return (
        <div className="max-w-4xl mx-auto mt-12">
            <header className="text-center">
                <h2 className="text-3xl font-bold">Algunos de mis proyectos</h2>
                <p>Codigos en github</p>
            </header>
            
            <ul className="repos-list">
                {
                    repos.map((repo) => {
                        return (
                            <li>
                                <Repo repo={repo} key={repo.id} />
                            </li>
                        )
                    })
                }
            </ul>
            <div className="mt-8 text-center">
                <a href="https://github.com/MarcoLF05" className="btnEnviar" target="_blank" rel="noopener noreferrer"> 
                Ver mas en GITHUB ({reposCount}) </a>       
            </div>
        </div>
    )

}