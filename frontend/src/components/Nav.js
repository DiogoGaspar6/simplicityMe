import { Drawer, List, ListItem, ListItemIcon, ListItemText, Divider } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import LogoutIcon from '@mui/icons-material/Logout';
import ApartmentOutlinedIcon from '@mui/icons-material/ApartmentOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import ChecklistOutlinedIcon from '@mui/icons-material/ChecklistOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import TextSnippetOutlinedIcon from '@mui/icons-material/TextSnippetOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import React from 'react';


function Nav({ onLogout }) {
  return (
    <Drawer variant="permanent" anchor="left">
      <List>
        <ListItem>
          <ListItemIcon>
            <ApartmentOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="SimplicityMe" />
        </ListItem>
        <Divider />
      <ListItem button sx={{ cursor: 'pointer' }}>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Overview" />
        </ListItem>
        <ListItem button sx={{ cursor: 'pointer' }}>
          <ListItemIcon>
            <CalendarTodayOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Calendar" />
        </ListItem>
        <ListItem button sx={{ cursor: 'pointer' }}>
          <ListItemIcon>
            <ChecklistOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="To do List" />
        </ListItem>
        <ListItem button sx={{ cursor: 'pointer' }}>
          <ListItemIcon>
            <ShoppingBagOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Shop List" />
        </ListItem>
        <ListItem button sx={{ cursor: 'pointer' }}>
          <ListItemIcon>
            <TextSnippetOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Notes" />
        </ListItem>
        <Divider />
        <ListItem button sx={{ cursor: 'pointer' }}>
          <ListItemIcon>
            <SettingsOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItem>
        <ListItem button sx={{ cursor: 'pointer' }}>
          <ListItemIcon>
            <InfoIcon />
          </ListItemIcon>
          <ListItemText primary="Support" />
        </ListItem>
        <ListItem button onClick={onLogout} sx={{ cursor: 'pointer' }}>
          <ListItemIcon>
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItem>
      </List>
    </Drawer>
  );
}

export default Nav;