import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p>© 2024 Todos os direitos reservados</p>
      <nav>
        <a href="/privacy">Privacidade</a>
        <a href="/terms">Termos de uso</a>
      </nav>
    </footer>
  );
}

export default Footer;
