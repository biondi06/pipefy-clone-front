import React, { useState } from 'react';
import { Button, Input } from '@mui/material';

const FileUpload = () => {
  const [file, setFile] = useState(null);

  const handleChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = () => {
    console.log('Arquivo carregado:', file);
  };

  return (
    <div>
      <Input type="file" onChange={handleChange} />
      <Button variant="contained" onClick={handleUpload}>Upload</Button>
    </div>
  );
};

export default FileUpload;
