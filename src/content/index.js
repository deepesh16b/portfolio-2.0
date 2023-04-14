import dp from '../assets/dp3.jpg'
import Mongo from '../assets/mongo.png'
import Node from '../assets/node.png'
import Express from "../assets/express.png"
import weather from '../assets/weather.png';
import todo from '../assets/todo.png';
import blog from '../assets/blog1.png';
import newsletter from '../assets/newsletter.png';
// import bangerGIF from '../assets/bangeralert.gif'
import netflix from '../assets/netflix.jpeg'
// import CollectURL from '../assets/CollectURL.gif'
const content = {
    nav: {
        logo: 'Deepesh Bhardwaj',
        logoSmall: 'DB',
        links: [
            { text: 'About' },
            { text: 'Projects' },
            { text: 'Skills' },
            { text: 'Contact' },
        ],
    },
    header: {
        img:
            '',
        imgPlaceholder:
            `${dp}`,
        text: ['Deepesh Bhardwaj'],
        typical: [
            'Full Stack Web Developer. ',
            2000,
            'Student. ',
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
                title: 'Netflix Clone',
                img: `${netflix}`,
                git: 'https://github.com/deepesh16b/Netflix-Clone',
                live: 'https://netflix-29a21.web.app/',
                desc: "Netflix clone is developed using ReactJS, Webhooks, Redux & Google Auth. Firestore is implemented to manage user’s data.Themoviedb API is  utilized to retrieve information on movies",
                tech: ["React", "JavaScript ", 'Redux','TMDB Api',  'Firebase', 'FireStore', 'Axios'],
            },
            {
                //use this desc size as template no longer
                title: 'Blog Website',
                img: `${blog}`,
                git: 'https://github.com/deepesh16b/Blog-WebApp',
                live: 'https://blogwebapp-tslk.onrender.com/',
                desc: "Blog website for users to write, view, and delete blogs. Developed using HTML, CSS, Bootstrap, NodeJS, ExpressJS, and MongoDB. ",
                tech: ['HTML', 'Express', "Bootstrap", "Node.js", 'MongoDb', 'CSS'],
            },
            {
                title: 'Todo List ',
                img: `${todo}`,
                git: 'https://github.com/deepesh16b/Todo-List-WebApp',
                live: 'https://todolistwebapp.onrender.com/',
                desc: "A Todo list website where users can add and delete their tasks. Built using HTML, CSS, JavaScript, NodeJS, Express, and MongoDB. Users can create their different to-do list pages by adding something after the website's URL",
                tech: ["JavaScript ", 'Bootstrap', 'CSS', 'Express', 'MongoDB', 'NodeJS'],
            },
            {
                title: 'Weather A+pp',
                img: `${weather}`,
                git: 'https://github.com/deepesh16b/weather-react-app',
                live: 'https://weather58.netlify.app/',
                desc: "A Weather web-application that can tell the weather of any city. Developed using HTML, CSS, JS, ReactJS, and openWeather-API.",
                tech: ["JavaScript", "ReactJS", 'CSS', 'Bootstrap', "openWeather-API"],
            }
            ,
            {
                title: 'Newsletter Website',
                img: `${newsletter}`,
                git: 'https://github.com/deepesh16b/newsletter-nodejs-render',
                live: 'https://newsletter-nodejs.onrender.com/',
                desc: "A Newsletter Website where user can enter his name & email-id and then he gets subscribed to our Newsletter website. It is developed using HTML, CSS, JS, NodeJs, MongoDb, Mailchimp-API",
                tech: ["JavaScript", "HTML", 'CSS', "NodeJs", "MongoDb",],
            }
            // ,{
            //     title: 'Weather Dashboard',
            //     img: `${weatherGIF}`,
            //     git: 'https://github.com/Kam-Mivehchi/Weather-Dashboard',
            //     live: 'https://kam-mivehchi.github.io/Weather-Dashboard/',
            //     desc: "Weather Dashboard is a sleek and responsive solution to recive weather information from around the world.This application allows user input(string input or button preset) to change the forecast to reflect their desired location.Weather data is updated dynamically with the use of Open Weather API and JavaScript.",
            //     tech: ["JavaScript", "HTML", 'CSS'],
            // },
            // {
            //     title: 'Note Taker',
            //     img: `${noteGIF}`,
            //     git: 'https://github.com/Kam-Mivehchi/Note-Taker',
            //     live: 'https://notetaker-km.herokuapp.com/',
            //     desc: "Mobile-Resonsive Note taking application that integrates with Rest API. This application allows user to create, store and delete application to help increase productivity",
            //     tech: ["JavaScript", "HTML", 'CSS'],
            // }
        ]
    },
    resume: {
        cat1: 'chemical',
        cat2: 'Programming',
        skills: {
            programming: [
                "React",
                "Node.js",
                "MongoDB",
                "SQL",
                "HTML",
                "CSS",
                "JavaScript",
                "Express",
                "C++",
                "Python"

            ]
            ,
            chemical: [
                "Git",
                "Github",
                "Vs-Code",
                "Jupiter"


            ]


        }
    }

};

export default content;