import React from 'react'
import { Link } from 'react-router-dom'
import styles from './navbar.module.scss' 

type NavbarProps = {

}

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <div className={styles.container}>
      <Link to="/">Home</Link>
      <Link to="/aboutme">About Me</Link>
      <Link to="/cv">CV</Link>
      <Link to="/github">GitHub</Link>
    </div>
  )
}

export default Navbar
