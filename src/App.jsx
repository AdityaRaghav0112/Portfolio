import React from 'react'
import Hero from './sections/Hero.jsx'
import Projects from './sections/Projects.jsx'
import About from './sections/About.jsx'
import StackedCards from './sections/StackedCards.jsx'
import Navbar from './components/Navbar.jsx'
import Skills from './sections/Skills.jsx'
import Skill from './sections/Skill.jsx'

const App = () => {
  return (
    <div className='min-h-screen w-full overflow-x-hidden relative'>
      <Navbar/>
      <Hero/>
      {/* <Projects/> */}
      <StackedCards/>
      <Skill/>
      <About/>
      {/* <Skills/> */}
    </div>
  )
}

export default App
