import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PropTypes from 'prop-types';

function CoverList({ covers }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div>
      <Slider {...settings}>
      {
        covers.map(({ id, name, img }) => {
          return (
          <img className="max-w-[100%] max-h-[40rem] bg-cover bg-center" key={ id } src={ img } alt={ name } />
        )})
      }
      </Slider>
    </div>
  );
}

CoverList.propTypes = {
  covers: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default CoverList;
