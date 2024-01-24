import React from 'react'
import bootstrapIcon from '../../../assets/png-clipart-bootstrap-full-logo-tech-companies-thumbnail.png'
import styles from './LogoComponent.module.css'


const LogoComponent = () => {
  return (
    <div>
        <img src={bootstrapIcon} alt='bootstrapIcon' className={styles.logo}/>
    </div>
  )
}

export default LogoComponent