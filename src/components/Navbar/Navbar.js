import React from 'react'
import styles from './Navbar.module.css'
import Logo from '../Logo/Logo'
import Search from '../Search/Search'
import ButtonComponent from '../ButtonComponent/ButtonComponent'


const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div>
        <Logo />
      </div>
      <div>
        <Search placeHolder={"Search a song of your choice"}/>
      </div>
      <div>
        <ButtonComponent text={"Give Feedback"}/>
      </div>
    </nav>
  )
}

export default Navbar