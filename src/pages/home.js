import React from 'react';
import { Container, Typography, Button, Grid, Paper, IconButton } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <Container maxWidth="lg" style={{ marginTop: '80px', textAlign: 'center' }}>
      {/* Ícone de casa no canto superior esquerdo */}
      <IconButton
        style={{ position: 'absolute', top: '20px', left: '20px' }}
        color="primary"
        onClick={() => navigate('/')}
      >
        <HomeIcon fontSize="large" />
      </IconButton>

      <Typography variant="h2" gutterBottom style={{ fontWeight: 'bold', color: '#041b33' }}>
        Sistema de Gerenciamento - Thomaz Alves Advogados
      </Typography>
      <Typography variant="h5" gutterBottom style={{ marginBottom: '50px', color: '#6c757d' }}>
        Escolha uma funcionalidade para começar
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={6} style={{ padding: '30px', transition: 'transform 0.3s ease' }}>
            <Typography variant="h5" gutterBottom>
              Dashboard
            </Typography>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              style={{ padding: '15px', fontSize: '18px' }}
              onClick={() => navigate('/dashboard')}
            >
              Acessar Dashboard
            </Button>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={6} style={{ padding: '30px', transition: 'transform 0.3s ease' }}>
            <Typography variant="h5" gutterBottom>
              Tarefas
            </Typography>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              style={{ padding: '15px', fontSize: '18px' }}
              onClick={() => navigate('/tasks')}
            >
              Gerenciar Tarefas
            </Button>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={6} style={{ padding: '30px', transition: 'transform 0.3s ease' }}>
            <Typography variant="h5" gutterBottom>
              Formulários
            </Typography>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              style={{ padding: '15px', fontSize: '18px' }}
              onClick={() => navigate('/forms')}
            >
              Criar Formulários
            </Button>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={6} style={{ padding: '30px', transition: 'transform 0.3s ease' }}>
            <Typography variant="h5" gutterBottom>
              Relatórios
            </Typography>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              style={{ padding: '15px', fontSize: '18px' }}
              onClick={() => navigate('/report')}
            >
              Visualizar Relatórios
            </Button>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={6} style={{ padding: '30px', transition: 'transform 0.3s ease' }}>
            <Typography variant="h5" gutterBottom>
              Equipes
            </Typography>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              style={{ padding: '15px', fontSize: '18px' }}
              onClick={() => navigate('/teams')}
            >
              Gerenciar Equipes
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Home;
