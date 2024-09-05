import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import { Brightness4, Brightness7 } from '@mui/icons-material';

const NavBar = ({ darkMode, toggleDarkMode }) => {
  return (
    <AppBar position="fixed" color="primary" style={{ top: 0, bottom: 'auto', height: '64px' }}>
      <Toolbar style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        
        {/* Ícone da Home no lado esquerdo */}
        <IconButton edge="start" color="inherit" component={Link} to="/" aria-label="home">
          <HomeIcon />
        </IconButton>

        {/* Centralizando o título no rodapé superior */}
        <Typography variant="h6" style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)' }}>
          Sistema - Thomaz Alves Advogados
        </Typography>

        {/* Ícone de alternância entre Modo Escuro e Modo Claro */}
        <IconButton edge="end" color="inherit" onClick={toggleDarkMode}>
          {darkMode ? <Brightness7 /> : <Brightness4 />}
        </IconButton>

        {/* Botões de Navegação */}
        <div>
          <Button color="inherit" component={Link} to="/dashboard">
            Dashboard
          </Button>
          <Button color="inherit" component={Link} to="/tasks">
            Tarefas
          </Button>
          <Button color="inherit" component={Link} to="/kanban">
            Kanban
          </Button>
          <Button color="inherit" component={Link} to="/approvals">
            Aprovações
          </Button>
          <Button color="inherit" component={Link} to="/calendar">
            Calendário
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
