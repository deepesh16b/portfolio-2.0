import React from 'react'
import content from '../content'
// import { LazyLoadImage } from 'react-lazy-load-image-component';
import { TypeAnimation } from 'react-type-animation'
import Button from './button';
// import { Link as ScrollLink } from 'react-scroll'

const Hero = (props) => {
    return (
        <div className='' >
            <div className="flex flex-col  min-h-screen md:flex-row-reverse items-center justify-evenly md:justify-between w-10/12 mx-auto">
                <div  className="w-full md:w-2/5  ">
                    <img src={content.header.imgPlaceholder} className={`shadow-2xl  rounded-full   `} alt="" />
                    {/* <LazyLoadImage src={content.header.imgPlaceholder} className='object-cover  ' /> */}
                </div>
                <div className="flex flex-col text-center items-center mb-12 md:items-start ">


                    <h2 className={`text-4xl md:text-5xl font-extrabold my-2 ${props.nameColor}`}>{content.header.text}</h2>
                    <TypeAnimation
                        sequence={content.header.typical}
                        repeat={Infinity}
                        cursor={true}
                        wrapper="h2"
                        className={`text-4xl font-semibold my-2  ${props.animateColor}`}
                    />
                    <h2 className={`text-4xl font-semibold my-2  ${props.animateColor} animate-typing text-start`}></h2>
                    <div className='flex'>

                        <div onClick={() => props.setCurrentPage('project')}>
                            <Button className={`${props.buttonColor} px-4 py-1 rounded-full text-xl font-black my-2 w-40 mx-1 shadow-2xl`} text={'Projects'} />
                        </div>

                        <div onClick={() => props.setCurrentPage('about')}>
                            <Button className={`${props.buttonColor2} px-4 py-1 rounded-full text-xl font-black my-2 w-40 mx-1 shadow-2xl`} text={'Learn More...'} />
                        </div>


                    </div>
                </div>
            </div>



        </div>
    )
}

export default Hero