import  { useState } from 'react';
import { Box, Typography, Toolbar, AppBar, IconButton, TextField, InputAdornment, Button, Grid } from '@mui/material';
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
        sx={{ marginBottom: 5 }}
        
          >
          
          <Toolbar sx={{ justifyContent: 'center' }}>
            {/* <Grid  sx={{ flexGrow: 1 }} container justifyContent="center">
              <Grid item xs> */}
              
                <Button variant="text" color="inherit" sx={{borderRadius: '10%'}}>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>Farm products</Typography>
                </Button>
              
                <IconButton 
                 
                color='inherit'
                sx={{border: '2px solid #000', borderRadius: '10%', padding: '0.5rem'}}
                > 
                  <GridViewRoundedIcon />
                  <Typography variant="h6">Каталог</Typography>
                </IconButton>
              {/* </Grid> 
              <Grid item xs={8}> */}
                <TextField id="filled-basic" label='Поиск' variant="filled" InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}/>
                {/* </Grid>
                <Grid> */}
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
              {/* </Grid>
            </Grid>   */}
            
          </Toolbar>
          
        </AppBar>
        
  );
}
export default Header;