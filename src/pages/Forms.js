import React from 'react';
import { Container, Typography, Paper, TextField, Button } from '@mui/material';

const Forms = () => {
  return (
    <Container maxWidth="md" style={{ marginTop: '50px' }}>
      <Paper elevation={6} style={{ padding: '20px' }}>
        <Typography variant="h4" gutterBottom>
          Criar Formulário
        </Typography>
        <TextField
          label="Nome do Formulário"
          fullWidth
          margin="normal"
          variant="outlined"
        />
        <TextField
          label="Descrição"
          fullWidth
          margin="normal"
          variant="outlined"
        />
        <Button variant="contained" color="primary" style={{ marginTop: '20px' }}>
          Criar
        </Button>
      </Paper>
    </Container>
  );
};

export default Forms;
