import { AppBar, Toolbar, useTheme } from '@mui/material';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import * as React from 'react';

function Copyright() {
  const theme = useTheme();
  return (
    <Typography variant="body2" color="text.black">
      {'Copyright © '}
      <Link color="text.white" sx={{textDecorationColor: `${theme.palette.secondary.main}`}} href="">
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
      color="primary"
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
