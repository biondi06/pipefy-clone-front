// src/pages/Approvals.js

import React, { useEffect, useState } from 'react';
import { Container, Typography, Paper, Grid, Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import axios from 'axios';

const Approvals = () => {
  const [approvals, setApprovals] = useState([]);
  const [open, setOpen] = useState(false);
  const [newApproval, setNewApproval] = useState({ title: '', description: '' });

  const fetchApprovals = async () => {
    try {
      const response = await axios.get('/api/approval');
      setApprovals(response.data);
    } catch (error) {
      console.error('Erro ao buscar aprovações:', error);
    }
  };

  const handleCreateApproval = async () => {
    try {
      const response = await axios.post('/api/approval', newApproval);
      setApprovals([...approvals, response.data]);
      setOpen(false);
      setNewApproval({ title: '', description: '' });
    } catch (error) {
      console.error('Erro ao criar aprovação:', error);
    }
  };

  useEffect(() => {
    fetchApprovals();
  }, []);

  return (
    <Container maxWidth="md" style={{ marginTop: '50px' }}>
      <Typography variant="h4" gutterBottom>
        Sistema de Aprovações
      </Typography>

      <Button variant="contained" color="primary" onClick={() => setOpen(true)}>
        Criar Nova Aprovação
      </Button>

      <Grid container spacing={3} style={{ marginTop: '20px' }}>
        {approvals.map((approval) => (
          <Grid item xs={12} key={approval.id}>
            <Paper elevation={6} style={{ padding: '20px' }}>
              <Typography variant="h6">{approval.title}</Typography>
              <Typography>{approval.description}</Typography>
              <Typography>Status: {approval.status}</Typography>
              <Button variant="contained" color="primary" style={{ marginTop: '10px' }}>
                Aprovar
              </Button>
              <Button variant="contained" color="secondary" style={{ marginTop: '10px', marginLeft: '10px' }}>
                Rejeitar
              </Button>
            </Paper>
          </Grid>
        ))}
      </Grid>

      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Criar Nova Aprovação</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Título"
            type="text"
            fullWidth
            value={newApproval.title}
            onChange={(e) => setNewApproval({ ...newApproval, title: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Descrição"
            type="text"
            fullWidth
            value={newApproval.description}
            onChange={(e) => setNewApproval({ ...newApproval, description: e.target.value })}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)} color="secondary">
            Cancelar
          </Button>
          <Button onClick={handleCreateApproval} color="primary">
            Criar
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default Approvals;
