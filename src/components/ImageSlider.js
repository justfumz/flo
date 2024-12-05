import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ImageSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show 3 slides at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    centerMode: true, // Enable center mode to target the middle slide
    centerPadding: '0', // Ensure slides are aligned properly
  };

  return (
    <div style={{ width: '80%', margin: '0 auto', padding: '20px' }}>
      <Slider {...settings}>
        <div className="slide">
          <div className="slide-content">
            <img
              src="https://via.placeholder.com/400x300"
              alt="Slide 1"
              style={{ width: '100%', borderRadius: '10px' }}
            />
          </div>
        </div>
        <div className="slide">
          <div className="slide-content">
            <img
              src="https://via.placeholder.com/400x300"
              alt="Slide 2"
              style={{ width: '100%', borderRadius: '10px' }}
            />
          </div>
        </div>
        <div className="slide">
          <div className="slide-content">
            <img
              src="https://via.placeholder.com/400x300"
              alt="Slide 3"
              style={{ width: '100%', borderRadius: '10px' }}
            />
          </div>
        </div>
        <div className="slide">
          <div className="slide-content">
            <img
              src="https://via.placeholder.com/400x300"
              alt="Slide 4"
              style={{ width: '100%', borderRadius: '10px' }}
            />
          </div>
        </div>
        <div className="slide">
          <div className="slide-content">
            <img
              src="https://via.placeholder.com/400x300"
              alt="Slide 5"
              style={{ width: '100%', borderRadius: '10px' }}
            />
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default ImageSlider;
