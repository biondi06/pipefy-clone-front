import React from 'react';
import { Container, Grid, Card, CardContent, Typography } from '@mui/material';

function Forms() {
  return (
    <Container maxWidth="lg">
      <Typography variant="h4" gutterBottom>
        Gerenciamento de Formulários
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5">Formulário 1</Typography>
              <Typography>Descrição do formulário 1.</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5">Formulário 2</Typography>
              <Typography>Descrição do formulário 2.</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Forms;
