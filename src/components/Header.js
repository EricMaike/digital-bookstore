import React from 'react';
import logo from '../images/Logo.png'
import '../styles/header.css'

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Logo da livraria" id='logo'/>
      <div className="search-bar">
        <input type="text" placeholder="Pesquisar livros..." />
        <button>Buscar</button>
      </div>
    </header>
  );
}

export default Header;
