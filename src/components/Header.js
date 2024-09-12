import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <nav>
        <a href="/">Início</a>
        <a href="/tasks">Tarefas</a>
        <a href="/report">Relatórios</a>
      </nav>
    </header>
  );
}

export default Header;
