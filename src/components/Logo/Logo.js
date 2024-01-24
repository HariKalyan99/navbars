import React from 'react'
import LogoIcon from '../../assets/Group 3748.png';
import styles from './Logo.module.css'

const Logo = () => {
  return (
    <div>
        <img src={LogoIcon} alt='spotify logo' className={styles.logo}/>
    </div>
  )
}

export default Logo