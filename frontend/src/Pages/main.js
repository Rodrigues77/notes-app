import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import * as React from 'react';
import AppMenu from '../Components/AppBar';
import NoteForm from '../Components/NoteForm';
import Notes from '../Components/Notes';
import AppFooter from './../Components/AppFooter';

export const theme = createTheme({
  palette: {
    mode: 'light',
    text: {
      white: "#E4E4E4",
      black: "#181818",
    },
    primary: {
      main: '#1976d2'
    }
  },
});

export default function Main() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppMenu />
      <Container component="main" maxWidth="sm" sx={{ mb: 4, minHeight: '80vh' }}>
        <NoteForm />
        <Notes />
      </Container>
      <AppFooter />
    </ThemeProvider>
  );
}
