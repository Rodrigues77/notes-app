import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from 'react';

export default function AppMenu() {
  return (
    <AppBar
      position="absolute"
      // TODO: Mudar para primary depois!
      color="default"
      // color="primary"
      // ----------
      elevation={2}
      sx={{
        position: 'relative',
        borderBottom: (t) => `1px solid ${t.palette.divider}`
      }}
    >
      <Toolbar>
        <Typography variant="h6" color="default" noWrap>
          {/* <Typography variant="h6" color="text.black" noWrap> */}
          App de Notas
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
