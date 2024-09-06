// src/pages/Automations.js

import React, { useState } from 'react';
import { Container, Typography, Paper, Button, TextField } from '@mui/material';

const Automations = () => {
  const [automationRule, setAutomationRule] = useState('');
  const [automationList, setAutomationList] = useState([]);

  const addAutomationRule = () => {
    setAutomationList([...automationList, automationRule]);
    setAutomationRule('');
  };

  return (
    <Container maxWidth="md" style={{ marginTop: '50px' }}>
      <Paper elevation={6} style={{ padding: '20px' }}>
        <Typography variant="h4" gutterBottom>
          Configurar Automações
        </Typography>
        <TextField
          label="Nova Regra de Automação"
          variant="outlined"
          fullWidth
          value={automationRule}
          onChange={(e) => setAutomationRule(e.target.value)}
          style={{ marginBottom: '20px' }}
        />
        <Button variant="contained" color="primary" onClick={addAutomationRule}>
          Adicionar Regra
        </Button>

        <Typography variant="h6" style={{ marginTop: '20px' }}>
          Regras de Automação:
        </Typography>
        {automationList.map((rule, index) => (
          <Typography key={index} variant="body1">
            {rule}
          </Typography>
        ))}
      </Paper>
    </Container>
  );
};

export default Automations;
