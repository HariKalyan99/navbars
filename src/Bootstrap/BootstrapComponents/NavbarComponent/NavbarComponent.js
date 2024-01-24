import React from 'react'
import styles from './NavbarComponent.module.css'
import ButtonComponent from '../ButtonComponent/ButtonComponent'
import LogoComponent from '../LogoComponent/LogoComponent'
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import TagIcon from '@mui/icons-material/Tag';
import ModelTrainingIcon from '@mui/icons-material/ModelTraining';


const NavbarComponent = () => {

  return (
    <nav className={styles.bootstrapNav}>
        <div>
            <ul className={styles.logoandhome}>
                <li>
                    <LogoComponent />
                </li>
                <li><a href='https://getbootstrap.com/' className={styles.anchor}>Home</a></li>
                <li><a href='https://getbootstrap.com/' className={styles.anchor}>Documentation</a></li>
                <li><a href='https://getbootstrap.com/' className={styles.anchor}>Examples</a></li>
                <li><a href='https://getbootstrap.com/' className={styles.anchor}>Icons</a></li>
                <li><a href='https://getbootstrap.com/' className={styles.anchor}>Themes</a></li>
                <li><a href='https://getbootstrap.com/' className={styles.anchor}>Expo</a></li>
                <li><a href='https://getbootstrap.com/' className={styles.anchor}>Blog</a></li>
            </ul>
        </div>
        <div>
            <ul className={styles.socialMedia}>
            <li><a href='https://getbootstrap.com/' className={styles.anchor}>v4.5 </a></li>
            <li><a href='https://getbootstrap.com/' className={styles.anchor}><GitHubIcon /></a></li>
            <li><a href='https://getbootstrap.com/' className={styles.anchor}><TwitterIcon /></a></li>
            <li><a href='https://getbootstrap.com/' className={styles.anchor}><TagIcon /></a></li>
            <li><a href='https://getbootstrap.com/' className={styles.anchor}><ModelTrainingIcon /></a></li>
                <li>
                  <ButtonComponent />
                </li>
            </ul>
        
        </div>
    </nav>
  )
}

export default NavbarComponent;


