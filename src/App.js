import './App.css';
import About from './components/about';
import Projects from './components/projects'
import { useState, } from 'react';
import Navigation from "./components/Navigation";
import Hero from "./components/hero"
import Stack from './components/stack';
import Footer from './components/footer';
import Resume from './components/resume';
import Contact from './components/contact';
import { BsSun, BsFillMoonStarsFill } from 'react-icons/bs'


function App() {
  const [currentPage, setCurrentPage] = useState('hero')
  const [theme, setTheme] = useState('dark')

  function renderPage(state) {
    if (state === 'hero' && theme === 'dark') {
      return (
        <>
          <Hero outlineColor="tertiaryd" nameColor="text-light-blue" buttonColor='bg-light-blue hover:bg-light-blue/50  ' buttonColor2='bg-accentd hover:bg-accentd/50' animateColor='text-accentd' setCurrentPage={setCurrentPage} />
          <Stack background={`bg-cover ${theme === 'dark' ? 'bg-stacked-wave' : 'bg-stackedLight'}`} textColor={` ${theme === 'dark' ? 'text-accentd' : 'text-primaryl'}`} tileStyle='bg-light-blue text-light-blue' />
        </>
      )
    }
    if (state === 'hero' && theme === 'light') {
      return (
        <>
          <Hero outlineColor="tertiaryl" nameColor="text-black" buttonColor='bg-lilac hover:bg-black/50 text-primaryl ' buttonColor2='bg-black hover:bg-lilac/50 text-primaryl' animateColor='text-lilac' setCurrentPage={setCurrentPage} />
          <Stack background={`bg-cover ${theme === 'dark' ? 'bg-stacked-wave' : 'bg-stackedLight'}`} textColor={` ${theme === 'dark' ? 'text-accentd' : 'text-primaryl'}`} tileStyle='bg-light-blue text-light-blue' />
        </>
      )
    }
    if (state === 'about') {
      return (
        <>
          <About background='' titleColor={` ${theme === 'dark' ? 'text-accentd' : 'text-lilac'}`} paragraphStyle={` ${theme === 'dark' ? 'text-light-blue' : 'text-black'}`} />
          <Stack background={`bg-cover ${theme === 'dark' ? 'bg-stacked-wave' : 'bg-stackedLight'}`} textColor={` ${theme === 'dark' ? 'text-accentd' : 'text-primaryl'}`} tileStyle='bg-light-blue text-light-blue' />
        </>

      )
    }
    if (state === 'project') {
      return (
        <Projects title={` ${theme === 'dark' ? 'text-accentd my-5' : 'text-black mb-10'}`} pageBackground='' cardBG={` ${theme === 'dark' ? 'bg-tertiaryd' : 'bg-lilac '}`} buttonColor1={` ${theme === 'dark' ? 'bg-light-blue hover:bg-light-blue/50 text-black' : 'bg-light-blue hover:bg-light-blue/50 text-black'} font-black`} buttonColor2={` ${theme === 'dark' ? 'bg-accentd hover:bg-accentd/50 text-black' : 'bg-black hover:bg-black/50 text-white'} font-black`} projTitle={` ${theme === 'dark' ? 'text-accentd' : 'text-white'}`} descColor={` ${theme === 'dark' ? 'text-light-blue font-semibold' : 'text-black font-semibold'}`} />


      )
    }
    if (state === 'resume') {
      return (
        <Resume headingText={` ${theme === 'dark' ? 'text-accentd mb-10' : 'text-black mb-10'}`} skillText={` ${theme === 'dark' ? 'text-light-blue' : 'text-black '} font-bold text-xl`} catText={` ${theme === 'dark' ? 'text-accentd/90' : 'text-lilac '}`} resButtonColor={` ${theme === 'dark' ? 'bg-accentd text-primaryd' : 'bg-lilac hover:bg-lilac/60 text-primaryl '}`} />


      )
    }
    if (state === 'contact') {
      return (
        <Contact title={`${theme === 'dark' ? 'text-light-blue' : 'text-lilac'}
        `} sections={`${theme === 'dark' ? 'text-accentd' : 'text-black'}`}
          button={`${theme === 'dark' ? 'bg-accentd text-light-blue' : 'text-primaryl bg-lilac'}`} />


      )
    }

  }

  return (

    <main className=' '>

      <Navigation textColor={` ${theme === 'dark' ? 'text-accentd' : 'text-primaryl'}`} divbg={` ${theme === 'dark' ? 'bg-secondaryd' : 'bg-lilac'} `} setCurrentPage={setCurrentPage} />
      <button className={`text-2xl font-extrabold hover:text-light-blue/25 rounded-lg px-2 absolute top-2 right-0 mt-2 md:top-1 md:right-4 lg:right-8 xl:right-16 2xl:right-24 ${theme === 'dark' ? 'text-white ' : 'text-black'}`}
        onClick={() => theme === 'dark' ? setTheme('light') : setTheme('dark')}> {theme === 'dark' ? <BsSun /> : <BsFillMoonStarsFill />}</button>

      <div className={`bg-cover ${theme === 'dark' ? 'bg-wave' : 'bg-waveLight'} `} >
        {renderPage(currentPage)}
      </div>


      <Footer background={`  ${theme === 'dark' ? 'bg-primaryd text-accentd/50' : 'bg-primaryl text-lilac/50'} `} />
    </main>



  )
}

export default App;
