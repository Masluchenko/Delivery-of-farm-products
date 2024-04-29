import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const MyCarousel = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 1000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
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
    
    <Carousel
      responsive={responsive}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={9000}
      itemClass ="11" 

    >
      {items.map((item, index) => (
        <div key={index} style={{margin: 4}}>
          <img src={item.image} alt={item.name} style={{ width: 210, height: 210, borderRadius: 16 }}/>
          
        </div>
      ))}
    </Carousel>
   
  );
};

export default MyCarousel;
