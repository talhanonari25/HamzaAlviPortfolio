import React from 'react'
import './peopleSaying.css'
import Card from './cards/testimonial'
import { data } from '../assets/testimonialData'
import { Carousel } from 'antd';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed:2000,
  responsive: [
    {
      breakpoint: 1024,
      settings: { slidesToShow: 3 }
    },
    {
      breakpoint: 850,
      settings: { slidesToShow: 2 }
    },
    {
      breakpoint: 600,
      settings: { slidesToShow: 1 }
    }
  ]
};

const peopleSaying = () => {
  let newArr = data.map((val, i) => {
    return <Card comment={val.comment} key={i} author={val.author} />;
  });
  return (
    <Slider {...settings}>
      {newArr}
    </Slider>
  );
};

export default peopleSaying