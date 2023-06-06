import DeleteIcon from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import * as React from 'react';
import api from '../services/Api';

export default function Note({ data }) {
  const [title, setTitle] = React.useState(data?.title);
  const [content, setContent] = React.useState(data?.content);
  const [INITIAL_TITLE, setINITIAL_TITLE] = React.useState(data?.title);
  const [INITIAL_CONTENT, setINITIAL_CONTENT] = React.useState(data?.content);

  const titleRef = React.useRef(null);
  const contentRef = React.useRef(null);

  async function handleSubmit() {
    try {
      const updatedNote = {
        id: data._id,
        title,
        content
      };

      // console.log('🚀 ~ file: Note.js:52 ~ handleSubmit ~ data:', updatedNote);

      const response = await api.put('/notes', updatedNote);

      if (response.status !== 200) {
        window.alert('Falha ao atualizar nota...');
        console.log('Falha ao atualizar nota...');
      } else {
        console.log('Nota atualizada com sucesso!');
        setINITIAL_TITLE(title);
        setINITIAL_CONTENT(content);
        window.location.reload();
      }
    } catch (err) {
      window.alert('Erro durante a chamada da API');
      console.log('Erro durante a chamada da API');
    }
  }

  async function handleDelete() {
    try {
      const note_id = data._id;

      const response = await api.delete(`/notes/${note_id}`);

      if (response.status !== 200) {
        window.alert('Falha ao deletar nota...');
        console.log('Falha ao deletar nota...');
      } else {
        // window.alert('Nota deletada com sucesso!');
        console.log('Nota deletada com sucesso!');
        window.location.reload();
      }
    } catch (err) {
      window.alert('Erro durante a chamada da API');
      console.log('Erro durante a chamada da API');
    }
  }

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  return (
    <Paper variant="outlined" sx={{ my: { xs: 3 }, mx: { xs: 3 }, p: { xs: 2, md: 3 } }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            id="title"
            fullWidth
            variant="standard"
            value={title}
            inputRef={titleRef}
            onChange={handleTitleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="content"
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
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button
          variant="contained"
          color="primary"
          startIcon={<SaveIcon />}
          onClick={() => handleSubmit()}
          sx={{ mt: 3, ml: 1, justifyContent: 'flex-start' }}
          disabled={
            titleRef?.current?.value === INITIAL_TITLE && contentRef?.current?.value === INITIAL_CONTENT ? true : false
          }
        >
          Salvar
        </Button>
        <Button
          variant="contained"
          color="error"
          startIcon={<DeleteIcon />}
          onClick={() => handleDelete()}
          sx={{ mt: 3, ml: 1, justifyContent: 'flex-end' }}
        >
          Deletar
        </Button>
      </Box>
    </Paper>
  );
}
