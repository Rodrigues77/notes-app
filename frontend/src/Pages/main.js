import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import * as React from 'react';
import AppMenu from '../Components/AppBar';
import Content from '../Components/Content';
import AppFooter from './../Components/AppFooter';

export const theme = createTheme({
  palette: {
    mode: 'light',
    text: {
      white: '#f6f6f6',
      black: '#181818'
    },
    primary: {
      main: '#1976d2'
      // main: '#49b7aa'
    }
    // secondary: {
    // main: '#d98673'
    // }
  }
});

export default function Main() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppMenu />
      <Content />
      <AppFooter />
    </ThemeProvider>
  );
}
