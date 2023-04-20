import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import * as React from 'react';
import AppMenu from '../Components/AppBar';
import NoteForm from '../Components/NoteForm';
// import AppFooter from './../Components/AppFooter';

const theme = createTheme();

export default function Main() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppMenu/>
      <Container component="main" maxWidth="sm" sx={{ mb: 4, minHeight: '75vh'}}>
        <NoteForm />
      </Container>
      {/* <AppFooter/> */}
    </ThemeProvider>
  );
}
