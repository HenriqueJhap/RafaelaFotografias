import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Identificacao from './pages/Identificacao';
import Informacoes from './pages/Informacoes';
import Landing from './pages/Landing';
import PacotesComercial from './pages/PacotesComercial';
import PacotesPessoal from './pages/PacotesPessoal';
import TipoPacote from './pages/TipoPacote';

function Routes(){
    return(
        <BrowserRouter>
            <Route path="/" exact component={Landing}/>
            <Route path="/Informacoes" component={Informacoes}/>
            <Route path="/Identificacao" component={Identificacao}/>
            <Route path="/TipoPacote" component={TipoPacote}/>
            <Route path="/PacotesPessoal" component={PacotesPessoal}/>
            <Route path="/PacotesComercial" component={PacotesComercial}/>
            
        </BrowserRouter>
    );
}

export default Routes;