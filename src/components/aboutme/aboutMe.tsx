import React from 'react'
import styles from "./aboutMe.module.scss"

type AboutMeProps = {

}

const AboutMe: React.FC<AboutMeProps> = () => {
  return (
    <div className={styles.maincontainer}>
      About Me
    </div>
  )
}

export default AboutMe
