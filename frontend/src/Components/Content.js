import { Grid } from '@mui/material';
import * as React from 'react';
import '../index.css';
import NoteForm from './NoteForm';
import Notes from './Notes';

export default function Content() {
  return (
    <Grid container sx={{ minHeight: '100vh' }}>
      <Grid item xs={12} md={6} className={'sticky-noteForm'}>
        <NoteForm />
      </Grid>
      <Grid item xs={12} md={6}>
        <Notes />
      </Grid>
    </Grid>
  );
}
