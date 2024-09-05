import React, { useState } from 'react';
import { Container, Typography, Paper, TextField, Button, List, ListItem, ListItemText } from '@mui/material';

const Teams = () => {
  const [teamName, setTeamName] = useState('');
  const [members, setMembers] = useState([]);
  const [teams, setTeams] = useState([]);

  const handleAddMember = () => {
    setMembers([...members, '']);
  };

  const handleCreateTeam = () => {
    setTeams([...teams, { teamName, members }]);
    setTeamName('');
    setMembers([]);
  };

  return (
    <Container maxWidth="md" style={{ marginTop: '50px' }}>
      <Paper elevation={6} style={{ padding: '20px' }}>
        <Typography variant="h4" gutterBottom>
          Gerenciar Equipes
        </Typography>
        <TextField
          label="Nome da Equipe"
          fullWidth
          margin="normal"
          variant="outlined"
          value={teamName}
          onChange={(e) => setTeamName(e.target.value)}
        />
        {members.map((member, index) => (
          <TextField
            key={index}
            label={`Membro ${index + 1}`}
            fullWidth
            margin="normal"
            variant="outlined"
            value={member}
            onChange={(e) => {
              const newMembers = [...members];
              newMembers[index] = e.target.value;
              setMembers(newMembers);
            }}
          />
        ))}
        <Button variant="outlined" color="primary" onClick={handleAddMember} style={{ marginTop: '10px' }}>
          Adicionar Membro
        </Button>
        <Button variant="contained" color="primary" onClick={handleCreateTeam} style={{ marginTop: '20px' }}>
          Criar Equipe
        </Button>

        <Typography variant="h6" style={{ marginTop: '20px' }}>
          Equipes Criadas
        </Typography>
        <List>
          {teams.map((team, index) => (
            <ListItem key={index}>
              <ListItemText
                primary={team.teamName}
                secondary={`Membros: ${team.members.join(', ')}`}
              />
            </ListItem>
          ))}
        </List>
      </Paper>
    </Container>
  );
};

export default Teams;
