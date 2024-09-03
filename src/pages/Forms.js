import React, { useState, useEffect } from 'react';
import { Container, Grid, Paper, Typography, TextField, Button, List, ListItem, ListItemText } from '@mui/material';
import axios from 'axios';

function Forms() {
  const [formName, setFormName] = useState('');
  const [formFields, setFormFields] = useState([{ label: '', type: 'text' }]);
  const [forms, setForms] = useState([]);

  useEffect(() => {
    // Fetch existing forms from the backend
    axios.get('/api/forms')
      .then(response => setForms(response.data))
      .catch(error => console.error('Erro ao buscar formulários:', error));
  }, []);

  const handleAddField = () => {
    setFormFields([...formFields, { label: '', type: 'text' }]);
  };

  const handleCreateForm = () => {
    const newForm = { formName, formFields };
    axios.post('/api/forms', newForm)
      .then(response => {
        setForms([...forms, response.data]);
        setFormName('');
        setFormFields([{ label: '', type: 'text' }]);
      })
      .catch(error => console.error('Erro ao criar formulário:', error));
  };

  return (
    <Container maxWidth="md" style={{ marginTop: '50px' }}>
      <Typography variant="h4" gutterBottom>
        Gerenciamento de Formulários
      </Typography>
      <Paper style={{ padding: '20px' }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              label="Nome do Formulário"
              value={formName}
              onChange={(e) => setFormName(e.target.value)}
              fullWidth
            />
          </Grid>
          {formFields.map((field, index) => (
            <Grid item xs={12} key={index}>
              <TextField
                label={`Campo ${index + 1}`}
                value={field.label}
                onChange={(e) => {
                  const newFields = [...formFields];
                  newFields[index].label = e.target.value;
                  setFormFields(newFields);
                }}
                fullWidth
              />
            </Grid>
          ))}
          <Grid item xs={12}>
            <Button 
              variant="outlined" 
              color="primary" 
              onClick={handleAddField}
              fullWidth
            >
              Adicionar Campo
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Button 
              variant="contained" 
              color="primary" 
              onClick={handleCreateForm}
              fullWidth
            >
              Criar Formulário
            </Button>
          </Grid>
        </Grid>
        <Typography variant="h6" style={{ marginTop: '20px' }}>
          Formulários Existentes
        </Typography>
        <List>
          {forms.map(form => (
            <ListItem key={form.id}>
              <ListItemText primary={form.formName} secondary={`Campos: ${form.formFields.map(f => f.label).join(', ')}`} />
            </ListItem>
          ))}
        </List>
      </Paper>
    </Container>
  );
}

export default Forms;
