import React from 'react'
import classes from './Header.module.css'
import logoImg from '../../images/logo.svg'

import {HEADER} from '../../Config/Config';

const Header = ()=>{
    return (<header className={classes.header}>
        <img src={logoImg} alt="logo"  className={classes.logo}/>
        <div onClick={()=>console.log("clicked")} className={classes.callToAction}>{HEADER.cta}</div>
    </header>);
}
export default Header;