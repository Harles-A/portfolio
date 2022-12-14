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
          {
            githubData && githubData.map(x => (
              <div key={x.id} className={styles.gitbox}>
                <p>{x.name}</p>
                <p>{x.description}</p>
                < a href={x.html_url} target="_blank" rel="noreferrer">
                    <h5 className={styles.links}> Link</h5>
                </a>
              </div>
            ))
          }
        </div>
      )
}

export default GithubProjects
