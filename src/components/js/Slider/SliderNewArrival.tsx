import React from "react";
import Slider, { Settings } from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { newArrivals } from "../../../api/api";
import '../../css/slider.css'

const settings: Settings = {
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 5,
}


export const SliderNewArrival: React.FC = () => {
    return (
        <Slider {...settings}>
          {newArrivals.map(item => (
            <div>
              <div style={{display: 'flex', justifyContent: 'center'}}>
                <img src={item.image} />
              </div>
              <div className="slide-title">
                <span>{item.name}</span>
              </div>
            </div>           
          ))}
        </Slider>
    )
}