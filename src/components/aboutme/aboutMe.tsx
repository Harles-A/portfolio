import React from 'react'
import styles from "./aboutMe.module.scss"

type AboutMeProps = {

}

const AboutMe: React.FC<AboutMeProps> = () => {
  return (
    <div className={styles.maincontainer}>
      <h2 className={styles.aboutmebannertext}>About Me</h2>
      <p className={styles.aboutmetext}>I'm currently studying programming at Varia in Vantaa.</p>
      <p className={styles.aboutmetext2}>I hope to continue developing my skills in various coding languages</p>
      <p className={styles.aboutmetext2}>In the future i hope to work as a game developer or programmer.</p>
    </div>
  )
}

export default AboutMe
