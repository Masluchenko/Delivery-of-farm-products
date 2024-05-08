import React from 'react'
import { range } from './assortment.ts'
import { Grid, Card, CardContent, Typography, CardActionArea, Box} from '@mui/material/';


const Cards: React.FC = () => {

    return (
      <Box >
        <Grid sx={{ flexGrow: 1 }} container justifyContent="center">
          <Grid item xs={8}>
            <Typography variant="h4" >Наш ассортимент</Typography>
            <Grid container justifyContent="center" spacing={2.5}>
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
  