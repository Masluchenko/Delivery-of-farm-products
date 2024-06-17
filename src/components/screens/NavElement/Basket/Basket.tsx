import { DialogContentText, Typography, Box, Chip, Divider, IconButton, Grid, CardMedia, Card, DialogActions, CardContent, Paper, Button  } from '@mui/material';
import ShoppingBasket from '@mui/icons-material/ShoppingBasket';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import * as React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { experimentalStyled as styled } from '@mui/material/styles';
import Dialog, { DialogProps } from '@mui/material/Dialog';
import DeleteIcon from '@mui/icons-material/Delete';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import Tooltip from '@mui/material/Tooltip';

import { gramOrKilogram } from '../../Assortment/CardCreation/CardMaking'

import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

function Basket() {
    const [open, setOpen] = React.useState(false);
    const [fullWidth, setFullWidth] = React.useState(true);
    const [maxWidth, setMaxWidth] = React.useState<DialogProps['maxWidth']>('lg');
    const [scroll, setScroll] = React.useState<DialogProps['scroll']>('paper');

      const handleClose = () => {
        setOpen(false);
      };
      
      const handleClickOpen = (scrollType: DialogProps['scroll']) => () => {
        setOpen(true);
        setScroll(scrollType);
      };

    return (
        <React.Fragment>
            <IconButton sx={{marginRight: 1}}
                onClick={handleClickOpen('body')}
                color='inherit'>
                <ShoppingBasket />
            </IconButton>
            <Dialog 
              open={open} 
              onClose={handleClose}
              fullWidth={fullWidth}
              maxWidth={maxWidth}
              scroll={scroll}
              
            >
                <Box>
                    <Box display="flex" justifyContent="space-between">        
                        <DialogContentText variant="h4" sx={{margin: 3}} >Корзина</DialogContentText>
                        <Chip 
                         icon={<ProductionQuantityLimitsIcon />} 
                         label='Минимальная сумма заказа 900 ₽' 
                         sx={{margin: 3}} 
                        />
                            <IconButton onClick={handleClose} sx={{margin: 2}}>
                                <CloseIcon />
                            </IconButton>
                    </Box>
                    <Divider variant="middle" flexItem sx={{ marginTop: 1, marginBottom: 1}} />
                    <Box display="flex">
                        <Box flexBasis='70%' sx={{marginBottom: 3}}> 
                            {items.map((items, index) => (
                                <Grid key={index} item >
                                    <Paper sx={{margin: 1,}} >
                                        <Card >
                                            <Box display="flex" justifyContent="space-between">
                                                <Box display="flex">
                                                    <CardMedia 
                                                        component="img"
                                                        height="300"
                                                        image={items.image}
                                                        sx={{
                                                            width: 150,
                                                            height: 150,
                                                            borderRadius: 8,
                                                            margin: 1}}
                                                    />
                                                    <Box>
                                                        <CardContent>
                                                            <Typography variant='subtitle1'>{items.name}</Typography>
                                                            <Box display="flex" >
                                                                <Typography variant='h5'>{items.price}₽</Typography>
                                                                <Typography variant='subtitle1'>/ {gramOrKilogram(items.weight)}</Typography>
                                                            </Box>
                                                        </CardContent>
                                                    </Box>
                                                </Box>
                                                <Box  display="flex" > 
                                                    <Box display="flex" alignItems='center' >
                                                        <IconButton sx={{margin: 1 }}><RemoveIcon /></IconButton>
                                                        <Typography sx={{margin: 1 }}> 1 </Typography>
                                                        
                                                        <IconButton sx={{margin: 1 }}>< AddIcon/></IconButton>
                                                    </Box>
                                                    
                                                    <IconButton sx={{margin: 4 }}>
                                                        <DeleteIcon  />
                                                    </IconButton>
                                                </Box>

                                            </Box>

                                        </Card>
                                    </Paper> 
                                </Grid>    
                            ))}
                        </Box>
                        <Divider 
                         orientation="vertical"
                         variant="middle" 
                         flexItem 
                         sx={{ marginLeft: 0, marginRight: 2}} />
                        <Box >
                            <Box  display="flex" justifyContent="space-between">
                                <Typography >Кол-во товаров</Typography>
                                <Typography sx={{marginRight: 2}}>4</Typography>
                            </Box>
                            <Box  display="flex" justifyContent="space-between" sx={{marginTop: 2}}>
                                <Typography variant="h6" >Вес посылки</Typography>
                                <Typography variant="h6" sx={{marginRight: 2}}>2.04 кг</Typography>
                            </Box>
                            <Box  display="flex" justifyContent="space-between" sx={{marginTop: 2}}>
                                <Typography variant="h6" >Стоимость продуктов</Typography>
                                <Typography variant="h6" sx={{marginRight: 2}}>2562 ₽</Typography>
                            </Box>
                            <Box  display="flex" justifyContent="space-between" sx={{marginTop: 2}}>
                                <Box sx={{display: 'flex', alignItems: 'center'}}>
                                    <Typography variant="h6" >Стоимость доставки</Typography>
                                    <Tooltip title="Доставка 380 ₽, если добавить на 2438 ₽">
                                        <IconButton>
                                            <ErrorOutlineIcon/>
                                        </IconButton>
                                    </Tooltip>

                                </Box>
                                
                                <Typography variant="h6" sx={{marginRight: 2}}>500 ₽</Typography>
                            </Box>
                            <Box  display="flex" justifyContent="space-between" sx={{marginTop: 2}}>
                                <Typography variant="h6" >Итоговая стоимость</Typography>
                                <Typography variant="h6" sx={{marginRight: 2}}>3062 ₽</Typography>
                            </Box>

                            <Box 
                             display="flex"
                             height='65%'
                             flexWrap='wrap'
                             alignContent='space-between'
                             justifyContent="center"
                            >
                                <DialogActions sx={{marginTop: 2}}>
                                    <Button color='success' variant="contained" size="large" type="submit" sx={{width: 300}}>Оформить заказ</Button>
                                </DialogActions>
                                <Button color="inherit" sx={{display:'flex', justifyContent:'center'}} startIcon={<DeleteIcon />}>
                                    Очистить
                                </Button>
                            </Box>

                            

                        </Box>     
                    </Box>
                </Box>
            </Dialog>
        </React.Fragment>
    )
}
export default Basket;

export const items = [
    {
        name: 'Редис с ботвой',
        image: 'https://cdn.esh-derevenskoe.ru/image/cache/catalog/product/13202/57c6ed-600x600.JPG?v=3',
        description: 'тупа хай',
        price: 180,
        weight: 500

    },
    {
        name: 'Помидоры красные',
        image: 'https://cdn.esh-derevenskoe.ru/image/cache/catalog/product/13904/42fcf0-600x600.jpg?v=3',
        description: 'тупа хай',
        price: 620,
        weight: 1
    },
    {
        name: 'Сыр твердый "Лефкадийский Манчего"',
        image: 'https://cdn.esh-derevenskoe.ru/image/cache/catalog/product/15226/80bcda-600x600.jpg?v=3',
        description: 'тупа хай',
        price: 1154,
        weight: 270

    },
    {
        name: 'Сыр твердый "Альпийский"',
        image: 'https://cdn.esh-derevenskoe.ru/image/cache/catalog/product/15225/e0a670-600x600.jpg?v=3',
        description: 'тупа хай',
        price: 608,
        weight: 270

    },
  ];