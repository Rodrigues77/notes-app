import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import api from '../services/Api';

export default function NoteForm() {
  const [title, setTitle] = React.useState('');
  const [content, setContent] = React.useState('');

  const titleRef = React.useRef(null);
  const contentRef = React.useRef(null);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  async function handleSubmit() {
    try {
      const data = {
        title,
        content
      };

      const response = await api.post('/notes', data);

      if (response.status !== 200) {
        window.alert('Falha ao enviar nota...');
        console.log('Falha ao enviar nota...');
      } else {
        window.alert('Nota enviada com sucesso!');
        console.log('Nota enviada com sucesso!');
        setTitle('');
        setContent('');
        window.location.reload();
      }
    } catch (err) {
      window.alert('Erro durante a chamada da API');
      console.log('Erro durante a chamada da API');
    }
  }

  React.useEffect(() => {
    if (titleRef.current) {
      titleRef.current.focus();
    }
  }, []);

  React.useEffect(() => {
    if (contentRef.current) {
      contentRef.current.focus();
    }
  }, []);

  return (
    <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
      <Typography variant="h6" color="text.black" gutterBottom>
        Adicionar Nota
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            id="title"
            label="Título"
            fullWidth
            variant="standard"
            value={title}
            inputRef={titleRef}
            onChange={handleTitleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="content"
            label="Conteúdo"
            fullWidth
            multiline
            rows={10}
            variant="standard"
            value={content}
            inputRef={contentRef}
            onChange={handleContentChange}
          />
        </Grid>
      </Grid>
      <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
        <Button onClick={() => handleSubmit()} sx={{ mt: 3, ml: 1 }} disabled={!title || !content}>
          Enviar
        </Button>
      </Box>
    </Paper>
  );
}
