import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from 'react';

export default function AppMenu() {
  return(
    <AppBar
    position="absolute"
    color="default"
    elevation={0}
    sx={{
      position: 'relative',
      borderBottom: (t) => `1px solid ${t.palette.divider}`
    }}
  >
    <Toolbar>
      <Typography variant="h6" color="inherit" noWrap>
        App de Notas
      </Typography>
    </Toolbar>
  </AppBar>
  )
}