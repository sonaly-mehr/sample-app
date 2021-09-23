import React from 'react';
import './Sliders.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import url1 from '../../img/gabriel-tovar-30xixEVV0yQ-unsplash 1.png';

const Sliders = () => {
    const photos= [
        {
            name: 'photo 2',
            url: url1
        },
        {
            name: 'photo 2',
            url: url1
        },
        {
            name: 'photo 2',
            url: url1
        }
    ]
    const settings = {
        dots: true,
        fade: true,
        infinte: true,
        speed: 500,
        slidesToShow: 1,
        arrows: true,
        slidesToScroll: 1,
        className: "slides"

    }
    return (
        <div>
            <Slider {...settings}>
                {
                    photos.map(photo => <div>
                        <img src={photo.url} alt=""/>
                    </div>)
                }
            </Slider>
        </div>
    );
};

export default Sliders;