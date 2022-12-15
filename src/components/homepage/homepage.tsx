import React from 'react'
import styles from "./homepage.module.scss"

type HomepageProps = {

}

const Homepage: React.FC<HomepageProps> = () => {
  return (
    <div className={styles.maincontainer}>
      <h2 className={styles.welcomehome}>Welcome To My Portfolio</h2>
        <p className={styles.homescreentext1}>Hello!</p>
        <p className={styles.homescreentext2}>My name is Harles Asu, thank you for visiting my portfolio page.</p>
        <p className={styles.homescreentext2}>This is my first attempt at web-design, feel free to visit again in the <br></br>future to see what improvements i have made and what new things i have learned.</p>
        <p className={styles.homescreentext2}>If you have any questions feel free to send me an e-mail using the link at the bottom of the page.</p>
    </div>
  )
}

export default Homepage
