import React from 'react';
import content from '../content';

import Carousel from './carousel';

function Gallery(props) {

    return (

        <div className={`flex flex-col  items-center`}>
            <h1 className={`text-5xl font-extrabold mt-16 md:mt-24  `} >{content.project.title} </h1>
            <Carousel className='' title={props.projTitle} cardBG={props.cardBG} buttonColor1={props.buttonColor1} buttonColor2={props.buttonColor2} descColor={props.descColor} />
        </div>

    );
}

export default Gallery;