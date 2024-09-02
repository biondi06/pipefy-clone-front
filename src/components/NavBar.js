import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Sistema - Thomaz Alves Advogados
        </Typography>
        <Button color="inherit" component={Link} to="/">Dashboard</Button>
        <Button color="inherit" component={Link} to="/tasks">Tarefas</Button>
        <Button color="inherit" component={Link} to="/teams">Equipes</Button>
        <Button color="inherit" component={Link} to="/automations">Automação</Button>
        <Button color="inherit" component={Link} to="/forms">Formulários</Button>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
