import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { items } from './CarouselData'

const MyCarousel = () => {
  const responsive = {
    superLargeDesktop: {
      
      breakpoint: { max: 3000, min: 1600 },
      items: 6
    },
    desktop: {
      breakpoint: { max: 1600, min: 1224 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1224, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    },
  };

  return (
    <div style={{ maxWidth: '60%', margin: '0 auto' }}>
    <Carousel
      responsive={responsive}
      infinite={true}
      autoPlay={false}
      // autoPlaySpeed={11000}
      // itemClass={{ style.item}}
      // containerClass=  {style.carousel}
      showDots={false}
      sliderClass="slider"
      slidesToSlide={1}
      swipeable
      keyBoardControl
      minimumTouchDrag={1}
      renderButtonGroupOutside={false}
      renderDotsOutside
      centerMode={false}
      draggable
      focusOnSelect={false}
      additionalTransfrom={0}
      arrows>
      {items.map((item, index) => (
        <div key={index} style={{marginBottom: 30, width: 100}}>
          <img src={item.image} alt={item.name} style={{ width: 170, height: 170, borderRadius: 16 }}/>
          
        </div>
      ))}
    </Carousel>
    </div>
   
  );
};

export default MyCarousel;
