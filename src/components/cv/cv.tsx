import React from 'react'
import styles from "./cv.module.scss"

type CvProps = {

}

const Cv: React.FC<CvProps> = () => {
  return (
    <div className={styles.cvmaincontainer}>
      <h2 className={styles.cvbannertext}>CV</h2>
        <p className={styles.cvmaintext}>texttext</p>
    </div>
  )
}

export default Cv
