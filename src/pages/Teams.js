import React, { useState, useEffect } from 'react';
import { Container, Grid, Paper, Typography, TextField, Button, List, ListItem, ListItemText, Snackbar, Alert } from '@mui/material';
import axios from 'axios';

function Teams() {
  const [teamName, setTeamName] = useState('');
  const [members, setMembers] = useState(['']);
  const [teams, setTeams] = useState([]);
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: '' });

  useEffect(() => {
    // Fetch existing teams from the backend
    axios.get('/api/teams')
      .then(response => setTeams(response.data))
      .catch(error => {
        console.error('Erro ao buscar equipes:', error);
        setSnackbar({ open: true, message: 'Erro ao carregar equipes', severity: 'error' });
      });
  }, []);

  const handleAddMember = () => {
    setMembers([...members, '']);
  };

  const handleCreateTeam = () => {
    if (!teamName || members.some(member => !member)) {
      setSnackbar({ open: true, message: 'Preencha todos os campos antes de criar a equipe', severity: 'warning' });
      return;
    }

    const newTeam = { teamName, members };
    axios.post('/api/teams', newTeam)
      .then(response => {
        setTeams([...teams, response.data]);
        setTeamName('');
        setMembers(['']);
        setSnackbar({ open: true, message: 'Equipe criada com sucesso!', severity: 'success' });
      })
      .catch(error => {
        console.error('Erro ao criar equipe:', error);
        setSnackbar({ open: true, message: 'Erro ao criar equipe', severity: 'error' });
      });
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ open: false, message: '', severity: '' });
  };

  return (
    <Container maxWidth="md" style={{ marginTop: '50px' }}>
      <Typography variant="h4" gutterBottom>
        Gerenciamento de Equipes
      </Typography>
      <Paper style={{ padding: '20px' }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              label="Nome da Equipe"
              value={teamName}
              onChange={(e) => setTeamName(e.target.value)}
              fullWidth
            />
          </Grid>
          {members.map((member, index) => (
            <Grid item xs={12} key={index}>
              <TextField
                label={`Membro ${index + 1}`}
                value={member}
                onChange={(e) => {
                  const newMembers = [...members];
                  newMembers[index] = e.target.value;
                  setMembers(newMembers);
                }}
                fullWidth
              />
            </Grid>
          ))}
          <Grid item xs={12}>
            <Button 
              variant="outlined" 
              color="primary" 
              onClick={handleAddMember}
              fullWidth
            >
              Adicionar Membro
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Button 
              variant="contained" 
              color="primary" 
              onClick={handleCreateTeam}
              fullWidth
            >
              Criar Equipe
            </Button>
          </Grid>
        </Grid>

        <Typography variant="h6" style={{ marginTop: '20px' }}>
          Equipes Existentes
        </Typography>
        <List>
          {teams.map(team => (
            <ListItem key={team.id}>
              <ListItemText primary={team.teamName} secondary={`Membros: ${team.members.join(', ')}`} />
            </ListItem>
          ))}
        </List>
      </Paper>

      {/* Snackbar para mostrar mensagens */}
      <Snackbar open={snackbar.open} autoHideDuration={6000} onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity={snackbar.severity} sx={{ width: '100%' }}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Container>
  );
}

export default Teams;
