import  { useState } from 'react';
import { Box, Typography, Toolbar, AppBar, IconButton, TextField, InputAdornment } from '@mui/material';
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingBasket from '@mui/icons-material/ShoppingBasket';
import SearchIcon from '@mui/icons-material/Search';

function Header(){
  const [colors, setColors] = useState('inherit');

  const handleClick = () => {
    setColors('red');
    setTimeout(() => {
      setColors('inherit');
    }, 1000);
  }
  return (
        <AppBar 
        position='static'
        color='transparent'
        sx={{ marginBottom: 5}}
          >
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>Farm products</Typography>
            <IconButton 
            color='inherit'
            >
              <GridViewRoundedIcon />
              <Typography variant="h6">Поиск</Typography>
            </IconButton>
            <TextField id="filled-basic" label='Поиск' variant="filled" InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}/>
            <Box mr={3}>   
            </Box>
            <IconButton 
            color='inherit'
            >
              <ShoppingBasket />
            </IconButton>
            <IconButton 
            style={{ color: colors }} onClick={handleClick}
            color='inherit'
            
            >
              <FavoriteIcon />
            </IconButton>
            <IconButton 
            color='inherit'
            >
              <PersonIcon />
            </IconButton>
            
          </Toolbar>
        </AppBar>
  );
}
export default Header;