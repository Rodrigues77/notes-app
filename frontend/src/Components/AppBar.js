import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from 'react';

export default function AppMenu() {
  return (
    <AppBar
      position="absolute"
      color="primary"
      elevation={2}
      sx={{
        position: 'relative',
        borderBottom: (t) => `1px solid ${t.palette.divider}`
      }}
    >
      <Toolbar>
        <Typography variant="h6" color="text.white" noWrap>
          ImpactaNotes
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
