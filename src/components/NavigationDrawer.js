import * as React from 'react';
import { Box, Drawer, Toolbar, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider, DrawerHeader, IconButton } from '@mui/material';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import ReceiptIcon from '@mui/icons-material/Receipt';
import SummarizeIcon from '@mui/icons-material/Summarize';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';


export default function NavigationDrawer ({
    open,
    closeDrawer,
}) {
    const drawerWidth = 240;
    return (

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        anchor="left"
        open={open}
      >
        <IconButton onClick={() => closeDrawer()}>
          <ChevronLeftIcon />
        </IconButton>
        <Divider />
        <List>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <AccountBalanceIcon />
              </ListItemIcon>
              <ListItemText> Transactions </ListItemText>
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ReceiptIcon />
              </ListItemIcon>
              <ListItemText> Invoices </ListItemText>
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <SummarizeIcon />
              </ListItemIcon>
              <ListItemText> Summary </ListItemText>
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    )
}