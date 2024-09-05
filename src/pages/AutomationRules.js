import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Grid } from '@mui/material';

const AutomationRules = () => {
  const [rules, setRules] = useState([]);

  const handleAddRule = () => {
    const newRule = { condition: '', action: '' }; // Simples exemplo de regra
    setRules([...rules, newRule]);
  };

  return (
    <Container maxWidth="lg" style={{ marginTop: '50px' }}>
      <Typography variant="h4" gutterBottom>Regras de Automação</Typography>
      <Grid container spacing={2}>
        {rules.map((rule, index) => (
          <Grid item xs={12} key={index}>
            <TextField label="Condição" fullWidth />
            <TextField label="Ação" fullWidth style={{ marginTop: '10px' }} />
          </Grid>
        ))}
      </Grid>
      <Button variant="contained" color="primary" onClick={handleAddRule} style={{ marginTop: '20px' }}>
        Adicionar Regra
      </Button>
    </Container>
  );
};

export default AutomationRules;
