import React from 'react'
import { Link } from 'react-router-dom';

import LogoImg from '../images/logo.svg';
import backImg from '../images/seta-voltar.svg';

import '../styles/Components/Header.css';

interface PageHeaderProps{
    pageBack: string;
}

const Header: React.FC<PageHeaderProps> = ( {pageBack} )=> {
    return(
        <header className="page-header">
            <div className="top-bar-container">
                <Link to={pageBack}>
                    <img src={backImg} alt="Voltar"/>
                </Link>
                <img src={LogoImg} alt="Proffy"/>
            </div>
        </header>
    );
}

export default Header;