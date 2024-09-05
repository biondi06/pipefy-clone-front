// src/components/FormField.js

import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

const FormField = ({ label, type }) => {
  const [value, setValue] = useState('');

  return (
    <div style={{ marginBottom: '20px' }}>
      <TextField
        label={label}
        type={type}
        fullWidth
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default FormField;
