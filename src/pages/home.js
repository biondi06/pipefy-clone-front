// src/pages/Home.js

import React from 'react';
import { Container, Typography, Button, Grid, Paper, IconButton } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from 'react-router-dom';
import './Home.css';  // Arquivo de estilo customizado

function Home() {
  const navigate = useNavigate();

  return (
    <Container maxWidth="lg" className="home-container">
      <IconButton className="home-icon" color="primary" onClick={() => navigate('/')}>
        <HomeIcon fontSize="large" />
      </IconButton>

      <Typography variant="h2" gutterBottom className="home-title">
        Sistema de Gerenciamento - Thomaz Alves Advogados
      </Typography>
      <Typography variant="h5" gutterBottom className="home-subtitle">
        Escolha uma funcionalidade para começar
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {[
          { title: 'Dashboard', path: '/dashboard' },
          { title: 'Tarefas', path: '/tasks' },
          { title: 'Formulários', path: '/forms' },
          { title: 'Relatórios', path: '/report' },
          { title: 'Equipes', path: '/teams' },
          { title: 'Aprovações', path: '/approvals' },
          { title: 'Automações', path: '/automations' }
        ].map((option, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Paper elevation={6} className="home-card">
              <Typography variant="h5" gutterBottom>
                {option.title}
              </Typography>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                className="home-button"
                onClick={() => navigate(option.path)}
              >
                {`Acessar ${option.title}`}
              </Button>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Home;
