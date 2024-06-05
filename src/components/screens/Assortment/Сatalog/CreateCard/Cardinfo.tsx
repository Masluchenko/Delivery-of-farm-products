import { DialogContentText, Typography, Box, Chip, Divider, IconButton, Grid, CardMedia, Card, DialogActions, CardContent, Paper, Button  } from '@mui/material';
import ShoppingBasket from '@mui/icons-material/ShoppingBasket';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import * as React from 'react';
import CloseIcon from '@mui/icons-material/Close';

import Dialog, { DialogProps } from '@mui/material/Dialog';
import DeleteIcon from '@mui/icons-material/Delete';



import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';


export default function DialogFlex(){
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
    return(

        <React.Fragment>
            
            <Dialog
              onClick={handleClickOpen('body')} 
              open={open} 
              onClose={handleClose}
              fullWidth={fullWidth}
              maxWidth={maxWidth}
              scroll={scroll}
            >
            <Box>
                <Box>
                <CardMedia 
                    component="img"
                    height="300"
                    image={'https://cdn.esh-derevenskoe.ru/image/cache/catalog/product/6462/7aea2b-600x600.JPG?v=3'}
                    sx={{
                        width: 150,
                        height: 150,
                        borderRadius: 8,
                        margin: 1}}
                />

                </Box>
                <Box>

                </Box>
            </Box>

            </Dialog>
        </React.Fragment>
    );
}