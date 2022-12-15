import React, { useEffect, useState } from 'react'
import { IRepo } from '../types/githubData'
import styles from "./githubProjects.module.scss"

const githubEndpoint = "https://api.github.com/users/Harles-A/repos"

type GithubProjectsProps = {

}

const GithubProjects: React.FC<GithubProjectsProps> = () => {
    const [githubData, setGithubData] = useState<IRepo[]>([])

     useEffect(() => {
       fetch(githubEndpoint)
         .then(x => x.json())
         .then(x => setGithubData(x))
     }, [])

    return (
        <div className={styles.gitmaincontainer} >
            <h2 className={styles.gitbannertext}>GitHub Projects</h2>
              <p className={styles.gitmaintext}>These are my GitHub projects. Feel free to visit them using the links on the left side of the page.</p>
          {
            githubData && githubData.map(x => (
              <div key={x.id} className={styles.gitbox}>
                <p className={styles.gitname}>{x.name}</p>
                <p className={styles.gitdesc}>{x.description}</p>
                <a href={x.html_url} target="_blank" rel="noreferrer" className={styles.links}>
                  
                </a>
              </div>
            ))
          }
        </div>
      )
}

export default GithubProjects
