import React from 'react';
import { Container, Grid, Card, CardContent, Typography } from '@mui/material';

function Teams() {
  return (
    <Container maxWidth="lg">
      <Typography variant="h4" gutterBottom>
        Gerenciamento de Equipes
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5">Equipe A</Typography>
              <Typography>Descrição da Equipe A.</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5">Equipe B</Typography>
              <Typography>Descrição da Equipe B.</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Teams;
