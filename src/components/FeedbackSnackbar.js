import React from 'react';
import { Snackbar } from '@mui/material';
import { Alert } from '@mui/lab';

function FeedbackSnackbar({ open, handleClose, message, severity }) {
  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
      <Alert onClose={handleClose} severity={severity}>
        {message}
      </Alert>
    </Snackbar>
  );
}

export default FeedbackSnackbar;
