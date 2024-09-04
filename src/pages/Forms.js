import React, { useState } from 'react';
import { Container, Typography, TextField, Button } from '@mui/material';

function Forms() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    fields: []
  });

  const handleAddField = () => {
    setFormData({
      ...formData,
      fields: [...formData.fields, { name: '', type: 'text' }]
    });
  };

  const handleFieldChange = (index, event) => {
    const updatedFields = formData.fields.map((field, i) => 
      i === index ? { ...field, [event.target.name]: event.target.value } : field
    );
    setFormData({ ...formData, fields: updatedFields });
  };

  const handleSubmit = () => {
    console.log('Formulário Criado:', formData);
    // Aqui você integraria a API para salvar o formulário
  };

  return (
    <Container maxWidth="md" style={{ marginTop: '50px' }}>
      <Typography variant="h4" gutterBottom>
        Criação de Formulário
      </Typography>
      <TextField
        label="Título"
        fullWidth
        margin="normal"
        value={formData.title}
        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
      />
      <TextField
        label="Descrição"
        fullWidth
        margin="normal"
        value={formData.description}
        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
      />
      {formData.fields.map((field, index) => (
        <TextField
          key={index}
          label={`Campo ${index + 1}`}
          name="name"
          value={field.name}
          onChange={(e) => handleFieldChange(index, e)}
          fullWidth
          margin="normal"
        />
      ))}
      <Button variant="outlined" onClick={handleAddField}>
        Adicionar Campo
      </Button>
      <Button variant="contained" color="primary" onClick={handleSubmit} style={{ marginLeft: '10px' }}>
        Criar Formulário
      </Button>
    </Container>
  );
}

export default Forms;
