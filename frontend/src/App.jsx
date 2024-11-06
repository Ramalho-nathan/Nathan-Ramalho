import { useState } from 'react'
import './App.css'
import Home from './components/home/Home'
import AboutMe from './components/about/AboutMe'
import Project from './components/project/Project'

function App() {
  

  return (
    <div className="app">
      <Home />
      <AboutMe />
      <Project />
    </div>
  )
}

export default App
