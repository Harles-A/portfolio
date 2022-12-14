import React from 'react'
import styles from "./homepage.module.scss"

type HomepageProps = {

}

const Homepage: React.FC<HomepageProps> = () => {
  return (
    <div className={styles.maincontainer}>
      <h2 className={styles.welcomehome}>Welcome To My Portfolio</h2>
        <p className={styles.homescreentext}>texttext</p>
    </div>
  )
}

export default Homepage
