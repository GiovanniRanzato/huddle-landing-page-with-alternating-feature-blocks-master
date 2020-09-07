import illustrationGrowTogether from '../images/illustration-grow-together.svg';
import illustrationFlowingConversation from '../images/illustration-flowing-conversation.svg';
import illustrationYourUsers from '../images/illustration-your-users.svg';

import facebookIcon from '../images/facebook-brands.svg';
import twittwerIcon from '../images/twitter-brands.svg';
import instagramIcon from '../images/instagram-brands.svg';

import positionIcon from '../images/icon-location.svg';
import phoneIcon from '../images/icon-phone.svg';
import emailIcon from '../images/icon-email.svg';

export const CONTENTS = [{
    id: 'cont-1',
    title: 'Grow Together',
    description: 'Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form. ',
    img: {
        src: illustrationGrowTogether,
        alt: 'feature illustration'
    },
},{
    id: 'cont-2',
    title: 'Flowing Conversations',
    description: '  You wouldn\'t paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for a more natural flow.',
    img: {
        src: illustrationFlowingConversation,
        alt: 'feature illustration'
    },
},{
    id: 'cont-3',
    title: 'Your Users',
    description: '  It takes no time at all to integrate Huddle with your app\'s authentication solution. This means, once signed in to your app, your users can start chatting immediately.',
    img: {
        src: illustrationYourUsers,
        alt: 'feature illustration'
    },
}];
export const CALL_TO_ACTION_CARD={
    description: 'Ready To Build Your Community?'
}

export const HEADER = {
    cta: 'Try it Free'
}
export const HERO_SECTION = {
    title: "Build The Community Your Fans Will Love",
    description: "  Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion. "
}
export const SHARED = {
    cta:'Get started for free'
}

export const FEATURE_CARD = {
    cta:'Get started for free'
}

export const FOOTER = {
    info: [{
        icon: positionIcon,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    },{
        icon: phoneIcon,
        text: "+1-543-123-4567",
    },{
        icon: emailIcon,
        text: "example@fylo.com",
    }],
    links: [{
        label:"About Us",
        path:"#"
    },{
        label:"What We Do",
        path:"#"
    },{
        label:"FAQ",
        path:"#"
    },{
        label:"Career",
        path:"#"
    },{
        label:"Blog",
        path:"#"
    },{
        label:"Contact Us",
        path:"#"
    }],
    social: [{
        icon: facebookIcon,
        path: "#",
        label: "facebook"
    },
    {
        icon: twittwerIcon,
        path: "#",
        label: "twitter"
    },
    {
        icon: instagramIcon,
        path: "#",
        label: "instagram"
    }],
    copyright: "\u00A9 Copyright 2018 Huddle. All rights reserved."
}
