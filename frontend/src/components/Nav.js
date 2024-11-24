import { Drawer, List, ListItem, ListItemIcon, ListItemText, Divider } from '@mui/material';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import ApartmentOutlinedIcon from '@mui/icons-material/ApartmentOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import ChecklistOutlinedIcon from '@mui/icons-material/ChecklistOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import TextSnippetOutlinedIcon from '@mui/icons-material/TextSnippetOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import React from 'react';


function Nav({ onLogout, activeScreen, setActiveScreen }) {
  const handleItemClick = (screen) => {
    setActiveScreen(screen);
  }
  return (
    <Drawer variant="permanent" anchor="left">
      <List sx={{ p: '5px' }}>
        <ListItem>
          <ListItemIcon>
            <ApartmentOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="SimplicityMe" />
        </ListItem>
        <Divider sx={{ mb: 2 }} />
        <ListItem
          button
          sx={{
            cursor: 'pointer',
            bgcolor: activeScreen === 'Overview' ? '#000' : 'inherit',
            color: activeScreen === 'Overview' ? '#FFF' : 'inherit',
            borderRadius: '50px',
            m: '5px 0px',
            '&:hover': {
              bgcolor: '#f0f0f0',
              color: '#000',
              '& .MuiListItemIcon-root': {
                color: '#757575'
              }
            }
          }}
          onClick={() => handleItemClick('Overview')}
        >
          <ListItemIcon sx={{
            color: activeScreen === 'Overview' ? '#FFF' : '#757575',
          }} >
            <HomeOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Overview" />
        </ListItem>
        <ListItem
          button
          sx={{
            cursor: 'pointer',
            bgcolor: activeScreen === 'Calendar' ? '#000' : 'inherit',
            color: activeScreen === 'Calendar' ? '#FFF' : 'inherit',
            m: '5px 0px',
            borderRadius: '50px',
            '&:hover': {
              bgcolor: '#f0f0f0',
              color: '#000',
              '& .MuiListItemIcon-root': {
                color: '#757575'
              }
            }
          }}
          onClick={() => handleItemClick('Calendar')}
        >
          <ListItemIcon sx={{
            color: activeScreen === 'Calendar' ? '#FFF' : '#757575',
          }} >
            <CalendarTodayOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Calendar" />
        </ListItem>
        <ListItem
          button
          sx={{
            cursor: 'pointer',
            bgcolor: activeScreen === 'To do List' ? '#000' : 'inherit',
            color: activeScreen === 'To do List' ? '#FFF' : 'inherit',
            m: '5px 0px',
            borderRadius: '50px',
            '&:hover': {
              bgcolor: '#f0f0f0',
              color: '#000',
              '& .MuiListItemIcon-root': {
                color: '#757575'
              }
            }
          }}
          onClick={() => handleItemClick('To do List')}
        >
          <ListItemIcon sx={{
            color: activeScreen === 'To do List' ? '#FFF' : '#757575',
          }} >
            <ChecklistOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="To do List" />
        </ListItem>
        <ListItem
          button
          sx={{
            cursor: 'pointer',
            bgcolor: activeScreen === 'Shop List' ? '#000' : 'inherit',
            color: activeScreen === 'Shop List' ? '#FFF' : 'inherit',
            borderRadius: '50px',
            m: '5px 0px',
            '&:hover': {
              bgcolor: '#f0f0f0',
              color: '#000',
              '& .MuiListItemIcon-root': {
                color: '#757575'
              }
            }
          }}
          onClick={() => handleItemClick('Shop List')}
        >
          <ListItemIcon sx={{
            color: activeScreen === 'Shop List' ? '#FFF' : '#757575',
          }} >
            <ShoppingBagOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Shop List" />
        </ListItem>
        <ListItem
          button
          sx={{
            cursor: 'pointer',
            bgcolor: activeScreen === 'Notes' ? '#000' : 'inherit',
            color: activeScreen === 'Notes' ? '#FFF' : 'inherit',
            borderRadius: '50px',
            m: '5px 0px',
            '&:hover': {
              bgcolor: '#f0f0f0',
              color: '#000',
              '& .MuiListItemIcon-root': {
                color: '#757575'
              }
            }
          }}
          onClick={() => handleItemClick('Notes')}
        >
          <ListItemIcon sx={{
            color: activeScreen === 'Notes' ? '#FFF' : '#757575',
          }} >
            <TextSnippetOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Notes" />
        </ListItem>
        <Divider sx={{ mb: 2 }} />
        <ListItem
          button
          sx={{
            cursor: 'pointer',
            bgcolor: activeScreen === 'Settings' ? '#000' : 'inherit',
            color: activeScreen === 'Settings' ? '#FFF' : 'inherit',
            borderRadius: '50px',
            m: '5px 0px',
            '&:hover': {
              bgcolor: '#f0f0f0',
              color: '#000',
              '& .MuiListItemIcon-root': {
                color: '#757575'
              }
            }
          }}
          onClick={() => handleItemClick('Settings')}
        >
          <ListItemIcon sx={{
            color: activeScreen === 'Settings' ? '#FFF' : '#757575',
          }} >
            <SettingsOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItem>
        <ListItem
          button
          sx={{
            cursor: 'pointer',
            bgcolor: activeScreen === 'Support' ? '#000' : 'inherit',
            color: activeScreen === 'Support' ? '#FFF' : 'inherit',
            borderRadius: '50px',
            '&:hover': {
              bgcolor: '#f0f0f0',
              color: '#000',
              '& .MuiListItemIcon-root': {
                color: '#757575'
              }
            }
          }}
          onClick={() => handleItemClick('Support')}
        >
          <ListItemIcon sx={{
            color: activeScreen === 'Support' ? '#FFF' : '#757575',
          }} >
            <InfoOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Support" />
        </ListItem>
        <ListItem
          button
          onClick={onLogout}
          sx={{
            cursor: 'pointer',
            borderRadius: '50px',
          }}
        >
          <ListItemIcon>
            <LogoutOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItem>
      </List>
    </Drawer>
  );
}

export default Nav;