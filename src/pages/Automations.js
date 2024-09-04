import React, { useState } from 'react';
import { Container, Typography, Button, TextField, MenuItem } from '@mui/material';

function Automations() {
  const [automation, setAutomation] = useState({
    trigger: '',
    action: ''
  });

  const triggers = ['Tarefa Concluída', 'Tarefa Atrasada', 'Nova Tarefa Criada'];
  const actions = ['Enviar Notificação', 'Mover para Concluído', 'Criar Nova Tarefa'];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAutomation({
      ...automation,
      [name]: value
    });
  };

  const handleSubmit = () => {
    console.log('Automação Configurada:', automation);
    // Aqui você integraria a API para salvar a automação
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: '50px' }}>
      <Typography variant="h4" gutterBottom>
        Configuração de Automações
      </Typography>
      <TextField
        select
        label="Gatilho"
        name="trigger"
        value={automation.trigger}
        onChange={handleInputChange}
        fullWidth
        margin="normal"
      >
        {triggers.map((trigger) => (
          <MenuItem key={trigger} value={trigger}>
            {trigger}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        select
        label="Ação"
        name="action"
        value={automation.action}
        onChange={handleInputChange}
        fullWidth
        margin="normal"
      >
        {actions.map((action) => (
          <MenuItem key={action} value={action}>
            {action}
          </MenuItem>
        ))}
      </TextField>
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Configurar Automação
      </Button>
    </Container>
  );
}

export default Automations;
