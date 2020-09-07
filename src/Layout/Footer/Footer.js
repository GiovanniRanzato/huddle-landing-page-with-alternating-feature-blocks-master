import React from 'react'
import classes from './Footer.module.css';
import logoImg from '../../images/logo-w.svg'

import {FOOTER} from '../../Config/Config';
const Footer = ()=>{
    const infoContent  = FOOTER.info.map((i,j)=>{
    return <li key={j}  className={classes.info} ><div className={classes.icon}><img src={i.icon} alt="infoIcon" /></div>{i.text}</li>
    });
    const linkContent  = FOOTER.links.map((l,i)=>{
    return <li key={i} className={classes.link} ><a href={l.path} >{l.label}</a></li>
        });
    const socialContent = FOOTER.social.map( (s,i) =>{
        return <li key={i}  ><div className={classes.socialIcon}><img src={s.icon} alt="socialIcon"/></div></li>
    });
    return (<footer className={classes.footer}>
        <div className={classes.info} ><img src={logoImg} alt="logo" className={classes.logo}/><ul>{infoContent}</ul></div>
        <ul className={classes.links}>{linkContent}</ul>
        <ul className={classes.social}>{socialContent}</ul>
    <div className={classes.copyright} >{FOOTER.copyright}</div>
    </footer>);
}
export default Footer;  