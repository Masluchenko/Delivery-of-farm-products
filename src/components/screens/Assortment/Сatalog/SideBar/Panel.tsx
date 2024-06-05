import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import {List, Typography, IconButton, Box} from '@mui/material';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';






import { Link } from 'react-router-dom'

const theme = createTheme({
  components: {
    MuiListItemButton: {
      styleOverrides: {
        root: {
          pl: 4,
          borderRadius: 15, 
          '&:hover': {
            backgroundColor: '#d3e29d'
          },
        },
      },
    },
  },
  
});






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
      <ThemeProvider theme={theme}>
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
            <Link to='Content' style={{ textDecoration: 'none', color: 'inherit' }}>
              <ListItemButton>
                <ListItemText primary='Молоко, яйца и молочная продукция' />
              </ListItemButton>
            </Link>
          <Box sx={{display: 'flex', alignItems: 'center',}}>
            <IconButton
              onClick={handleClickMilk}
              color='inherit'
              sx={{
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

            <ListItemButton>
              <ListItemText primary='Молоко и сливки' />
            </ListItemButton>

            <ListItemButton>
              <ListItemText primary='Творог' />
            </ListItemButton>

            <ListItemButton>
              <ListItemText primary='Яйцо' />
            </ListItemButton>

            <ListItemButton>
              <ListItemText primary='Масло сливочное, топленое' />
            </ListItemButton>

            <ListItemButton>
              <ListItemText primary='Сырки творожные' />
            </ListItemButton>

            <ListItemButton>
              <ListItemText primary='Сметана' />
            </ListItemButton>

            <ListItemButton>
              <ListItemText primary='Йогурт' />
            </ListItemButton>

            <ListItemButton>
              <ListItemText primary='Кефир и кисломолочны напитки' />
            </ListItemButton>

            <ListItemButton>
              <ListItemText primary='Из козьего молока' />
            </ListItemButton>
          </List>
        </Collapse>


        <Box sx={{display: 'flex'}}>
            <ListItemButton>
            <ListItemText primary='Мясо, птица, кролик' />
          </ListItemButton>
          <Box sx={{display: 'flex', alignItems: 'center',}}>
            <IconButton
              onClick={handleClickMeat}
              color='inherit'
              sx={{
                width: 40,
                height: 40,
                borderRadius: 3.4,
                '&:hover': {
                  backgroundColor: '#d3e29d'
                },
              }}>
                      {openMeat ? <ExpandLess /> : <ExpandMore />}
            </IconButton>
          </Box>
        </Box>
        <Collapse in={openMeat} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>

            <ListItemButton>
              <ListItemText primary='Утка' />
            </ListItemButton>

            <ListItemButton>
              <ListItemText primary='Говядина и телятина' />
            </ListItemButton>

            <ListItemButton>
              <ListItemText primary='Курица' />
            </ListItemButton>

            <ListItemButton>
              <ListItemText primary='Кролик' />
            </ListItemButton>

            <ListItemButton>
              <ListItemText primary='Полуфабрикаты' />
            </ListItemButton>

            <ListItemButton>
              <ListItemText primary='Индейка' />
            </ListItemButton>

            <ListItemButton>
              <ListItemText primary='Фарш' />
            </ListItemButton>

            <ListItemButton>
              <ListItemText primary='Для шашлыка и гриля' />
            </ListItemButton>

            <ListItemButton>
              <ListItemText primary='Свинина' />
            </ListItemButton>

            <ListItemButton>
              <ListItemText primary='Баранина' />
            </ListItemButton>

            <ListItemButton>
              <ListItemText primary='Стейки' />
            </ListItemButton>
          </List>
        </Collapse>

        <Box sx={{display: 'flex'}}>
        
          
            <ListItemButton >
                <Link to='Chees' style={{ textDecoration: 'none', color: 'inherit' }}><Box><ListItemText primary='Сыры' sx={{textDecoration:'none !important' , color: 'black' }} /></Box> </Link> 
            </ListItemButton>
          
            

          <Box sx={{display: 'flex', alignItems: 'center',}}>
            <IconButton
              onClick={handleClickChees}
              color='inherit'
              sx={{
                width: 40,
                height: 40,
                borderRadius: 3.4,
                '&:hover': {
                  backgroundColor: '#d3e29d'
                },
              }}>
                      {openChees ? <ExpandLess /> : <ExpandMore />}
            </IconButton>
          </Box>
        </Box>
        <Collapse in={openChees} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>

            <ListItemButton>
              <ListItemText primary='Молодые и рассольные сыры' />
            </ListItemButton>

            <ListItemButton>
              <ListItemText primary='Твердые и полутвердые сыры' />
            </ListItemButton>

            <ListItemButton>
              <ListItemText primary='Плавленые и творожные сыры' />
            </ListItemButton>

            <ListItemButton>
              <ListItemText primary='Козьи и овечьи сыры' />
            </ListItemButton>

          </List>
        </Collapse>

        <Box sx={{display: 'flex'}}>
            <ListItemButton>
            <ListItemText primary='Мясная гастрономия' />
          </ListItemButton>
          <Box sx={{display: 'flex', alignItems: 'center',}}>
            <IconButton
              onClick={handleClickChees}
              color='inherit'
              sx={{
                width: 40,
                height: 40,
                borderRadius: 3.4,
                '&:hover': {
                  backgroundColor: '#d3e29d'
                },
              }}>
                      {openChees ? <ExpandLess /> : <ExpandMore />}
            </IconButton>
          </Box>
        </Box>
        <Collapse in={openChees} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>

            <ListItemButton>
              <ListItemText primary='Колбасы и ветчина' />
            </ListItemButton>

            <ListItemButton>
              <ListItemText primary='Сардельки, сосиски, колбаски' />
            </ListItemButton>

            <ListItemButton>
              <ListItemText primary='Мясные деликотесы' />
            </ListItemButton>

            <ListItemButton>
              <ListItemText primary='Паштет, риеты' />
            </ListItemButton>

            <ListItemButton>
              <ListItemText primary='Сало' />
            </ListItemButton>

          </List>
        </Collapse>

        <Box sx={{display: 'flex'}}>
            <ListItemButton>
            <ListItemText primary='Овощи, фрукты и ягоды' />
          </ListItemButton>
          <Box sx={{display: 'flex', alignItems: 'center',}}>
            <IconButton
              onClick={handleClickChees}
              color='inherit'
              sx={{
                width: 40,
                height: 40,
                borderRadius: 3.4,
                '&:hover': {
                  backgroundColor: '#d3e29d'
                },
              }}>
                      {openChees ? <ExpandLess /> : <ExpandMore />}
            </IconButton>
          </Box>
        </Box>
        <Collapse in={openChees} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>

            <ListItemButton>
              <ListItemText primary='Ранний новый урожай' />
            </ListItemButton>

            <ListItemButton>
              <ListItemText primary='Фрукты' />
            </ListItemButton>

            <ListItemButton>
              <ListItemText primary='Экзотические фрукты' />
            </ListItemButton>

            <ListItemButton>
              <ListItemText primary='Овощи' />
            </ListItemButton>

            <ListItemButton>
              <ListItemText primary='Ягоды' />
            </ListItemButton>

          </List>
        </Collapse>

        <Box sx={{display: 'flex'}}>
            <ListItemButton>
            <ListItemText primary='Рыба, икра и морепродукты' />
          </ListItemButton>
          <Box sx={{display: 'flex', alignItems: 'center',}}>
            <IconButton
              onClick={handleClickChees}
              color='inherit'
              sx={{
                width: 40,
                height: 40,
                borderRadius: 3.4,
                '&:hover': {
                  backgroundColor: '#d3e29d'
                },
              }}>
                      {openChees ? <ExpandLess /> : <ExpandMore />}
            </IconButton>
          </Box>
        </Box>
        <Collapse in={openChees} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>

            <ListItemButton>
              <ListItemText primary='Рыбная гастрономия' />
            </ListItemButton>

            <ListItemButton>
              <ListItemText primary='Рыба охлажденная и замороженная' />
            </ListItemButton>

            <ListItemButton>
              <ListItemText primary='Морепродукты замороженные' />
            </ListItemButton>

            <ListItemButton>
              <ListItemText primary='Рыбная консервация, паштеты и риеты' />
            </ListItemButton>

            <ListItemButton>
              <ListItemText primary='Рыба слабосоленая' />
            </ListItemButton>

          </List>
        </Collapse>

        <Box sx={{display: 'flex'}}>
            <ListItemButton>
            <ListItemText primary='Сладости' />
          </ListItemButton>
          <Box sx={{display: 'flex', alignItems: 'center',}}>
            <IconButton
              onClick={handleClickChees}
              color='inherit'
              sx={{
                width: 40,
                height: 40,
                borderRadius: 3.4,
                '&:hover': {
                  backgroundColor: '#d3e29d'
                },
              }}>
                      {openChees ? <ExpandLess /> : <ExpandMore />}
            </IconButton>
          </Box>
        </Box>
        <Collapse in={openChees} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>

            <ListItemButton>
              <ListItemText primary='Шоколад и конфеты' />
            </ListItemButton>

            <ListItemButton>
              <ListItemText primary='Безе, пастила, зефир, мармелад' />
            </ListItemButton>

          </List>
        </Collapse>

        <Box sx={{display: 'flex'}}>
            <ListItemButton>
            <ListItemText primary='Кулинария' />
          </ListItemButton>
          <Box sx={{display: 'flex', alignItems: 'center',}}>
            <IconButton
              onClick={handleClickChees}
              color='inherit'
              sx={{
                width: 40,
                height: 40,
                borderRadius: 3.4,
                '&:hover': {
                  backgroundColor: '#d3e29d'
                },
              }}>
                      {openChees ? <ExpandLess /> : <ExpandMore />}
            </IconButton>
          </Box>
        </Box>
        <Collapse in={openChees} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>

            <ListItemButton>
              <ListItemText primary='Блины, сырники и запеканка' />
            </ListItemButton>

            <ListItemButton>
              <ListItemText primary='Овощи для гриля' />
            </ListItemButton>

            <ListItemButton>
              <ListItemText primary='Пицца' />
            </ListItemButton>

          </List>
        </Collapse>

        <Box sx={{display: 'flex'}}>
            <ListItemButton>
            <ListItemText primary='Бакалея' />
          </ListItemButton>
          <Box sx={{display: 'flex', alignItems: 'center',}}>
            <IconButton
              onClick={handleClickChees}
              color='inherit'
              sx={{
                width: 40,
                height: 40,
                borderRadius: 3.4,
                '&:hover': {
                  backgroundColor: '#d3e29d'
                },
              }}>
                      {openChees ? <ExpandLess /> : <ExpandMore />}
            </IconButton>
          </Box>
        </Box>
        <Collapse in={openChees} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>

            <ListItemButton>
              <ListItemText primary='Для детского питания' />
            </ListItemButton>

            <ListItemButton>
              <ListItemText primary='Крупы, макароны, лапша' />
            </ListItemButton>

            <ListItemButton>
              <ListItemText primary='Ореховые пасты, урбечи' />
            </ListItemButton>

          </List>
        </Collapse>

        <Box sx={{display: 'flex'}}>
            <ListItemButton>
            <ListItemText primary='Хлеб и выпечка' />
          </ListItemButton>
          <Box sx={{display: 'flex', alignItems: 'center',}}>
            <IconButton
              onClick={handleClickChees}
              color='inherit'
              sx={{
                width: 40,
                height: 40,
                borderRadius: 3.4,
                '&:hover': {
                  backgroundColor: '#d3e29d'
                },
              }}>
                      {openChees ? <ExpandLess /> : <ExpandMore />}
            </IconButton>
          </Box>
        </Box>
        <Collapse in={openChees} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>

            <ListItemButton>
              <ListItemText primary='Хлеб' />
            </ListItemButton>

            <ListItemButton>
              <ListItemText primary='Булочки, лепешки' />
            </ListItemButton>

            <ListItemButton>
              <ListItemText primary='Крекеры, сушки, сухарики' />
            </ListItemButton>

          </List>
        </Collapse>

        <Box sx={{display: 'flex'}}>
            <ListItemButton>
            <ListItemText primary='Консервация и заготовки' />
          </ListItemButton>
          <Box sx={{display: 'flex', alignItems: 'center',}}>
            <IconButton
              onClick={handleClickChees}
              color='inherit'
              sx={{
                width: 40,
                height: 40,
                borderRadius: 3.4,
                '&:hover': {
                  backgroundColor: '#d3e29d'
                },
              }}>
                      {openChees ? <ExpandLess /> : <ExpandMore />}
            </IconButton>
          </Box>
        </Box>
        <Collapse in={openChees} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>

            <ListItemButton>
              <ListItemText primary='Консервы из мяса и птицы' />
            </ListItemButton>

            <ListItemButton>
              <ListItemText primary='Овощные консервы и заготовки' />
            </ListItemButton>

            <ListItemButton>
              <ListItemText primary='Соленья' />
            </ListItemButton>

          </List>
        </Collapse>

        <Box sx={{display: 'flex'}}>
            <ListItemButton>
            <ListItemText primary='Замороженные продукты' />
          </ListItemButton>
          <Box sx={{display: 'flex', alignItems: 'center',}}>
            <IconButton
              onClick={handleClickChees}
              color='inherit'
              sx={{
                width: 40,
                height: 40,
                borderRadius: 3.4,
                '&:hover': {
                  backgroundColor: '#d3e29d'
                },
              }}>
                      {openChees ? <ExpandLess /> : <ExpandMore />}
            </IconButton>
          </Box>
        </Box>
        <Collapse in={openChees} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>

            <ListItemButton>
              <ListItemText primary='Бульоны замороженные' />
            </ListItemButton>

            <ListItemButton>
              <ListItemText primary='Пицца' />
            </ListItemButton>

            <ListItemButton>
              <ListItemText primary='Мороженные и Сорбет' />
            </ListItemButton>

          </List>
        </Collapse>


        <Box sx={{display: 'flex'}}>
            <ListItemButton>
            <ListItemText primary='Напитки' />
          </ListItemButton>
          <Box sx={{display: 'flex', alignItems: 'center',}}>
            <IconButton
              onClick={handleClickChees}
              color='inherit'
              sx={{
                width: 40,
                height: 40,
                borderRadius: 3.4,
                '&:hover': {
                  backgroundColor: '#d3e29d'
                },
              }}>
                      {openChees ? <ExpandLess /> : <ExpandMore />}
            </IconButton>
          </Box>
        </Box>
        <Collapse in={openChees} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>

            <ListItemButton>
              <ListItemText primary='Вода' />
            </ListItemButton>

            <ListItemButton>
              <ListItemText primary='Чай' />
            </ListItemButton>

            <ListItemButton>
              <ListItemText primary='Кофе' />
            </ListItemButton>

          </List>
        </Collapse>





      </List>
    </ThemeProvider>
  );
}

export default Panel;


       
         
//type rangeInfo  = {
  //   name: string,
  //   mas:string[],
  // }
  
  //  const range: rangeInfo[] = [
  //   {
  //     name:"Молоко, яйца и молочная продукция",
  //     mas: ['Молоко и сливки',
  //       'Творог',
  //       'Яйцо',
  //       'Масло сливочное, топленое',
  //       'Сырки твороженные',
  //       'Сметана',
  //       'Йогурт',
  //       'Кефир и кисломолочные напитки',
  //       'Из козьего молока',]
  //   },
  //   {
  //     name:"Мясо, птица, кролик",
  //     mas: ['Говядина и телятина',
  //       'Курица',
  //       'Кролик',
  //       'Полуфабрикаты',
  //       'Индейка',
  //       'Фарш',
  //       'Для шашлыка и граля',
  //       'Свинина',
  //       'Баранина',     
  //       'Стейки',
  //   ]
  //   },
  //   {
  //     name:'Сыры',
  //     mas: ['Молодые и рассольные сыры',
  //     'Твердые и полутвердые сыры',
  //     'Плавленые и творожные сыры',
  //     'Козьи и овечьи сыры',
  //   ]
  //   },
  // ]
  