import React from "react";
import pdfResume from 'https://drive.google.com/drive/folders/1ZgzPtKQj_j0xWCj6O85AkhMDjQaTQsE2?usp=sharing'
import { useState } from "react";
import content from '../content';
import Button from "./button";

function Resume(props) {

    const [currentSkill, setCurrentSkill] = useState('programming');

    function displaySkill(state) {
        if (state === 'programming') {
            return (
                <div className="">{content.resume.skills.programming.map((skill) => {
                    return <li className={`my-2  ${props.skillText}`}>{skill}</li>
                })
                }
                </div>
            );
        }
        if (state === 'chemical') {
            return (
                <div className="">{content.resume.skills.chemical.map((skill) => {
                    return <li className={`my-2  ${props.skillText}`}>{skill}</li>
                })
                }
                </div>
            )
        }
    }




    return (
        <div className={`min-h-screen `}>
            <div className={`  flex flex-col  py-24 `}>
                <h1 className={` ${props.headingText} text-6xl font-black mb-6 text-center`}>Proficiencies
                </h1>
                <div div='flex justify-start '>
                    <div className={`flex justify-between `}>
                        <button className="basis-1/2 mx-4 bg-light-blue/5 hover:bg-light-blue/25 active:bg-light-blue/40 focus:bg-light-blue/30  rounded-lg " onClick={() => setCurrentSkill('programming')}>
                            <h3 className={`text-3xl  font-black ${props.catText} `}>Programming</h3>
                        </button>
                        <button className=" basis-1/2 mx-4 bg-light-blue/5 hover:bg-light-blue/25 active:bg-light-blue/40 focus:bg-light-blue/30 rounded-lg ">
                            <h3 className={`text-3xl   font-black ${props.catText}`} onClick={() => setCurrentSkill('chemical')}>Frameworks/ Tools</h3>
                        </button>

                    </div>
                    <div className="mt-10 flex justify-center">
                        {displaySkill(currentSkill)}
                    </div>
                    <div className='flex justify-center mt-28 '>
                        <a href={pdfResume} target='_blank' rel="noopener noreferrer">

                            <Button className={` px-4 py-1 rounded-full  mx-2 text-3xl font-extrabold hover:bg-light-blue/25  ${props.resButtonColor}`} text='Resume (PDF)' />
                        </a>
                    </div>
                </div>
            </div>

        </div>
    );

}

export default Resume;
