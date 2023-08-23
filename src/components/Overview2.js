import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

export default function BasicList() {
    let nameTag = 'builder';
    let lastTXN = '2023-08-23';
    let firstTXN = '2023-01-01';

  return (
    <Box sx={{ display: 'inline-flex', flexDirection: 'column', width: '100%', maxWidth: 600, bgcolor: 'background.paper', boxShadow: 10}}>
      <nav aria-label="transactions">
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ListItemText primary="Last Transaction: " />
              </ListItemIcon>
              <ListItemText primary={lastTXN}/>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ListItemText primary="First Transaction: " />
              </ListItemIcon>
              <ListItemText primary={firstTXN} />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
      <Divider />
      <nav aria-label="nametag">
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Name Tag:" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemText primary={nameTag} />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
    </Box>
  );
}