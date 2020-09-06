import React from 'react'
import classes from './CallToAction.module.css'
import {SHARED} from '../../Config/Texts'
const CallToAction =() =>{
return <div className={classes.cta} onclick={()=>{console.log("clicked")}}>{SHARED.cta}</div>
}
export default CallToAction;
