// src/pages/Workflow.js

import React, { useState } from 'react';
import { Container, Typography, Paper, Grid, Button } from '@mui/material';

const Workflow = () => {
  return (
    <Container maxWidth="md" style={{ marginTop: '50px' }}>
      <Typography variant="h4" gutterBottom>
        Workflow Automático
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper elevation={6} style={{ padding: '20px' }}>
            <Typography variant="h6">Processo Automático 1</Typography>
            <Button variant="contained" color="primary">
              Executar
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Workflow;
