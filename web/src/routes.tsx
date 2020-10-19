import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import FormComercial from './pages/FormComercial';
import FormPessoal from './pages/FormPessoal';

import Informacoes from './pages/Informacoes';
import Landing from './pages/Landing';
import TipoPacote from './pages/TipoPacote';

function Routes(){
    return(
        <BrowserRouter>
            <Route path="/" exact component={Landing}/>
            <Route path="/TipoPacote" component={TipoPacote}/>
            <Route path="/Informacoes" component={Informacoes}/>
            <Route path="/FormComercial" component={FormComercial}/>
            <Route path="/FormPessoal" component={FormPessoal}/>
        </BrowserRouter>
    );
}

export default Routes;