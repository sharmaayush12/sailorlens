import React from 'react'
import Slider from "react-slick";

export default function Upper_Head() {
    
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay:true
      };
      return (
        <div className='slider-div'>
        <Slider {...settings}>
            <div>
              <p>10% OFF NIKKOR LENSES | WHILE STOCKS LAST S</p>
            </div>
            <div>
              <p>SAVE TODAY ON SELECTED NIKON SPORT OPTICS PRODUCTS</p>
            </div>
          
        </Slider>
        </div>
      );
    }
     
      

