import React from 'react'
import LogoComponent from '../LogoComponent/LogoComponent'
import styles from './NavbarComponent.module.css'
import SearchComponent from '../SearchComponent/SearchComponent'
import HomeIcon from '@mui/icons-material/Home';
import TourIcon from '@mui/icons-material/Tour';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import StorefrontIcon from '@mui/icons-material/Storefront';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import MapsUgcIcon from '@mui/icons-material/MapsUgc';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import { Badge } from '@mui/material';


const NavbarComponent = () => {
  return (
    <nav className={styles.navbar}>
        <div className={styles.logoandSearch}>
            <LogoComponent />
            <SearchComponent />
        </div>
        <div>
        
            <ul className={styles.homeContent}>
                <li> <a href='facebook.com'>
                    <HomeIcon fontSize="large"/>
                </a>
                </li>
                <li> 
                    <a href='facebook.com'><Badge badgeContent={9} color="error"><TourIcon fontSize="large"/></Badge></a> 
                </li>
                <li> <a href='facebook.com'>
                <Badge badgeContent={9} color="error"><OndemandVideoIcon fontSize="large"/></Badge>
                    </a> </li>
                <li> <a href='facebook.com'><StorefrontIcon fontSize="large"/></a> </li>
                <li> <a href='facebook.com'><MenuIcon fontSize="large"/></a> </li>
            </ul>
        </div>
        <div>
            <ul className={styles.homeContentBtns}>
                <li > 
                <IconButton aria-label="search" size="big" sx={{backgroundColor: "rgb(215, 215, 215)"}}>
                <LocalHospitalIcon fontSize="inherit" sx={{color: "black"}}/>
                </IconButton>
                </li>
                <li> 
                <IconButton size="big" aria-label="show 4 new mails" sx={{backgroundColor: "rgb(215, 215, 215)"}}>
                    <Badge badgeContent={4} color="error">
                        <MapsUgcIcon fontSize="inherit" sx={{color: "black"}}/>
                    </Badge>
                </IconButton>
                </li>
                <li> 
                <IconButton size="big" aria-label="show 4 new mails" sx={{backgroundColor: "rgb(215, 215, 215)"}}>
                    <Badge badgeContent={2} color="error">
                    <NotificationsIcon fontSize="inherit" sx={{color: "black"}}/>
                    </Badge>
                </IconButton>
                </li>
                <li> 
                <IconButton aria-label="search" size="big" sx={{backgroundColor: "rgb(215, 215, 215)"}}>
                <ArrowDropDownIcon fontSize="inherit" sx={{color: "black"}}/>
                </IconButton>
                </li>

            </ul>
        </div>
    </nav>
  )
}

export default NavbarComponent