import React from 'react'
import { range } from './assortment.ts'
import { Grid, Card, CardContent, Typography, CardActionArea, Box} from '@mui/material/';


const Cards: React.FC = () => {

    return (
      <Box >
      <Typography variant="h4"
       display="flex" justifyContent="center"
       sx={{marginBottom: 2}}>Наш ассортимент</Typography>
        <Grid sx={{ flexGrow: 1 }} container justifyContent="center">
          <Grid item xs={8}>
            
            <Grid container justifyContent="center" spacing={2}>
              {range.map((range, index) => (
                <Grid key={index} item>
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
                </Grid> 
              ))}
            </Grid>
          </Grid>
       </Grid>
       </Box>
    );
  };
  
  export default Cards;
  