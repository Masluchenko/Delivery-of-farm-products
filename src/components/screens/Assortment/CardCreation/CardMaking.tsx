import React from 'react'
import { Grid, Card, CardContent, Typography, CardActionArea} from '@mui/material/';

export type CardItems = {
    name: string,
    image: string,
    description?: string
    price: number,
    weight: number
}

export function cardMaking(obj: CardItems[]) {

    function gramOrKilogram(gk: number): string{
        if(gk === 1){
            return `${gk} кг.`
        } else return `${gk} г.`

    }

    return (
        <Grid sx={{ flexGrow: 1 }} container justifyContent='center'>
          <Grid item xs={7}>
            <Grid container justifyContent='center' spacing={2}>
              {obj.map((obj, index) => (
                <Grid key={index} item>
                  <CardActionArea>
                    <Card style={{ backgroundImage: `url(${obj.image})`,
                      backgroundSize: 'cover',
                      width: 200,
                      height: '200px',
                      color: 'white',
                      borderRadius: 16 }}>
                      <CardContent>
                      <Typography variant="h5">{obj.name}</Typography>
                      <Typography variant="h5">{obj.price}
                      <Typography variant="h6">/{gramOrKilogram(obj.weight)}</Typography>
                      </Typography>
                      </CardContent>
                    </Card>
                  </CardActionArea>
                </Grid> 
              ))}
            </Grid>
          </Grid>
       </Grid>
    );
}