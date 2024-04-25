import * as React from 'react';

import {CssBaseline, Box, Typography, Toolbar, AppBar, IconButton, Button } from '@mui/material';
import MenuIcon from '@mui/material/Icon'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';


function Header(){



  return (
    <React.Fragment>
      <CssBaseline />
     
        <AppBar position='static'>
          <Toolbar>
            <IconButton edge='start'
            color='inherit'
            arial-label='menu'
            sx={{ mr: 2 }}>
                <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>Farm products</Typography>
            <Box mr={3}>
                <Button color='inherit' variant='outlined'>Log in</Button>
            </Box>
            <Button color='secondary' variant='contained'>sign up</Button>
          </Toolbar>
        </AppBar>
      
      <Toolbar />
      
    </React.Fragment>
  );
}
export default Header;