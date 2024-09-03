import React from 'react';
import { Button, Container, Grid, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <Container maxWidth="md" style={{ textAlign: 'center', marginTop: '100px' }}>
      <Typography variant="h3" gutterBottom>
        Bem-vindo ao Sistema - Thomaz Alves Advogados
      </Typography>
      <Typography variant="h6" gutterBottom>
        Gerenciamento de Tarefas e Automação
      </Typography>
      
      <Grid container spacing={3} justifyContent="center" style={{ marginTop: '50px' }}>
        <Grid item xs={12} sm={6} md={4}>
          <Button 
            variant="contained" 
            color="primary" 
            fullWidth 
            onClick={() => navigate('/dashboard')} 
            style={{ padding: '15px', borderRadius: '8px' }}
          >
            Dashboard
          </Button>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Button 
            variant="contained" 
            color="primary" 
            fullWidth 
            onClick={() => navigate('/tasks')} 
            style={{ padding: '15px', borderRadius: '8px' }}
          >
            Gerenciar Tarefas
          </Button>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Button 
            variant="contained" 
            color="primary" 
            fullWidth 
            onClick={() => navigate('/add-task')} 
            style={{ padding: '15px', borderRadius: '8px' }}
          >
            Adicionar Nova Tarefa
          </Button>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Button 
            variant="contained" 
            color="primary" 
            fullWidth 
            onClick={() => navigate('/automations')} 
            style={{ padding: '15px', borderRadius: '8px' }}
          >
            Automação
          </Button>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Button 
            variant="contained" 
            color="primary" 
            fullWidth 
            onClick={() => navigate('/forms')} 
            style={{ padding: '15px', borderRadius: '8px' }}
          >
            Formulários
          </Button>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Button 
            variant="contained" 
            color="primary" 
            fullWidth 
            onClick={() => navigate('/report')} 
            style={{ padding: '15px', borderRadius: '8px' }}
          >
            Relatórios
          </Button>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Button 
            variant="contained" 
            color="primary" 
            fullWidth 
            onClick={() => navigate('/teams')} 
            style={{ padding: '15px', borderRadius: '8px' }}
          >
            Equipes
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Home;
