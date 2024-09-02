import React, { useEffect, useState } from 'react';
import { Container, Typography, Grid, Card, CardContent, Button } from '@mui/material';
import api from '../api/axios';

function Automations() {
  const [automations, setAutomations] = useState([]);

  useEffect(() => {
    api.get('/automations')
      .then(response => {
        setAutomations(response.data);
      })
      .catch(error => {
        console.error('Erro ao buscar automações:', error);
      });
  }, []);

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
                <Typography>Trigger: {automation.trigger}</Typography>
                <Typography>Ação: {automation.action}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Button variant="contained" color="primary">Adicionar Automação</Button>
    </Container>
  );
}

export default Automations;
