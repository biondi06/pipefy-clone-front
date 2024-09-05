// src/pages/Automations.js

import React, { useState } from 'react';
import { Button, TextField, Container, Typography, Paper, Grid } from '@mui/material';

const Automations = () => {
  const [trigger, setTrigger] = useState('');
  const [action, setAction] = useState('');
  const [automations, setAutomations] = useState([]);

  const addAutomation = () => {
    const newAutomation = { trigger, action };
    setAutomations([...automations, newAutomation]);
    setTrigger('');
    setAction('');
  };

  return (
    <Container maxWidth="md" style={{ marginTop: '50px' }}>
      <Paper elevation={6} style={{ padding: '20px' }}>
        <Typography variant="h4" gutterBottom>
          Gerenciar Automações
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Gatilho"
              fullWidth
              value={trigger}
              onChange={(e) => setTrigger(e.target.value)}
              placeholder="Ex: Quando a tarefa for concluída"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Ação"
              fullWidth
              value={action}
              onChange={(e) => setAction(e.target.value)}
              placeholder="Ex: Mover para a próxima fase"
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" fullWidth onClick={addAutomation}>
              Adicionar Automação
            </Button>
          </Grid>
        </Grid>

        <Typography variant="h6" style={{ marginTop: '20px' }}>
          Automações Criadas
        </Typography>
        <ul>
          {automations.map((auto, index) => (
            <li key={index}>
              Gatilho: {auto.trigger} - Ação: {auto.action}
            </li>
          ))}
        </ul>
      </Paper>
    </Container>
  );
};

export default Automations;
