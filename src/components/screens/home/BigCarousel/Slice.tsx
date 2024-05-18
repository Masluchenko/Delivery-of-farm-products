import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import cl from './Slice.module.scss'

function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: 'teal', borderRadius: 9, width:20, height: 20 }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: 'teal', borderRadius: 20, width:21, height: 20 }}
      onClick={onClick}
    />
  );
}

function MultipleItems() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className={cl.App}>
      <Slider {...settings} >
        <div>
          <img src='https://cdn.esh-derevenskoe.ru/image/cache/catalog/6c2842-1150x450.jpg?v=3' alt=''  />
        </div>
        <div>
          <img src='https://cdn.esh-derevenskoe.ru/image/cache/catalog/6c2842-1150x450.jpg?v=3' alt=''  />
        </div>
        <div>
          <img src='https://cdn.esh-derevenskoe.ru/image/cache/catalog/6c2842-1150x450.jpg?v=3' alt=''  />
        </div>
      </Slider>
    </div>
  );
}

export default MultipleItems;
