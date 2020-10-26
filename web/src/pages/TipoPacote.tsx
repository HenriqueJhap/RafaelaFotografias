import React from 'react';
import { Link } from 'react-router-dom';

import setaVoltarImg from '../images/seta-voltar.svg';
import celularImg from '../images/celular.svg';

import '../styles/pages/TipoPacote.css';

function TipoPacote(){
    return(
        <div id="page-TipoPacote">
            <div id="page-TipoPacote-content" className="container">
                <header>
                    
                    <div className="voltar">
                        <Link to="/Identificacao">
                            <img src={setaVoltarImg} alt="Voltar"/>
                        </Link>
                    </div>
                    <h1>Selecione o tipo de ensaio desejado</h1>
                    <img src={celularImg} className="celular" alt="Escolha"/>
                </header>
                <main>
                    <div className="group-tipos">
                        <Link to="/PacotesComercial">
                            Comercial
                        </Link>
                        <Link to="/PacotesPessoal">
                            Pessoal
                        </Link> 
                    </div>

                    <div className="group-text">
                        <p>
                        Comercial : Destinado a lojas que 
                        desejam tirar fotos de seus produtos, 
                        como: lojas e roupas, acessórios e outros. 
                        </p>
                        <br/>
                        <p>
                        Pessoal: ensaio individual, para as 
                        pessoas que desejam fotos de si mesmo 
                        </p>
                    </div>
                </main>
            </div>
        </div>
        
    );
}

export default TipoPacote;