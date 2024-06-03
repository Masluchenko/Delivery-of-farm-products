import React, { useState } from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import {List, Typography, IconButton, Box} from '@mui/material';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { Link } from "react-router-dom";

import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';


function Panel(){

  const [openMilk, setOpenMilk] = useState(false);
  const [openMeat, setOpenMeat] = useState(false);
  const [openChees, setOpenChees] = useState(true);

  const handleClickMilk= () => {
    setOpenMilk(!openMilk);
  };

  const handleClickMeat = () => {
    setOpenMeat(!openMeat);
  };
 
  const handleClickChees = () => {
    setOpenChees(!openChees);
  };

    return(
        <List
        sx={{ width: '100%', bgcolor: 'background.paper' }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader" >
            <Typography variant="h5">Каталог</Typography>
          </ListSubheader>
        }
        >

        <Box sx={{display: 'flex'}}>
          <ListItemButton sx={{
                    borderRadius: 3.4, 
                    '&:hover': {
                      backgroundColor: '#d3e29d'
                    },
                    }}>
          <ListItemText primary="Молоко, яйца и молочная продукция" />
        </ListItemButton>

        <Box 
          sx={{
            display: 'flex',
            alignItems: 'center',

          }}
          >
          <IconButton
                    onClick={handleClickMilk}
                    color='inherit'
                    sx={{
                      
                      // justifyContent: 'center',
                      width: 40,
                      height: 40,
                      borderRadius: 3.4,
                      '&:hover': {
                        backgroundColor: '#d3e29d'
                      },
                    }}>
                    {openMilk ? <ExpandLess /> : <ExpandMore />}
          </IconButton>
        </Box>

      </Box>
     
      <Collapse in={openMilk} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>

          <ListItemButton
                        sx={{ 
                          pl: 4,
                          borderRadius: 3.4, 
                          '&:hover': {
                            backgroundColor: '#d3e29d'
                          },
                        }}>
            <ListItemText primary="Starred" />
          </ListItemButton>

          <ListItemButton
                        sx={{                
                          pl: 4,
                            borderRadius: 3.4, 
                          '&:hover': {
                            backgroundColor: '#d3e29d'
                          },
                        }}
                        >


            <ListItemText primary="Sent" />
          </ListItemButton>
        </List>
      </Collapse>



      <ListItemButton onClick={handleClickMeat}>
        <ListItemText primary="Мясо, птица, кролик" />
        {openMeat ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openMeat} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>

          <ListItemButton sx={{ pl: 4 }}>
            <Link to='Meat'><ListItemText primary="All Mail" /></Link>
          </ListItemButton>

          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="Trash" />
          </ListItemButton>

        </List>
      </Collapse>



      <ListItemButton onClick={handleClickChees}>
        <ListItemText primary="Сыры" />
        {openChees ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openChees} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>

          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="All Mail" />
          </ListItemButton>

          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="Trash" />
          </ListItemButton>

        </List>
      </Collapse>


      </List>

    );
}

export default Panel;