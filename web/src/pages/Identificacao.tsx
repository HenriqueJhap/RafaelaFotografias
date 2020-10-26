import  React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import loginImg from '../images/login-pessoal.svg';
import cercaImg from '../images/cerca-login.svg';

import '../styles/pages/Identificacao.css';
import Header from '../Components/Header';
import Input from '../Components/Input';

function Identificacao(){
    const history = useHistory();

    const [ name, setName ] = useState("");
    const [ instagram, setInstagram ] = useState("");

    function handleNavigateToTipoPacote(){
        history.push('/TipoPacote');
    }

    return(
        <div id="page-Identificacao">
            <div id="page-Identificacao-content" className="container">
                <header>
                    <Header pageBack="/"/>
                    <h1>Area de Identificação</h1>
                    <img src={loginImg} className="loginImg" alt="Fazer Login"/>
                </header>

                <main>
                    <form onSubmit={handleNavigateToTipoPacote} className="form-login">
                        <Input 
                            name="name" 
                            label="Nome completo" 
                            value={name} 
                            onChange= {(e) => { setName(e.target.value) }}
                            required
                        />

                        <Input 
                            name="instagram" 
                            label="Instagram" 
                            value={instagram} 
                            onChange= {(e) => { setInstagram(e.target.value) }}
                            required
                        />

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