import React from 'react'
import styles from "./homepage.module.scss"

type HomepageProps = {

}

const Homepage: React.FC<HomepageProps> = () => {
  return (
    <div className={styles.maincontainer}>
      <p>Home</p>
    </div>
  )
}

export default Homepage
