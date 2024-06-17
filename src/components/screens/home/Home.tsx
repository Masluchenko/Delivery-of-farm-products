// import Header from '../Header/Header'
import Cards from './Cards/Cards'
import MyCarousel from './Carousel/Carousel'
import MultipleItems from './BigCarousel/Slice'
import { Box} from '@mui/material/';


function Home(){
    return(
        <Box >
            
            <MyCarousel />
            <MultipleItems />
            <Box  sx={{  width: '50%', display:"flex", justifyContent:"space-evenly"}}>
                <Box>
                    <Cards />
                </Box>
            </Box>
            
        </Box>
    )
}

export default Home;