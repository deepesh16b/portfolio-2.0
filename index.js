
import Mongo from '../assets/mongo.png'
import Node from '../assets/node.png'
import Express from "../assets/express.png"
import noteGIF from '../assets/NoteTaker.gif';
import typeGIF from '../assets/typing-demo (1).gif';
import workoutGIF from '../assets/WokoutWiz.gif';
import weatherGIF from '../assets/weatherDash.gif';
import bangerGIF from '../assets/bangeralert.gif'
import Type2GIF from '../assets/TypeScripts.gif'
import Resume from '../assets/deepesh_resume_14-4-23.pdf'
import { BsGithub } from 'react-icons/bs'
import { HiOutlineMail } from 'react-icons/hi'
import { IoLogoLinkedin } from 'react-icons/io'
import logo from '../assets/logo.jpg'
import dp from '../assets/dp.png'

const content = {
    tagline: 'Code that speaks ',
    tagline2: 'Full-Stack Web Developer ',
    about: {
        desc: ` I'm Deepesh Bhardwaj, a CSE B.Tech student at "Lakshmi Narain College of Technology, Bhopal". As a coding enthusiast, I'm passionate about programming and love to code in C++ and Python. I'm a Full stack Web Developer, Currently improving my skills in Competitive Programming and exploring the fascinating world of Machine Learning.  `
    },
    nav: {
        firstName: 'Deepesh',
        lastName: 'Bhardwaj',
        logoSmall: `${logo}`,
        logolink: 'home',
        links: [
            { text: 'About Me', link: 'about' },
            { text: 'My Work', link: 'portfolio' },
            { text: 'Resume', link: `${Resume}` },
            // { text: 'Skills', link: 'skills' },
            // { text: 'Contact', link: 'contact' },
        ],
    },
    footer: {
        externLinks:
            [
                { icon: <IoLogoLinkedin />, link: 'https://www.linkedin.com/in/deepesh16b/' },
                { icon: <BsGithub />, link: 'https://github.com/deepesh16b' },
                { icon: <HiOutlineMail />, link: "mailto:deepeshbhardwaj58@gmail.com" },
            ],
        contact: {
            name: 'Deepesh Bhardwaj',
            email: 'deepeshbhardwaj58@gmail.com',
            location: "Bhopal, MP, India ",
        },
        copyright: 'Copyright © 2023 - Deepesh Bhardwaj',
        tagline: "Code  Never  Stops"
    }
    ,
    header: {
        img:
            dp,

        text: ['Deepesh Bhardwaj'],
        typical: [
            'Web Developer. ',
            2000,
            'Chemist. ',
            2000,

        ],
        btnText: 'Discover',
    },

    stack: {
        title: 'Stack',
        tech: [
            {
                img: `${Mongo}`,
                alt: 'mongodb',
            },
            {
                img: process.env.PUBLIC_URL + '/logo512.png',
                alt: 'react',
            },
            {
                img: `${Express}`,
                alt: 'express',
            },
            {
                img: `${Node}`,
                alt: 'node',
            },
        ],
        desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only`,
    },

    project: {
        title: 'Projects',
        data: [
            {
                //use this desc size as template no longer
                title: 'Type{Scripts} 2.0',
                img: `${Type2GIF}`,
                git: 'https://github.com/Kam-Mivehchi/TypeScripts2-FrontEnd',
                live: 'https://typescripts-react.herokuapp.com/',
                desc: "TypeScripts 2.0 is a typing game for all developers, new and experienced alike where users are able to see their typing skills. TypeScripts 2.0 features a refactored React front-end connected to the original database",
                tech: ["React", "JavaScript ", 'TailwindCSS', 'CSS', 'Express', 'mySQL', 'Axios'],
            },
            {
                title: 'BangerAlert',
                img: `${bangerGIF}`,
                git: 'https://github.com/Kam-Mivehchi/BangerAlert---Spotify-Companion',
                live: 'https://banger-alert-redux.herokuapp.com/',
                desc: "BangerAlert is a Spotify Companion App that hosts a new wrapper and displays lyrics to sing along with. The application uses the Spotify API to provide a simple interface to enhance the listening experience.",
                tech: ["React", "JavaScript ", 'Bootstrap', 'CSS', 'Express', 'Spotify Web API'],
            },
            {
                title: 'Type{Scripts}',
                img: `${typeGIF}`,
                git: 'https://github.com/Kam-Mivehchi/TypeScripts',
                live: 'https://typescripts-btc.herokuapp.com/',
                desc: "Type{Scripts} is a typing game for all developers, new and experienced alike where users are able to see their typing skills when typing code.We noticed that a lot of the typing quizes or games didn't offer developer modes where you can type code instead of randomwords and sentences and sought to provide a solution in the form of Typescripts. ",
                tech: ["JavaScript", "Handlebars", 'CSS', 'Bootstrap'],
            },
            {
                title: 'Workout Wizard',
                img: `${workoutGIF}`,
                git: 'https://github.com/Kam-Mivehchi/project-1',
                live: 'https://runaariga.github.io/project-1/',
                desc: "Application where the user is able to find a workout specifically to certain muscle groups.If the user selects a muscle group, application will provide a list of workouts and videos",
                tech: ["JavaScript", "HTML", 'CSS'],
            },
            {
                title: 'Weather App',
                img: `${weatherGIF}`,
                git: 'https://github.com/Kam-Mivehchi/Weather-Dashboard',
                live: 'https://kam-mivehchi.github.io/Weather-Dashboard/',
                desc: "Weather Dashboard is a sleek and responsive solution to recive weather information from around the world.This application allows user input(string input or button preset) to change the forecast to reflect their desired location.Weather data is updated dynamically with the use of Open Weather API and JavaScript.",
                tech: ["JavaScript", "HTML", 'CSS'],
            },
            {
                title: 'Note Taker',
                img: `${noteGIF}`,
                git: 'https://github.com/Kam-Mivehchi/Note-Taker',
                live: 'https://notetaker-km.herokuapp.com/',
                desc: "Mobile-Resonsive Note taking application that integrates with Rest API. This application allows user to create, store and delete application to help increase productivity",
                tech: ["JavaScript", "HTML", 'CSS'],
            }
        ]
    },
    resume: {
        link: `${Resume}`,
        cat1: 'Chemical',
        cat2: 'Programming',
        skills: {
            programming: [
                "JavaScript",
                "MongoDB",
                "SQL",
                "HTML",
                "Node.js",
                "Progressive Web Development",
                "Cascading Style Sheets(CSS)",
                "Adobe Illustrator",
                "Adobe Photoshop",

            ],
            chemical: [
                "ICP/AES",
                "FTIR/RAMAN",
                "Research and Development (R&D)",
                "Quality Control",
                "Analytical Skills",
                "Method Development",
                "Microsoft Suite",
                "AutoCAD"


            ]


        }
    }

};

export default content;