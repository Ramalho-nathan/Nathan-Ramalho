import React, { useEffect, useState } from 'react'
import Particle from '../particle/Particle'
import './home.scss'
function Home() {

   const words = [ 'Back-end', 'Front-end' , 'Freelancer'];
   const [currentWord, setCurrentWord] = useState (0);

   useEffect(() =>{
    const interval = setInterval(() =>{
        setCurrentWord((prevWord) => (prevWord + 1) % words.length)
    },3000)
    return () => clearInterval(interval);   
   }, [words.length]);

  return (
    <div className="home">
        <Particle />
        <header>
            <div className="logo">
                <h1>Nathan Ramalho</h1>
                <p>Desenvolvedor FullStack</p>
            </div>
        </header>

        <div className="content">
            <div className="title-home">
                <h1>Nathan Ramalho</h1>
                <p>Desenvolvedor <span>{words[currentWord]}</span></p>
            </div>
        </div>
    </div>
  )
}

export default Home