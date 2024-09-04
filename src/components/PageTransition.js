// src/components/PageTransition.js
import React from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import './PageTransition.css';  // Arquivo CSS para transições

function PageTransition({ children }) {
  return (
    <SwitchTransition>
      <CSSTransition
        key={children.key}
        timeout={300}
        classNames="fade"
      >
        {children}
      </CSSTransition>
    </SwitchTransition>
  );
}

export default PageTransition;
