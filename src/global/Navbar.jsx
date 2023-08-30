import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Button, Grid } from '@mui/material';

const Navbar = ({ showSpendings }) => {
  return (
    <AppBar position="static" style={{ backgroundColor: '#5c6767' }}>
      <Toolbar>
        <Grid container justifyContent="center">
          <Button color="inherit" component={Link} to="/">Overview</Button>
          <Button color="inherit" component={Link} to="/">Transactions</Button>
          <Button color="inherit" component={Link} to="/">Graphical Visualization</Button>
          {showSpendings && <Button color="inherit" component={Link} to="/visualisation">Spendings</Button>}
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
