import React from 'react'
import styles from './footer.module.scss'


type FooterProps = {

}

const Footer: React.FC<FooterProps> = () => {
  return (
    <div className={styles.footercontainer}>
        <a className={styles.mailiconfoot} target="_blank" rel="noreferrer" href='mailto:harles.asu@gmail.com'>
        </a>
        <a className={styles.giticonfoot} target='_blank' rel="noreferrer" href='https://github.com/Harles-A'>
        </a>
    </div>

  )
}

export default Footer
