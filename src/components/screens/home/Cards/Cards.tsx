import { range } from './assortment.ts'
import { Grid, Card, CardContent, Typography} from '@mui/material/';


const Cards: React.FC = () => {

    return (
        <Grid sx={{ flexGrow: 1 }} container justifyContent="center">
          <Grid item xs={7}>
            <Grid container justifyContent="center" spacing={2}>
              {range.map((range, index) => (
                <Grid key={index} item>
                    <Card style={{ backgroundImage: `url(${range.img})`,
                      backgroundSize: 'cover',
                      width: 200,
                      height: '200px',
                      color: 'white' }}>
                      <CardContent>
                      <Typography variant="h6">{range.title}</Typography>
                      </CardContent>
                  </Card>
                </Grid> 
              ))}
            </Grid>
          </Grid>
       </Grid>
    );
  };
  
  export default Cards;
  