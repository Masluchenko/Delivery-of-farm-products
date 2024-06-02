import { Box, Grid, Button } from '@mui/material/';
import { Link } from "react-router-dom";
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import Cards from '../../Home/Cards/Cards'
import Panel from './SideBar/Panel'
function CreateCatalog() {
    return(
        <Box sx={{ display: 'flex' }}>
            <Box sx={{margin:2, marginTop: 0}}>
                <Panel />
            </Box>
        
            <Box sx={{justifyContent: ''}}>
                <Cards />
            </Box>
        </Box>


    );
}
export default CreateCatalog;