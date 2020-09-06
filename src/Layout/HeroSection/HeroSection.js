import React from 'react'
import classes from './HeroSection.module.css';

import CallToAction from '../../shared/CallToAction/CallToAction';
import {HERO_SECTION} from "../../Config/Texts";

const HeroSection = (props)=>{
    return (<section className={classes.heroSection}>
        <div className={classes.content}>
            <h1 className={classes.title}>{HERO_SECTION.title}</h1>
            <p className={classes.description}>{HERO_SECTION.description}</p>
            <CallToAction />
        </div>
        <div className={classes.cover}>
        </div>
    </section>);
}
export default HeroSection;