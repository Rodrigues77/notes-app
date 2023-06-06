import { Grid } from '@mui/material';
import * as React from 'react';
import NoteForm from './NoteForm';
import Notes from './Notes';

export default function Content() {
  return (
    <Grid container sx={{ minHeight: '100vh' }}>
      {/* Esse estilo é uma adaptação técnica emergencial para fazer a nota a ser criada sempre ficar à esquerda.*/}
      <Grid
        item
        xs={12}
        md={6}
        style={{
          position: 'sticky',
          position: '-webkit-sticky' /* Safari */,
          top: 0,
          height: '1px'
        }}
      >
        <NoteForm />
      </Grid>
      <Grid item xs={12} md={6}>
        <Notes />
      </Grid>
    </Grid>
  );
}
