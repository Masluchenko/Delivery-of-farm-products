import { Drawer, List, Typography, Box, Chip, Divider } from '@mui/material';
import ShoppingBasket from '@mui/icons-material/ShoppingBasket';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';




function Basket() {
    // const {
    //     cartOpen,
    //     closeCart = Function.prototype, 
    //     order,
    //     removeFromOrder
    // } = props;

    return (
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
        
        
        
        // anchor='right'
        // open={cartOpen}
        // onClose={closeCart}
        // >
        //     <List>
        //         <ListItem>
        //             <ListItemIcon>
        //                 <ShoppingBasket />
        //             </ListItemIcon>
        //             <ListIconText primary='Корзина'/>
        //         </ListItem>
        //     </List>
        // </>

    )
}
export default Basket;