import React from 'react';
import { Link } from 'react-router-dom'
import { AiOutlineArrowDown } from 'react-icons/ai';

import logoImg from '../images/logo.svg';
import bonecosImg from '../images/bonecos-lading.svg';
import cercaImg from '../images/cerca-lading.svg';

import '../styles/pages/landing.css';

function Landing() {
  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <header>
          <img src={logoImg} alt="Rafaela Fotografias"/>

        </header>
        
        <main>
          <h1>Seja bem vindo(a) ao atendimento inicial online</h1>
          <p>É possivel se retirar da plataforma a qualquer momento. 
            O ensaio só será confirmado por você no final do site.</p>
          <Link to="/TipoPacote">Continuar</Link>
          <img src={bonecosImg} alt="Bonecos"/>
        </main>

        <footer>
          <div className="perdido">
            <img src={cercaImg} alt="Perdido?"/>
            <h2>Está perdido? Caso seu desejo seja apenas 
              se informar e não marcar o ensaio</h2>
          </div>
          
          <div className="informacoes">
            <p>Clique no ícone abaixo</p>
            <i><AiOutlineArrowDown/></i>
            <Link to="/Informacoes">Informacões</Link>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Landing;
