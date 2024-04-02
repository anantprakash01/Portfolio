import React from 'react'

import Navigation from './components/Navigation'
import About from './components/About';
import TopContainer from './components/TopContainer';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Skills from './components/Skills';

const App = () => {
  return (
    <div>
      <Navigation />
      <TopContainer/>
      <About/>
      <Skills/>
      <Portfolio/>
      <Contact/>
    </div>
  )
}

export default App
