import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import api from '../services/Api';

export default function Note({ data }) {
  const [title, setTitle] = React.useState(data?.title);
  const [content, setContent] = React.useState(data?.content);

  const titleRef = React.useRef(null);
  const contentRef = React.useRef(null);

  async function updateNote(param) {
    const { title, content, id } = param;
    try {
      let data = {
        id: id,
      };

      if (title) {
        data = { ...data, title: title };
      }

      if (content) {
        data = { ...data, content: content };
      }

      console.log("🚀 updateNote ~ data:", data)
      
      let response = null;
      // response = await api.post('/notes', data);

      if (response.status !== 200) {
        console.log('Falha ao atualizar nota...');
      } else {
        console.log('Nota atualizada com sucesso!');
        setTitle('');
        setContent('');
      }
    } catch (err) {
      console.log('Erro durante a chamada da API');
    }
  }

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleOnBlur = () => {
    const noteData = {
      title: title,
      content: content,
      id: data?._id
    }
    // updateNote(noteData);
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
    <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }} >
      <Grid container spacing={3} >
        <Grid item xs={12} md={12}>
          <TextField
            id="title"
            fullWidth
            variant="standard"
            disabled={true}
            value={title}
            inputRef={titleRef}
            onChange={handleTitleChange}
            onBlur={handleOnBlur}
          />
        </Grid>
        <Grid item xs={12} md={12} height={"15em"}>
          <TextField
            id="content"
            fullWidth
            variant="standard"
            disabled={true}
            value={content}
            inputRef={contentRef}
            onChange={handleContentChange}
            onBlur={handleOnBlur}
          />
        </Grid>
      </Grid>
    </Paper>
  );
}
