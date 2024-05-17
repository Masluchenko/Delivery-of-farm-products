import * as React from 'react';
import { useState } from 'react';
import { Typography, Toolbar, AppBar, IconButton, TextField, InputAdornment, Button } from '@mui/material';
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingBasket from '@mui/icons-material/ShoppingBasket';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from "react-router-dom";
import  Sign  from '../SignUp/Sign';




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
        sx={{ marginBottom: 5 }}>
            <Toolbar sx={{ justifyContent: 'center' }}> 
                  <Link to="/">
                  <Button variant="text" color="success" sx={{marginRight: 3}}>
                    <Typography variant="h6" component="div" 
                    style={{ fontFamily: "Pacifico, cursive" }}
                    sx={{ flexGrow: 1 }}>
                      Farm products
                    </Typography>
                  </Button>
                  </Link>

                  <Link to="/Cards">
                    <Button variant="contained"
                     color='success'
                     sx={{marginRight: 3}}
                     startIcon={<GridViewRoundedIcon />}>
                      Каталог
                    </Button>
                  </Link>
                 
                  <TextField id="filled-basic" color="success" label='Поиск' variant="filled"
                   sx={{ flexBasis: '25%', marginRight: 3 }}
                   InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon />
                      </InputAdornment>
                    ),
                  }}/>
                  
                  <IconButton sx={{marginRight: 1}}
                  color='inherit'>
                    <ShoppingBasket />
                  </IconButton>

                  <IconButton sx={{marginRight: 1}}
                  style={{ color: colors }} onClick={handleClick}
                  color='inherit'
                  
                  >
                    <FavoriteIcon />
                  </IconButton>
                  
                  <Sign />
                  
                  
            </Toolbar>
          
        </AppBar>
        
  );
}
export default Header;