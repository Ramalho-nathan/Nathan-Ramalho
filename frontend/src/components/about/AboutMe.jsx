import React from 'react'
import './about.scss'
import TitleSection from '../Title-section/TitleSection'
function AboutMe() {
  return (
    <div className="about">
        <div className="title-component">
          <TitleSection>Sobre Mim</TitleSection>
        </div>

        <div className="content">
          <div className="text-about">
          <p>
              Olá! Meu nome é Nathan Ramalho, tenho 24 anos e atualmente estou focado no meu crescimento como desenvolvedor. Sou estudante de Análise e Desenvolvimento de Sistemas na Unisuam, onde mergulho profundamente no mundo da tecnologia e da programação.<br/><br/>
              Minha jornada até aqui começou com uma sólida base como auxiliar administrativo, onde aprendi a importância da organização e da eficiência nos processos. Agora, estou em uma emocionante transição de carreira para seguir minha paixão pela tecnologia e pela criação de soluções digitais inovadoras.<br/>
              Meu objetivo é combinar minha experiência em administração com as habilidades em desenvolvimento que estou adquirindo, para criar aplicações que não apenas funcionem bem, mas que também melhorem a experiência do usuário e agreguem valor aos negócios.<br/><br/>
              Estou sempre em busca de aprender novas tecnologias e aprimorar minhas habilidades de programação. Além disso, sou apaixonado por trabalhar em equipe e enfrentar desafios que me permitam crescer profissionalmente e contribuir positivamente para o ambiente ao meu redor.<br/>
            </p>
          </div>

          <div className="avatar">
            
          </div>
        </div>
    </div>
  )
}

export default AboutMe