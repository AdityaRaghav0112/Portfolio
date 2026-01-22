import React from 'react'
import Hero from './sections/Hero.jsx'
import Projects from './sections/Projects.jsx'
import About from './sections/About.jsx'

const App = () => {
  return (
    <div className='min-h-screen w-full overflow-x-hidden relative'>
      <Hero/>
      {/* <About/> */}
      <Projects/>
    </div>
  )
}

export default App
