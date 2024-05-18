import { DialogContentText, Typography, Box, Chip, Divider, IconButton, Grid, Paper, Card, CardActionArea, CardContent  } from '@mui/material';
import ShoppingBasket from '@mui/icons-material/ShoppingBasket';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { experimentalStyled as styled } from '@mui/material/styles';
import Dialog, { DialogProps } from '@mui/material/Dialog';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';


function Basket() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    
      };
    
      const handleClose = () => {
        setOpen(false);
      };
      const [maxWidth, setMaxWidth] = React.useState<DialogProps['maxWidth']>('sm');
    return (
        <React.Fragment>
            <IconButton sx={{marginRight: 1}}
                onClick={handleClickOpen}
                color='inherit'>
                    <ShoppingBasket />
            </IconButton>
            <Dialog 
            open={open} 
            onClose={handleClose}
            maxWidth={maxWidth}
            >

                <Box>
                    <Box display="flex" justifyContent="space-evenly">
                    
                        <DialogContentText variant="h4" m={2} >Корзина</DialogContentText>
                        <Chip 
                            icon={<ProductionQuantityLimitsIcon />} 
                            label='Минимальная сумма заказа 900р' 
                            sx={{margin: 3}} />
                            <IconButton onClick={handleClose} sx={{margin: 1}}>
                                <CloseIcon />
                            </IconButton>
                    </Box>
                    <Divider variant="middle" flexItem sx={{ marginTop: 3, marginBottom: 5}} />
                    <Box>
                        <Grid sx={{ flexGrow: 1 }} container justifyContent="center">
                            <Grid item xs={1}>
                    
                                <Grid container justifyContent="center" spacing={2}>
                                {items.map((items, index) => (
                                    <Grid key={index} item>
                                        <CardActionArea>
                                            <Card style={{ backgroundImage: `url(${items.image})`,
                                            backgroundSize: 'cover',
                                            width: 270,
                                            height: 270,
                                            color: 'white',
                                            borderRadius: 13 }}>
                                            <CardContent>
                                                <Typography variant="h6">{items.name}</Typography>
                                            </CardContent>
                                        </Card>
                                    </CardActionArea>
                                    </Grid> 
                                ))}
                                </Grid>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Dialog>
        </React.Fragment>
    )
}
export default Basket;

export const items = [
    {
        name: 'lol',
        image: 'https://cdn.esh-derevenskoe.ru/image/cache/catalog/9b8a49-400x400.jpg?v=3'

    },
    {
        name: 'lol2',
        image: 'https://cdn.esh-derevenskoe.ru/image/cache/catalog/eee36c-400x400.jpg?v=3'

    },
    {
        name: 'lol3',
        image: 'https://cdn.esh-derevenskoe.ru/image/cache/catalog/cccbdf-400x400.jpeg?v=3'

    },
    {
        name: 'lol4',
        image: 'https://cdn.esh-derevenskoe.ru/image/cache/catalog/844a7d-400x400.jpg?v=3'

    },
    {
        name: 'lol',
        image: 'https://cdn.esh-derevenskoe.ru/image/cache/catalog/fdd925-400x400.jpg?v=3'

    },
    {
        name: 'lol2',
        image: 'https://cdn.esh-derevenskoe.ru/image/cache/catalog/eee36c-400x400.jpg?v=3'

    },
   
  ];