import { Typography, Toolbar, AppBar, TextField, InputAdornment, Button } from '@mui/material';
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from "react-router-dom";
import  Sign  from '../NavElement/SignUpIn/Sign';
import Basket from '../NavElement/Basket/Basket';
import Favorite from '../NavElement/Likes/Favorite';
import { createTheme } from '@mui/material/styles';


function Header(){

  return (
        <AppBar 
        
        color= 'default'
        position = 'sticky'
        sx={{ marginBottom: 3, marginTop: 0}}>
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

                  <Link to="/CreateCatalog">
                    <Button variant="contained"
                     color='success'
                     sx={{
                      marginRight: 3,
                      fontSize: '15px',
                      transition: 'color 0.4s ease',
                       '&:hover': {
                        backgroundColor: '#d3e29d',
                        color: 'black',
                        
                      
                    },}}
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

                  <Basket />
                  <Favorite />
                  <Sign />
                  
            </Toolbar>
        </AppBar>
  );
}
export default Header;