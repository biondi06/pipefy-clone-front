// src/pages/Automations.js

import React, { useState } from 'react';
import { Container, TextField, Button, List, ListItem, ListItemText, MenuItem } from '@mui/material';

const Automations = () => {
  const [newAutomation, setNewAutomation] = useState({ event: '', action: '' });
  const [automations, setAutomations] = useState([]);

  const handleAddAutomation = () => {
    setAutomations([...automations, newAutomation]);
    setNewAutomation({ event: '', action: '' });
  };

  return (
    <Container maxWidth="md" style={{ marginTop: '50px' }}>
      <h2>Configurar Automação</h2>
      <TextField
        select
        label="Evento"
        value={newAutomation.event}
        onChange={(e) => setNewAutomation({ ...newAutomation, event: e.target.value })}
        fullWidth
        margin="normal"
      >
        <MenuItem value="taskCreated">Tarefa Criada</MenuItem>
        <MenuItem value="taskCompleted">Tarefa Concluída</MenuItem>
      </TextField>

      <TextField
        select
        label="Ação"
        value={newAutomation.action}
        onChange={(e) => setNewAutomation({ ...newAutomation, action: e.target.value })}
        fullWidth
        margin="normal"
      >
        <MenuItem value="moveToInProgress">Mover para Em Progresso</MenuItem>
        <MenuItem value="moveToDone">Mover para Concluído</MenuItem>
        <MenuItem value="sendNotification">Enviar Notificação</MenuItem>
      </TextField>

      <Button variant="contained" color="primary" onClick={handleAddAutomation} fullWidth>
        Adicionar Automação
      </Button>

      <h3>Automatizações Configuradas</h3>
      <List>
        {automations.map((automation, index) => (
          <ListItem key={index}>
            <ListItemText primary={`Evento: ${automation.event}`} secondary={`Ação: ${automation.action}`} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default Automations;
