import { useState } from 'react'
import content from '../content/index';

import { BsArrowRightSquare, BsArrowLeftSquare } from 'react-icons/bs'
const Carousel = (props) => {

    const [current, setCurrent] = useState(0)
    const length = content.project.data.length

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    }
    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    }

    if (!Array.isArray(content.project.data) || content.project.data.length <= 0) {
        return null
    }
    return (
        <>
            <section style={{ marginTop: '-6rem' }} className={`relative h-screen flex justify-center items-center `}>
                <BsArrowLeftSquare className={`${props.descColor} hover:scale-110 text-7xl relative z-10 lg:mr-40  opacity-70`} style={{ left: '5%' }} onClick={prevSlide} />
                {content.project.data.map((proj, index) => {
                    return (
                        <div
                            className={index === current ? 'opacity-1 duration-1000 scale-110 ' : 'opacity-0   ease-in-out duration-1000 transition'}
                            key={index}
                        >
                            {index === current && (
                                <div className={`lg:max-w-[1000px] w-3/4 max-h-fit mx-auto border-2 border-${props.descColor} rounded-lg ${props.cardBG} `} >

                                    <img src={proj.img} alt="projects" className={`mx-autoaspect-video max-h-[400px] border-b-2   rounded-lg drop-shadow-lg`} style={{ borderBottomLeftRadius: '0', borderBottomRightRadius: '0' }}></img>
                                    <div className='w-11/12 mx-auto'>
                                        <div className='flex flex-col items-center text-2xl font-extrabold md:flex-row md:justify-between'>
                                            <h1 className={`${props.title}`}>{proj.title}</h1>
                                            <div class="text-sm flex justify-between">
                                                <button className={`py-1 px-5  rounded-full max-w-full mx-1 my-3  font-bold ${props.buttonColor1}`} >
                                                    <a href={proj.git} target='_blank'
                                                        rel="noopener noreferrer">
                                                        GitHub
                                                    </a>
                                                </button>
                                                <button className={`py-1 px-5  rounded-full max-w-full mx-1 my-3  font-bold ${props.buttonColor2}`} >
                                                    <a href={proj.live} target='_blank'
                                                        rel="noopener noreferrer">
                                                        Live Site
                                                    </a>
                                                </button>
                                            </div>
                                        </div>
                                        <p className={`text-xs md:text-base text-center font-semibold ${props.descColor}`}>{proj.desc}</p>
                                        <p className='italic flex flex-wrap justify-center font-semibold my-3 opacity-50'>{proj.tech.map((tech) => {
                                            return (
                                                <p className={`text-xs mx-1 ${props.title}`}>{tech}</p>
                                            )
                                        })}</p>
                                    </div>
                                </div>
                            )}

                        </div>
                    )
                })}
                <BsArrowRightSquare className={`hover:scale-110  text-7xl relative z-10 lg:ml-40 opacity-70 ${props.descColor}`} style={{ right: '5%' }} onClick={nextSlide} />

            </section >
        </>
    )
}

export default Carousel