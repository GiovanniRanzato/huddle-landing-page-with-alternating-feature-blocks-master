import React from 'react'
import classes from './Footer.module.css';

import {FOOTER} from '../../Config/Config';
const Footer = ()=>{
    const infoContent  = FOOTER.info.map((i,j)=>{
    return <div key={j}  className={classes.info} ><img src={i.icon} alt="infoIcon"/><p>{i.text}</p></div>
    });
    const linkContent  = FOOTER.links.map((l,i)=>{
    return <li key={i} className={classes.link} ><a href={l.path} >{l.label}</a></li>
        });
    const socialContent = FOOTER.social.map( (s,i) =>{
        return <div key={i} className={classes.icon} ><img src={s.icon} alt="socialIcon"/></div>
    });
    return (<footer className={classes.footer}>
        <div className={classes.info} >{infoContent}</div>
        <div className={classes.links} ><ul>{linkContent}</ul></div>
        <div className={classes.social} >{socialContent}</div>
        <div className={classes.copyright} ></div>
    </footer>);
}
export default Footer;  