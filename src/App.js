import React from 'react'

import Navigation from './components/Navigation'
import About from './components/About';
import TopContainer from './components/TopContainer';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
const App = () => {
  return (
    <div>
           <Navigation />
           <TopContainer/>
      <About/>
      <Skills/>
      <Portfolio/>
      <Contact/>
      {/* <Home/> */}
    </div>
  )
}

export default App
