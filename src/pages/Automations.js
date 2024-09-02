import React, { useEffect, useState } from 'react';
import { Container, Typography, Grid, Card, CardContent, Button, TextField, Chip } from '@mui/material';
import api from '../api/axios';

function Automations() {
  const [automations, setAutomations] = useState([]);
  const [name, setName] = useState('');
  const [triggers, setTriggers] = useState([]);
  const [actions, setActions] = useState([]);
  const [inputTrigger, setInputTrigger] = useState('');
  const [inputAction, setInputAction] = useState('');

  useEffect(() => {
    api.get('/automations')
      .then(response => {
        setAutomations(response.data);
      })
      .catch(error => {
        console.error('Erro ao buscar automações:', error);
      });
  }, []);

  const handleAddTrigger = () => {
    setTriggers([...triggers, inputTrigger]);
    setInputTrigger('');
  };

  const handleAddAction = () => {
    setActions([...actions, inputAction]);
    setInputAction('');
  };

  const handleSubmit = () => {
    api.post('/automations', { name, triggers, actions })
      .then(response => {
        setAutomations([...automations, response.data]);
        setName('');
        setTriggers([]);
        setActions([]);
      })
      .catch(error => {
        console.error('Erro ao criar automação:', error);
      });
  };

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" gutterBottom>
        Configuração de Automação
      </Typography>
      <Grid container spacing={3}>
        {automations.map(automation => (
          <Grid item xs={12} sm={6} md={4} key={automation.id}>
            <Card>
              <CardContent>
                <Typography variant="h5">{automation.name}</Typography>
                <Typography>Triggers: {automation.triggers.join(', ')}</Typography>
                <Typography>Ações: {automation.actions.join(', ')}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Typography variant="h5" gutterBottom style={{ marginTop: '20px' }}>
        Criar Nova Automação
      </Typography>
      <TextField
        label="Nome da Automação"
        value={name}
        onChange={(e) => setName(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Adicionar Gatilho"
        value={inputTrigger}
        onChange={(e) => setInputTrigger(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Button onClick={handleAddTrigger} variant="contained" color="primary">Adicionar Gatilho</Button>
      {triggers.map((trigger, index) => (
        <Chip key={index} label={trigger} style={{ margin: '5px' }} />
      ))}

      <TextField
        label="Adicionar Ação"
        value={inputAction}
        onChange={(e) => setInputAction(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Button onClick={handleAddAction} variant="contained" color="primary">Adicionar Ação</Button>
      {actions.map((action, index) => (
        <Chip key={index} label={action} style={{ margin: '5px' }} />
      ))}

      <Button onClick={handleSubmit} variant="contained" color="primary" style={{ marginTop: '20px' }}>
        Criar Automação
      </Button>
    </Container>
  );
}

export default Automations;
