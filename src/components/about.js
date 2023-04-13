import React from "react";
// import headshot from './headshot-formal-blur.jpg'

const paragraphStyles =
  "w-8/12 md:min-w-xl text-xl  font-medium text-center mx-auto  md:text-2xl";

const headingStyles = "text-5xl font-extrabold py-4 mb-16";

function About(props) {
  return (
    <div
      className={` w-fit mx-auto   overflow-y-auto ${props.background} pt-32 `}
      id="about"
    >
      {/* <img className="scale-[10%]  " src={headshot}></img> */}
      <div className=" flex flex-col   items-center ">
        <h1 className={`${headingStyles} + ${props.titleColor}`}>About</h1>

        <p className={`${paragraphStyles} + ${props.paragraphStyle}`}>
          I'm Deepesh Bhardwaj, a CSE B.Tech student at "Lakshmi Narain College
          of Technology, Bhopal". As a coding enthusiast, I'm passionate about
          programming and love to code in C++ and Python.
          <br />
          I'm a Full stack Web Developer, Currently improving my skills in
          Competitive Programming and exploring the fascinating world of Machine
          Learning.
        </p>
      </div>
    </div>
  );
}

export default About;
