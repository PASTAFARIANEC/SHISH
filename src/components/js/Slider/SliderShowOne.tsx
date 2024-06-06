import React from "react";
import Slider, { Settings } from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../../css/slider.css'


const settings: Settings = {
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
}

type SliderType = {data: string[]}


export const SliderShowOne: React.FC<SliderType> = ({data}) => {
    return (
        <Slider {...settings}>
            {data.map(item => (
                <div>
                    <img src={item} alt="" style={{width: '100%'}}/>
                </div>
            ))}
        </Slider>
    )
}