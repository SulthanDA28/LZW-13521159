import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component={Link} to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          Composser
        </Typography>
        <Button component={Link} to="/" color="inherit" style={{ marginLeft: 'auto' }}>
          Home
        </Button>
        <Button component={Link} to="/history" color="inherit">
          History
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
