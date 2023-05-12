import { AppBar, Toolbar } from '@mui/material';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import * as React from 'react';

function Copyright() {
  return (
    <Typography variant="body2" color="text.black">
      {'Copyright © '}
      <Link color="primary" href="">
        App de Notas
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function AppFooter() {
  return (
    <AppBar
      position="absolute"
      // TODO: Mudar para primary depois!
      // color="primary"
      color="default"
      // ----------
      elevation={2}
      sx={{
        position: 'relative',
        borderBottom: (t) => `1px solid ${t.palette.divider}`
      }}
    >
      <Toolbar>
        <Copyright></Copyright>
      </Toolbar>
    </AppBar>
  );
}
