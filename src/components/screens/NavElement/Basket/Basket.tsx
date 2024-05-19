import { DialogContentText, Typography, Box, Chip, Divider, IconButton, Grid, CardMedia, Card, CardActionArea, CardContent, Paper  } from '@mui/material';
import ShoppingBasket from '@mui/icons-material/ShoppingBasket';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import * as React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { experimentalStyled as styled } from '@mui/material/styles';
import Dialog, { DialogProps } from '@mui/material/Dialog';
import DeleteIcon from '@mui/icons-material/Delete';

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
                            label='Минимальная сумма заказа 900р' 
                            sx={{margin: 3}} />
                            <IconButton onClick={handleClose} sx={{margin: 2}}>
                                <CloseIcon />
                            </IconButton>
                    </Box>
                    <Divider variant="middle" flexItem sx={{ marginTop: 1, marginBottom: 1}} />
                    <Box >
                           
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
                                                            <Typography variant='subtitle1'
                                                            >{items.name}</Typography>

                                                            <Box display="flex" >

                                                            <Typography variant='h5'
                                                            >{items.price}₽</Typography>

                                                            <Typography variant='subtitle1'
                                                            // sx={{marginTop: 1}}
                                                            >/ {gramOrKilogram(items.weight)}</Typography>

                                                            
                                                            

                                                            </Box>
                                                        </CardContent>


                                                        </Box>
                                                    </Box>
                                                    
                                                        <IconButton><RemoveIcon /></IconButton>
                                                        
                                                         <IconButton>< AddIcon/></IconButton>

                                                    

                                                <IconButton sx={{margin: 4, borderRadius: '50%', }}>
                                                    <DeleteIcon  />
                                                </IconButton>
                                                </Box>

                                              </Card>
                                        </Paper>
                                    
                                </Grid>    
                                ))}
                        
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