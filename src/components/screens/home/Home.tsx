import * as React from 'react';
import Stack from '@mui/material/Stack';

import { Container, Button } from '@mui/material';


function Home(){

    return(
        <Container>
            <Stack spacing={2} direction="row">
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>
        </Container>
        

    )
}


export default Home