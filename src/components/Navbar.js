import React from 'react';
import { AppBar, Toolbar, Button, Grid } from '@mui/material';

const Navbar = () => {
    return (
        <AppBar position="static" style={{ backgroundColor: '#3f51b5' }}>
            <Toolbar>
                <Grid container justifyContent="center">
                    <Button color="inherit">Overview</Button>
                    <Button color="inherit">Transactions</Button>
                    <Button color="inherit">Graphical Visualization</Button>
                </Grid>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;
