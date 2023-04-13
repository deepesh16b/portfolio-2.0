import React from 'react'
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

const Footer = (props) => {
    return (
        <div className={`pb-2 ${props.background}`} id='footer'>
            <div className={`flex justify-center items-center ${props.iconColor} `}>
                <div className='text-6xl mx-4  hover:text-light-blue/50' ><a href="mailto:deepeshbhardwaj58@gmail.com" target='_blank'
                    rel="noopener noreferrer">
                    <AiOutlineMail />
                </a>
                </div>
                <div className='text-5xl  hover:text-light-blue/50 mx-4'><a href="https://github.com/deepesh16b" target='_blank' rel="noopener noreferrer">
                    <BsGithub />
                </a>
                </div>
                <div className='text-5xl  hover:text-light-blue/50 mx-4'><a href="https://www.linkedin.com/in/deepesh16b/" target='_blank' rel="noopener noreferrer">
                    <BsLinkedin />
                </a>
                </div>
            </div>
            <p className={`flex justify-center ${props.iconColor}`}>Deepesh Bhardwaj © 2023</p>

        </div>
    )
}

export default Footer