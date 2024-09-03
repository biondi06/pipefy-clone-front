import React, { useState, useEffect } from 'react';
import { Container, Grid, Paper, Typography, TextField, Button, List, ListItem, ListItemText } from '@mui/material';
import axios from 'axios';

function Automations() {
  const [automationName, setAutomationName] = useState('');
  const [trigger, setTrigger] = useState('');
  const [action, setAction] = useState('');
  const [automations, setAutomations] = useState([]);

  useEffect(() => {
    // Fetch existing automations from the backend
    axios.get('/api/automations')
      .then(response => setAutomations(response.data))
      .catch(error => console.error('Erro ao buscar automações:', error));
  }, []);

  const handleCreateAutomation = () => {
    const newAutomation = { automationName, trigger, action };
    axios.post('/api/automations', newAutomation)
      .then(response => {
        setAutomations([...automations, response.data]);
        setAutomationName('');
        setTrigger('');
        setAction('');
      })
      .catch(error => console.error('Erro ao criar automação:', error));
  };

  return (
    <Container maxWidth="md" style={{ marginTop: '50px' }}>
      <Typography variant="h4" gutterBottom>
        Gerenciamento de Automação
      </Typography>
      <Paper style={{ padding: '20px' }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              label="Nome da Automação"
              value={automationName}
              onChange={(e) => setAutomationName(e.target.value)}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Gatilho"
              value={trigger}
              onChange={(e) => setTrigger(e.target.value)}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Ação"
              value={action}
              onChange={(e) => setAction(e.target.value)}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <Button 
              variant="contained" 
              color="primary" 
              onClick={handleCreateAutomation}
              fullWidth
            >
              Criar Automação
            </Button>
          </Grid>
        </Grid>
        <Typography variant="h6" style={{ marginTop: '20px' }}>
          Automations Existentes
        </Typography>
        <List>
          {automations.map(auto => (
            <ListItem key={auto.id}>
              <ListItemText primary={auto.automationName} secondary={`Gatilho: ${auto.trigger} - Ação: ${auto.action}`} />
            </ListItem>
          ))}
        </List>
      </Paper>
    </Container>
  );
}

export default Automations;
