import React from 'react'
import styles from "./aboutMe.module.scss"

type AboutMeProps = {

}

const AboutMe: React.FC<AboutMeProps> = () => {
  return (
    <div className={styles.maincontainer}>
      <h2 className={styles.aboutmebannertext}>About Me</h2>
        <p className={styles.aboutmetext}>texttext</p>
    </div>
  )
}

export default AboutMe
