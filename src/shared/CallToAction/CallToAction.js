import React from 'react'
import classes from './CallToAction.module.css'
import {SHARED} from '../../Config/Config'
const CallToAction =(props) =>{
    const optional = props.xl ? classes.xl : null;
    return <div className={classes.cta + " " + optional} onClick={()=>{console.log("clicked")}}>{SHARED.cta}</div>
}
export default CallToAction;
