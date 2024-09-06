// src/pages/Templates.js
import React, { useState } from 'react';
import { Container, Paper, Typography, Grid, Button, TextField } from '@mui/material';
import { toast } from 'react-toastify';

const Templates = () => {
  const [templates, setTemplates] = useState([
    {
      id: 1,
      name: 'Processo de Onboarding',
      steps: ['Criar conta de e-mail', 'Preparar kit de boas-vindas', 'Treinamento inicial']
    },
    {
      id: 2,
      name: 'Processo de Venda',
      steps: ['Identificar lead', 'Fazer contato inicial', 'Negociar proposta', 'Fechar venda']
    }
  ]);

  const [newTemplateName, setNewTemplateName] = useState('');
  const [newTemplateSteps, setNewTemplateSteps] = useState('');

  const handleAddTemplate = () => {
    if (newTemplateName === '' || newTemplateSteps === '') {
      toast.error('Preencha todos os campos para adicionar um template.');
      return;
    }

    const newTemplate = {
      id: templates.length + 1,
      name: newTemplateName,
      steps: newTemplateSteps.split(',').map(step => step.trim())
    };

    setTemplates([...templates, newTemplate]);
    setNewTemplateName('');
    setNewTemplateSteps('');
    toast.success('Template adicionado com sucesso!');
  };

  return (
    <Container maxWidth="md" style={{ marginTop: '50px' }}>
      <Paper elevation={6} style={{ padding: '20px' }}>
        <Typography variant="h4" gutterBottom>
          Templates de Processos
        </Typography>

        <Typography variant="body1" gutterBottom>
          Crie e gerencie templates de processos para facilitar tarefas repetitivas.
        </Typography>

        <TextField
          label="Nome do Template"
          variant="outlined"
          fullWidth
          value={newTemplateName}
          onChange={(e) => setNewTemplateName(e.target.value)}
          style={{ marginBottom: '20px' }}
        />

        <TextField
          label="Etapas do Processo (separadas por vírgula)"
          variant="outlined"
          fullWidth
          value={newTemplateSteps}
          onChange={(e) => setNewTemplateSteps(e.target.value)}
          style={{ marginBottom: '20px' }}
        />

        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleAddTemplate}
          style={{ marginBottom: '20px' }}
        >
          Adicionar Template
        </Button>

        <Grid container spacing={2}>
          {templates.map((template) => (
            <Grid item xs={12} key={template.id}>
              <Paper elevation={3} style={{ padding: '15px' }}>
                <Typography variant="h6">{template.name}</Typography>
                <Typography variant="body2">Etapas:</Typography>
                <ul>
                  {template.steps.map((step, index) => (
                    <li key={index}>{step}</li>
                  ))}
                </ul>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Container>
  );
};

export default Templates;
