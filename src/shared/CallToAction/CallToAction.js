import React from 'react'
import classes from './CallToAction.module.css'
import {SHARED} from '../../Config/Config'
const CallToAction =() =>{
return <div className={classes.cta} onClick={()=>{console.log("clicked")}}>{SHARED.cta}</div>
}
export default CallToAction;
