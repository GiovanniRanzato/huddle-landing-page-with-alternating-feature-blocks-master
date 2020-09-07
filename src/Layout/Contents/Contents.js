import React from 'react'
import classes from './Contents.module.css';

import FetureCard from './FeatureCard/FeatureCard';
import CallToActionCard from './CallToActionCard/CallToActionCard';

import { CONTENTS } from '../../Config/Config';

const Contents = () => {
    const contents = CONTENTS.map(content => {
        return <FetureCard key={content.id} {...content} />;
    })
    return <section className={classes.contents}>
        {contents}
        <CallToActionCard />
        </section>;
}
export default Contents;  