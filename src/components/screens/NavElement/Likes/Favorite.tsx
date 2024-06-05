import React from 'react';
import { useState } from 'react';
import { Typography, Box, IconButton, Dialog, DialogTitle, Divider, Paper, Grid, CardMedia, Card   } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { DialogProps } from '@mui/material/Dialog';
import CloseIcon from '@mui/icons-material/Close';
import { gramOrKilogram } from '../../Assortment/CardCreation/CardMaking'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

function Favorite() {
    const [colorsFavorit, setColorsFavorit] = useState('inherit');
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
            <IconButton 
             sx={{marginRight: 1}}
             style={{ color: colorsFavorit }}
             onClick={handleClickOpen('body')}
             color='inherit'>
                <FavoriteIcon />
            </IconButton>
            <Dialog 
              open={open} 
              onClose={handleClose}
              fullWidth={fullWidth}
              maxWidth={maxWidth}
              scroll={scroll}>
                <Box
                display='flex'
                justifyContent='space-between'
                
                >
                    <DialogTitle>Likes</DialogTitle>
                    <IconButton onClick={handleClose}>
                        <CloseIcon/>
                    </IconButton>
                </Box>
                <Divider variant="middle" flexItem sx={{ marginTop: 1, marginBottom: 1}} />
                <Box display="flex" sx={{marginBottom: 5, marginTop: 3}}>
                    <Grid container justifyContent="center" spacing={1}>    
                        {items.map((items, index) => (
                            <Grid key={index} item >
                                <Paper sx={{margin: 1,}} >
                                    <Card >
                                        <Box 
                                        display="flex" 
                                        flexWrap='wrap' 
                                        alignContent='space-between' 
                                        sx={{width:200, height: 350}}>
                                            <Box>
                                                <CardMedia 
                                                    component="img"
                                                    image={items.image}
                                                    sx={{
                                                        width: 200,
                                                        height: 200,
                                                        borderRadius: 4,
                                                        }}
                                                />                                
                                                <Box m={1}>                
                                                    <Typography variant='subtitle1'>{items.name}</Typography>                                        
                                                </Box>
                                            </Box>
                                            <Box>
                                                <Box display="flex" sx={{marginLeft: 1}}>
                                                    <Typography variant='h5'>{items.price}₽</Typography>
                                                    <Typography variant='subtitle1'>/ {gramOrKilogram(items.weight)}</Typography>
                                                </Box>
                                                <Box
                                                display="flex" 
                                                justifyContent="space-between"
                                                width='165%'
                                                sx={{marginBottom: 1}} 
                                                >
                                                    <IconButton
                                                    color ='error'
                                                    sx={{marginLeft: 1 }}
                                                    >
                                                        <FavoriteIcon />
                                                    </IconButton>
                                                    <IconButton
                                                    sx={{marginRight: 1 }}
                                                    >
                                                        <ShoppingBasketIcon/>
                                                    </IconButton>
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Card>
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>    
                </Box>
            </Dialog>
        </React.Fragment>
    )
}
export default Favorite;

export const items = [
    {
        name: 'Салат "Лолло Росса"',
        image: 'https://cdn.esh-derevenskoe.ru/image/cache/catalog/product/11790/11cefd-600x600.JPG?v=3',
        description: 'тупа хай',
        price: 280,
        weight: 140

    },
    {
        name: 'Капуста "Пак-чой"',
        image: 'https://cdn.esh-derevenskoe.ru/image/cache/catalog/product/13295/834cf2-600x600.jpg?v=3',
        description: 'тупа хай',
        price: 420,
        weight: 300

    },
    {
        name: 'Вареники с капустой и яйцом',
        image: 'https://cdn.esh-derevenskoe.ru/image/cache/catalog/product/15218/05d463-600x600.jpg?v=3',
        description: 'тупа хай',
        price: 479,
        weight: 500

    },
    {
        name: 'Пельмени "Светофор"',
        image: 'https://cdn.esh-derevenskoe.ru/image/cache/catalog/product/15215/3049e2-600x600.jpg?v=3',
        description: 'тупа хай',
        price: 899,
        weight: 700

    },
    {
        name: 'Горошек зеленый молодой',
        image: 'https://cdn.esh-derevenskoe.ru/image/cache/catalog/product/10778/014e49-600x600.JPG?v=3',
        description: 'тупа хай',
        price: 400,
        weight: 200

    },
    
]