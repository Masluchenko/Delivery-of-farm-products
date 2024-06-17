import { Typography, Box, IconButton, Divider, CardContent, Paper, Grid, CardMedia, Card, CardActionArea   } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { gramOrKilogram } from '../../CardCreation/CardMaking';





export default function CreateChees() {

    return(
        <Box>
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
                                                <CardActionArea sx={{borderRadius: 2}}>
                                                <CardMedia 
                                                    component="img"
                                                    image={items.image}
                                                    sx={{
                                                        width: 200,
                                                        height: 200,
                                                        borderRadius: 4,
                                                        }}
                                                />
                                                </CardActionArea>                                
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
                                                    color = 'inherit'
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
        </Box>

    );
}

type itemsInfo = {
    name: string,
    image: string,
    price: number,
    weight: number,
}



const items: itemsInfo[]  = [
    {
        name: 'Сыр Фестивальный',
        image: 'https://cdn.esh-derevenskoe.ru/image/cache/catalog/product/1926/38e5f3-600x600.JPG?v=3',
        price: 936,
        weight: 300

    },
    {
        name: 'Сыр "Пушкинский"',
        image: 'https://cdn.esh-derevenskoe.ru/image/cache/catalog/product/13970/17e86d-600x600.JPG?v=3',
        price: 578,
        weight: 250

    },
    {
        name: 'Сыр "Посадский"',
        image: 'https://cdn.esh-derevenskoe.ru/image/cache/catalog/product/13971/c3e685-600x600.JPG?v=3',
        price: 578,
        weight: 250

    },
    {
        name: 'Брынза из козьего молока',
        image: 'https://cdn.esh-derevenskoe.ru/image/cache/catalog/product/13384/247599-600x600.JPG?v=3',
        price: 465,
        weight: 170

    },
    {
        name: 'Сыр "Мемный"',
        image: 'https://cdn.esh-derevenskoe.ru/image/cache/catalog/product/13969/1a39ee-600x600.JPG?v=3',
        price: 578,
        weight: 250

    },
    {
        name: 'Сыр "Буррата"',
        image: 'https://cdn.esh-derevenskoe.ru/image/cache/catalog/product/6462/7aea2b-600x600.JPG?v=3',
        price: 534,
        weight: 200

    },
    {
        name: 'Сыр "Рикотта" из козьего молока',
        image: 'https://cdn.esh-derevenskoe.ru/image/cache/catalog/product/4260/dc59c2-600x600.JPG?v=3',
        price: 365,
        weight: 150

    },
    {
        name: 'Сыр рассольный "Сулугуни"',
        image: 'https://cdn.esh-derevenskoe.ru/image/cache/catalog/product/3904/616415-600x600.JPG?v=3',
        price: 625,
        weight: 340

    },
    {
        name: 'Сыр ждя жарки "Халлуми"',
        image: 'https://cdn.esh-derevenskoe.ru/image/cache/catalog/product/14362/d70860-600x600.jpg?v=3',
        price: 535,
        weight: 250

    },
    {
        name: 'Сыр рассольный "Сулугуни"',
        image: 'https://cdn.esh-derevenskoe.ru/image/cache/catalog/product/13384/247599-600x600.JPG?v=3',
        price: 625,
        weight: 340

    },
    {
        name: 'Сыр рассольный "Сулугуни"',
        image: 'https://cdn.esh-derevenskoe.ru/image/cache/catalog/product/1926/38e5f3-600x600.JPG?v=3',
        price: 625,
        weight: 340

    },
    {
        name: 'Сыр рассольный "Сулугуни"',
        image: 'https://cdn.esh-derevenskoe.ru/image/cache/catalog/product/13970/17e86d-600x600.JPG?v=3',
        price: 625,
        weight: 340

    },
    
]