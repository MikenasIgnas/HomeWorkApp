import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { Outlet } from 'react-router-dom';

const Header = () => (
  <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Home
        </Typography>
        <Box sx={{ width: '200px', display: 'flex', justifyContent: 'space-between' }}>
          <Button variant="contained" href="/LoginPage">Login</Button>
          <Button variant="contained" href="/">Reister</Button>
        </Box>
      </Toolbar>
    </AppBar>
    <Outlet />
  </Box>
  );
export default Header;
