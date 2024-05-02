import React from 'react'
import { range } from './assortment.ts'
import { Grid, Card, CardContent, Typography, CardActionArea} from '@mui/material/';


const Cards: React.FC = () => {

    return (
        <Grid sx={{ flexGrow: 1 }} container justifyContent="center">
          <Grid item xs={7}>
            <Grid container justifyContent="center" spacing={2}>
              {range.map((range, index) => (
                <Grid key={index} item>
                   <CardActionArea>
                    <Card style={{ backgroundImage: `url(${range.image})`,
                      backgroundSize: 'cover',
                      width: 200,
                      height: '200px',
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
    );
  };
  
  export default Cards;
  