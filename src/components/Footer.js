import React from 'react';
import { AppBar, Toolbar, IconButton, Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from 'react-router-dom';

function Footer() {
  const navigate = useNavigate();

  return (
    <AppBar position="fixed" color="primary" style={{ top: 'auto', bottom: 0 }}>
      <Toolbar style={{ justifyContent: 'center' }}>
        {/* Ícone de Home no rodapé */}
        <IconButton color="inherit" onClick={() => navigate('/')}>
          <HomeIcon fontSize="large" />
        </IconButton>
        <Typography variant="h6" style={{ marginLeft: '15px', fontWeight: 'bold' }}>
          Sistema - Thomaz Alves Advogados
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Footer;
