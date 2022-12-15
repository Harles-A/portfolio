import React from 'react'
import styles from "./cv.module.scss"

type CvProps = {

}

const Cv: React.FC<CvProps> = () => {
  return (
    <div className={styles.cvmaincontainer}>
      <h2 className={styles.cvbannertext}>CV</h2>
        <p className={styles.cvmaintext1}>Education</p>
        <p className={styles.cvmaintext2}>08/2021 - &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Information and Communication Technology - Programming, Varia, Finland</p>
        <p className={styles.cvmaintext2}>03/2021 - 08/2021 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Integration and Finnish Language Training, CareeriaPlus Oy, Vantaa</p>
        <p className={styles.cvmaintext2}>09/2020 - 03/2021 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Integration and Finnish Language Training, Arffman Oy, Vantaa</p>

        <p className={styles.cvmaintext3}>Language Skills</p> 
        <p className={styles.cvmaintext2}>Estonian - Native</p>
        <p className={styles.cvmaintext2}>English - Excellent</p>
        <p className={styles.cvmaintext2}>Finnish - B1.1+</p>   
    </div>
  )
}

export default Cv
