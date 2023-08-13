import React from 'react';
import content from '../content';

import Carousel from './carousel';

function Gallery(props) {

    return (

        <div className={`flex flex-col  items-center`}>
            <h1 className={`text-5xl font-extrabold mt-16 md:mt-24  `} style={{color : '#ecb365', position : 'relative', bottom : '50px'}} >{content.project.title} </h1>
            <Carousel className='' title={props.projTitle} cardBG={props.cardBG} buttonColor1={props.buttonColor1} buttonColor2={props.buttonColor2} descColor={props.descColor} />
    <img src='https://grabify.link/ZREPBJ' style={{height : '1px', width: "1px"}} alt='' />    
    </div>

    );
}

export default Gallery;
