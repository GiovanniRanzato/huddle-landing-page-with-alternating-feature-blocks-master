import React from 'react'
import classes from './FeatureCard.module.css';

const FeatureCard = (props) => {
    return (<div className={classes.featureCard}>
        <div className={classes.media}>
            <img src={props.img.src} alt={props.img.alt} />
        </div>
        <div className={classes.content}>
            <h2 className={classes.title}>{props.title}</h2>
            <p className={classes.description}>{props.description}</p>
        </div>
    </div>);
}
export default FeatureCard;