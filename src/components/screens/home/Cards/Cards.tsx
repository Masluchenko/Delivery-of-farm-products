import React from 'react'
import { range } from './assortment.ts'
import { Card, CardContent, Typography, CardActionArea, Box} from '@mui/material/';
import Grid from '@mui/material/Unstable_Grid2';

const Cards: React.FC = () => {

    return (
      <Box>
        <Box sx={{marginBottom: 2}}>
          <Typography 
          variant="h4"
          display="flex"
          justifyContent="center">
            Наш ассортимент
          </Typography>
        </Box>
            
        <Box sx={{  marginLeft: 1}}>     
          <Grid container spacing={1}>
            {range.map((range, index) => (
              <Grid  key={index} p={1}  display="flex" justifyContent="center" alignItems="center">
                <Box sx={{ borderRadius: 4, width: 270}}>
                  <CardActionArea>
                    <Card style={{ backgroundImage: `url(${range.image})`,
                      backgroundSize: 'cover',
                      width: 270,
                      height: 270,
                      color: 'white',
                      borderRadius: 16 }}>
                      <CardContent>
                      <Typography variant="h6">{range.name}</Typography>
                      </CardContent>
                    </Card>
                  </CardActionArea>
                </Box>
              </Grid> 
            ))}
          </Grid>
            
        
        </Box>
      </Box>
      
    );
  };
  
  export default Cards;
  