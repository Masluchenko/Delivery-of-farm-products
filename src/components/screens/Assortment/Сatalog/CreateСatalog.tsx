import { Box, Grid, Button } from '@mui/material/';
import { Link } from "react-router-dom";

import Panel from './SideBar/Panel'

import { Outlet } from 'react-router-dom';

export default function CreateCatalog() {
    return(
        <Box sx={{ display: 'flex', justifyCentent: 'center'}}>
            <Box sx={{ margin:2, marginTop: 0, marginRight: 0 ,width: 300}}>
                <Panel />
            </Box>
        
            <Box sx={{width: '90%'}}>
                <Outlet />
            </Box>
        </Box>
    );
}
