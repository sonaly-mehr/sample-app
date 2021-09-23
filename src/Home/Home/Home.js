import React, { useState } from 'react';
import './Home.css';
import About from '../About/About';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import url1 from '../../img/gabriel-tovar-30xixEVV0yQ-unsplash 1.png';
import {faBars} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Home = () => {
    const photos = [
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
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        arrow: true,
        slidesToScroll: 1,
        className: "slides"

    }
    const [showMenu, setShowMenu] =useState(false);
    return (
        <div className="home-section">
            <div className="container">
                <nav>
                    <ul className="menu">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Service & Package</a></li>
                        <li><a href="#">Gallery</a></li>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                    <div className="hamburg-menu">
                        <button onClick={()=> setShowMenu(!showMenu)}><FontAwesomeIcon className="menu-btn" icon={faBars}></FontAwesomeIcon></button>
                    </div>
                    {
                        showMenu ? <div className="hamburg">
                            <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Service & Package</a></li>
                        <li><a href="#">Gallery</a></li>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                        </div>
                        :
                        <div></div>
                    }
                </nav>
                <div className="slider-bg">
                    {/* <NavBar></NavBar> */}
                    <Slider {...settings}>

                        {
                            photos.map(photo => <div className="slider-img">
                                <img src={photo.url} alt="" />
                            </div>)
                        }
                    </Slider>
                    <div className="slider-content">
                        <h4>A picture is worth a thousand words</h4>
                        <p> It clearly and beautifully captures your emotions- the joy, the laughter, the tears, you name it. Our pride is in offering the best shoots as we help you tell your story in photos.</p>
                        <button>View Gallery</button>
                    </div>
                </div>
                <About></About>
            </div>
        </div>
    );
};

export default Home;