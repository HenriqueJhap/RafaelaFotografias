import React from 'react';
import { Link } from 'react-router-dom'

import logoImg from '../images/logo.svg';
import bonecosImg from '../images/bonecos-lading.svg';

import '../styles/pages/Landing.css';

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
          <Link to="/Identificacao">Continuar</Link>
          <img src={bonecosImg} alt="Bonecos"/>
        </main>
        
      </div>
    </div>
  );
}

export default Landing;
