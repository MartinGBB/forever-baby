import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PropTypes from 'prop-types';

function CoverCard(props) {
  const { src, alt } = props;
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className="m-5 p-5">
      <Slider {...settings}>
        <img src={ src } alt={ alt } />
      </Slider>
    </div>
  );
}

CoverCard.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
}

export default CoverCard;

// reference> https://react-slick.neostack.com/