import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';

export default function BasicList() {
    let walletAddress = "0x1234567890123456789012345678901234567890";
    let ethBalance = "23.1232345 ETH";
    let ethValue = "$1235.23"

  return (
    <Box sx={{ width: '100%', maxWidth: 410, bgcolor: 'background.paper', boxShadow: 10 }}>
      <nav aria-label="balance">
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <CurrencyBitcoinIcon />
              </ListItemIcon>
              <ListItemText primary={ethBalance}/>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <CurrencyExchangeIcon />
              </ListItemIcon>
              <ListItemText primary={ethValue} />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
      <Divider />
      <nav aria-label="address">
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Wallet Address:" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemText primary={walletAddress} />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
    </Box>
  );
}