import { Dialog, List, Typography, Box, Chip, Divider, IconButton } from '@mui/material';
import ShoppingBasket from '@mui/icons-material/ShoppingBasket';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import React from 'react';




function Basket() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    
      };
    
      const handleClose = () => {
        setOpen(false);
      };
    
    return (
        <React.Fragment>
            <IconButton sx={{marginRight: 1}}
                onClick={handleClickOpen}
                color='inherit'>
                    <ShoppingBasket />
            </IconButton>
            <Dialog open={open}>
                <Box >
                    <Box display="flex" justifyContent="space-evenly">
                    
                        <Typography variant="h4">Корзина</Typography>
                        <Chip 
                            icon={<ProductionQuantityLimitsIcon />} 
                            label='Минимальная сумма заказа 900р' />
                    </Box>
                    <Divider variant="middle" flexItem sx={{ marginTop: 3, marginBottom: 5,   }} />
                    <Box>
                        <Typography>Хай</Typography>
                    </Box>
                </Box>
            </Dialog>
        </React.Fragment>
    )
}
export default Basket;