import React from 'react'
import classes from './CallToActionCard.module.css';

import { CALL_TO_ACTION_CARD } from '../../../Config/Config';

import CallToAction from '../../../shared/CallToAction/CallToAction';
const CallToActionCard = () => {
    return (<div className={classes.callToActionCard}>
            <h3 className={classes.descriprion}>
                {CALL_TO_ACTION_CARD.description}
            </h3>
            <CallToAction />
        </div>);
}
export default CallToActionCard;