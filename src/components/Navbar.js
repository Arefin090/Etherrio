import React from 'react';
import { AppBar, Toolbar, Button, Grid } from '@mui/material';
import { BrowserRouter,Route, Routes } from 'react-router-dom';



const Navbar = ({ handleOverviewClick, handleTransactionsClick }) => {
    return (
        
        
        <AppBar position="static" style={{ backgroundColor: '#5c6767' }}>
            <Toolbar>
                <Grid container justifyContent="center">
                    <Button color="inherit" onClick={handleOverviewClick}>Overview</Button>
                    <Button color="inherit" onClick={handleTransactionsClick}>Transactions</Button>
                    <Button color="inherit">Graphical Visualization</Button>
                    
                </Grid>
            </Toolbar>
        </AppBar>
        
    );
}


export default Navbar;
