// import Header from '../Header/Header'
import Cards from './Cards/Cards'
import MyCarousel from './Carousel/Carousel'
import MultipleItems from './BigCarousel/Slice'

function Home(){
    return(
        <>
            <MyCarousel />
            <MultipleItems />
            <Cards />
        </>
    )
}

export default Home;