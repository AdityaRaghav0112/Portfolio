import React from 'react'
import Hero from './sections/Hero.jsx'
import Projects from './sections/Projects.jsx'

const App = () => {
  return (
    <div className='min-h-screen w-full overflow-x-hidden relative'>
      <Hero/>
      <Projects/>
    </div>
  )
}

export default App
