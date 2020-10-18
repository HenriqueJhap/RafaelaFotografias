import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Informacao1 from './pages/informacaoPages/infomacao1';
import Landing from './pages/Landing';
import TipoPacote from './pages/TipoPacote';

function Routes(){
    return(
        <BrowserRouter>
            <Route path="/" exact component={Landing}/>
            <Route path="/TipoPacote" component={TipoPacote}/>
            <Route path="/Informacao1" component={Informacao1}/>
        </BrowserRouter>
    );
}

export default Routes;