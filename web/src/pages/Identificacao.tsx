import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import setaVoltarImg from '../images/seta-voltar.svg';
import loginImg from '../images/login-pessoal.svg';
import cercaImg from '../images/cerca-login.svg';

import '../styles/pages/Identificacao.css';

function Identificacao(){
    const history = useHistory();

    function handleNavigateToTipoPacote(){
        history.push('/TipoPacote');
    }

    return(
        <div id="page-Identificacao">
            <div id="page-Identificacao-content" className="container">
                <header>
                    <div className="voltar">
                        <Link to="/">
                            <img src={setaVoltarImg} alt="Voltar"/>
                        </Link>
                    </div>
                    <h1>Area de Identificação</h1>
                    <img src={loginImg} className="loginImg" alt="Fazer Login"/>
                </header>

                <main>
                    <form onSubmit={handleNavigateToTipoPacote} className="form-login">
                        <div className="input-group">
                            <label htmlFor="name">Nome</label>
                            <input id="name" type="text" required/>
                        </div>

                        <div className="input-group">
                            <label htmlFor="instagram">Instagram</label>
                            <input id="instagram" type="text" required/>
                        </div>

                        <button type="submit">login</button>
                    </form>
                </main>

                <footer>
                    <img  className="img-footer" src={cercaImg} alt=""/>
                    <p className="text-footer">Os dados estarão seguros e serão usados só para identificação</p>
                </footer>
            </div>
        </div>
    );
}

export default Identificacao;