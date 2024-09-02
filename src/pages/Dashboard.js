import React from 'react';
import { Container, Grid, Card, CardContent, Typography } from '@mui/material';

function Dashboard() {
  return (
    <Container maxWidth="lg">
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5">Tarefas</Typography>
              <Typography>Gerencie suas tarefas aqui.</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5">Equipes</Typography>
              <Typography>Gerencie as equipes da sua organização.</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5">Automação</Typography>
              <Typography>Automatize seus processos de trabalho.</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Dashboard;
