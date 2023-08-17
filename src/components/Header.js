import React from 'react';
import logo from '../images/Logo.png'

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Logo da livraria" />
      <div className="search-bar">
        <input type="text" placeholder="Pesquisar livros..." />
        <button>Buscar</button>
      </div>
    </header>
  );
}

export default Header;
