import React from 'react';
import { Container, Grid, Card, CardContent, Typography } from '@mui/material';

function Automations() {
  return (
    <Container maxWidth="lg">
      <Typography variant="h4" gutterBottom>
        Configuração de Automação
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5">Automação 1</Typography>
              <Typography>Descrição da automação 1.</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5">Automação 2</Typography>
              <Typography>Descrição da automação 2.</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Automations;
