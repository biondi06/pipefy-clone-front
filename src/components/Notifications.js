import React, { useState } from 'react';
import { Snackbar, Button } from '@mui/material';

const Notification = ({ message, open, handleClose }) => (
  <Snackbar
    open={open}
    autoHideDuration={6000}
    onClose={handleClose}
    message={message}
    action={
      <Button color="secondary" size="small" onClick={handleClose}>
        Fechar
      </Button>
    }
  />
);

export default Notification;
