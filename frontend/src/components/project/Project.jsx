import React, { useState } from 'react'
import TitleSection from '../Title-section/TitleSection'
import { FaCode, FaMobile} from "react-icons/fa";
import { FaGear } from "react-icons/fa6";


import './project.scss'
function Project() {

    const [currentStack, setCurrentStack] = useState (1);

    const handleClick = (stack) =>{
        setCurrentStack(stack);
    }

  return (
    <div className="project">
        <div className="title-container">
            <TitleSection>Projetos</TitleSection>
        </div>

        <div className="container">
            <div className="navegation">
                <div className="select-button">
                    <button className={`button ${currentStack === 1 ? 'active' : ''}`} onClick={() =>handleClick(1)}>Front-End</button>
                    <FaCode className='icon-button'/>
                </div>
                <div className="select-button">
                    <button className={`button2 ${currentStack === 2 ? 'active' : ''}`}onClick={() =>handleClick(2)}>Back-End</button>
                    <FaGear className='icon-button'/>
                </div>
                <div className="select-button">
                    <button className={`button3 ${currentStack === 3 ? 'active' : ''}`}onClick={() =>handleClick(3)}>Mobile</button>
                    <FaMobile className='icon-button'/>
                </div>
            </div>

            <div className="content">
                {currentStack === 1 && (
                    <div className="card">
                        <div className="header-card">
                            <h1>Front-End</h1>
                        </div>
                        <div className="descript">
                            <p>Frontend é a parte visual de um site ou aplicativo, que o usuário interage diretamente. Inclui o design, botões, textos, e tudo o que aparece na tela. Ele é desenvolvido usando tecnologias como HTML, CSS e JavaScript.</p>
                        </div>

                        <div className="carrosel">
                            
                        </div>
                    </div>
                )}
                {currentStack === 2 &&(
                    <div className="card">
                        <h1>Backend</h1>
                    </div>
                )}
                {currentStack === 3 &&(
                    <div className="card">
                        <h1>Mobile</h1>
                    </div>
                )}
            </div>
        </div>
    </div>
  )
}

export default Project