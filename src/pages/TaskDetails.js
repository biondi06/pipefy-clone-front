import React, { useState, useEffect } from 'react';
import { Container, Typography, TextField, Button, List, ListItem, ListItemText, LinearProgress } from '@mui/material';
import api from '../api/axios';
import { useParams } from 'react-router-dom';

function TaskDetails() {
  const { id } = useParams();
  const [task, setTask] = useState({});
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [attachments, setAttachments] = useState([]);
  const [file, setFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);

  useEffect(() => {
    api.get(`/tasks/${id}`).then(response => {
      setTask(response.data);
    });

    api.get(`/tasks/${id}/comments`).then(response => {
      setComments(response.data);
    });

    api.get(`/tasks/${id}/attachments`).then(response => {
      setAttachments(response.data);
    });
  }, [id]);

  const handleAddComment = () => {
    api.post(`/tasks/${id}/comments`, { content: newComment }).then(response => {
      setComments([...comments, response.data]);
      setNewComment('');
    });
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = () => {
    const formData = new FormData();
    formData.append('file', file);

    api.post(`/tasks/${id}/attachments`, formData, {
      onUploadProgress: (progressEvent) => {
        const progress = Math.round((progressEvent.loaded * 100) / progressEvent.total);
        setUploadProgress(progress);
      },
    }).then(response => {
      setAttachments([...attachments, response.data]);
      setFile(null);
      setUploadProgress(0);
    });
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h4" gutterBottom>
        Detalhes da Tarefa
      </Typography>
      <Typography variant="h5">{task.title}</Typography>
      <Typography>{task.description}</Typography>

      <Typography variant="h6" gutterBottom style={{ marginTop: '20px' }}>
        Comentários
      </Typography>
      <List>
        {comments.map(comment => (
          <ListItem key={comment.id}>
            <ListItemText primary={comment.content} secondary={`Comentário por usuário ${comment.userId}`} />
          </ListItem>
        ))}
      </List>

      <TextField
        label="Adicionar Comentário"
        fullWidth
        margin="normal"
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={handleAddComment}>
        Adicionar Comentário
      </Button>

      <Typography variant="h6" gutterBottom style={{ marginTop: '20px' }}>
        Anexos
      </Typography>
      <input type="file" onChange={handleFileChange} />
      <Button variant="contained" color="primary" onClick={handleUpload} style={{ marginTop: '10px' }}>
        Fazer Upload
      </Button>
      {uploadProgress > 0 && <LinearProgress variant="determinate" value={uploadProgress} style={{ marginTop: '10px' }} />}
      <List>
        {attachments.map(attachment => (
          <ListItem key={attachment.id}>
            <ListItemText primary={attachment.fileName} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

export default TaskDetails;
