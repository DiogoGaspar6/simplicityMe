import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Avatar } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';

const Header = ({title, userName}) => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#FFF' }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} color="#000">
          {title}
        </Typography>
        <IconButton sx={{ m: 1 }}>
          <NotificationsIcon />
        </IconButton>
        <Avatar alt={userName} src="" sx={{ m: 2 }}/>
        <Typography variant="body1" component="div" sx={{ m: 2 }} color="#000">
          {userName}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;