import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
// import style from 'Carousel.module.scss'

const MyCarousel = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1300 },
      items: 4,
    
    },
    tablet: {
      breakpoint: { max: 1300, min: 464 },
      items: 3,
     
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const items = [
    {
        name: 'lol',
        image: 'https://cdn.esh-derevenskoe.ru/image/cache/catalog/aec48c-400x400.jpg?v=3'

    },
    {
        name: 'lol2',
        image: 'https://cdn.esh-derevenskoe.ru/image/cache/catalog/eee36c-400x400.jpg?v=3'

    },
    {
        name: 'lol3',
        image: 'https://cdn.esh-derevenskoe.ru/image/cache/catalog/aec48c-400x400.jpg?v=3'

    },
    {
        name: 'lol4',
        image: 'https://cdn.esh-derevenskoe.ru/image/cache/catalog/eee36c-400x400.jpg?v=3'

    },
    {
        name: 'lol',
        image: 'https://cdn.esh-derevenskoe.ru/image/cache/catalog/aec48c-400x400.jpg?v=3'

    },
    {
        name: 'lol2',
        image: 'https://cdn.esh-derevenskoe.ru/image/cache/catalog/eee36c-400x400.jpg?v=3'

    },
    {
        name: 'lol3',
        image: 'https://cdn.esh-derevenskoe.ru/image/cache/catalog/aec48c-400x400.jpg?v=3'

    },
    {
        name: 'lol4',
        image: 'https://cdn.esh-derevenskoe.ru/image/cache/catalog/eee36c-400x400.jpg?v=3'

    },
    
  ];

  return (
    <div style={{ maxWidth: '55%', margin: '0 auto' }}>
    <Carousel
      responsive={responsive}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={9000}
      // itemClass={{ style.item}}
      // containerClass=  {style.carousel}
      showDots={false}
      sliderClass="slider"
      slidesToSlide={1}
      swipeable
      keyBoardControl
      minimumTouchDrag={80}
      renderButtonGroupOutside={false}
      renderDotsOutside
      centerMode={false}
      draggable
      focusOnSelect={false}
      additionalTransfrom={0}
      arrows>
      {items.map((item, index) => (
        <div key={index} style={{marginBottom: 30, width: 100}}>
          <img src={item.image} alt={item.name} style={{ width: 210, height: 210, borderRadius: 16 }}/>
          
        </div>
      ))}
    </Carousel>
    </div>
   
  );
};

export default MyCarousel;
