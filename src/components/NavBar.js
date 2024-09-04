import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';  // Ícone de casa

const NavBar = () => {
  return (
    <AppBar position="fixed" color="primary">
      <Toolbar>
        {/* Botão Home visível e sempre no canto esquerdo */}
        <IconButton
          edge="start"
          color="inherit"
          component={Link}
          to="/"
          aria-label="home"
        >
          <HomeIcon /> {/* Ícone de Casa */}
        </IconButton>
        
        {/* Nome do Sistema */}
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Sistema - Thomaz Alves Advogados
        </Typography>

        {/* Links para outras páginas */}
        <Button color="inherit" component={Link} to="/dashboard">
          Dashboard
        </Button>
        <Button color="inherit" component={Link} to="/tasks">
          Tarefas
        </Button>
        <Button color="inherit" component={Link} to="/add-task">
          Adicionar Tarefa
        </Button>
        <Button color="inherit" component={Link} to="/kanban">
          Kanban
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
