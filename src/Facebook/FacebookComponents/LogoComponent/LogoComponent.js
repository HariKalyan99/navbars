import React from 'react'
import styles from './LogoComponent.module.css'
import fbIcon from '../../../assets/Facebook_f_logo_(2021).svg.png'

const LogoComponent = () => {
  return (
    <div>
        <img src={fbIcon} alt='facebooklogo' className={styles.logo} /> 
    </div>
  )
}

export default LogoComponent