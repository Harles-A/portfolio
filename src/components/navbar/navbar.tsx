import React from 'react'
import { Link } from 'react-router-dom'
import styles from './navbar.module.scss' 

type NavbarProps = {

}

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <div className={styles.container}>
      <Link className={styles.homelink} to="/"></Link>
      <Link className={styles.aboutmelink} to="/aboutme"></Link>
      <Link className={styles.cvlink} to="/cv"></Link>
      <Link className={styles.githublink} to="/github"></Link>
    </div>
  )
}

export default Navbar
