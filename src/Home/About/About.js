import React from 'react';
import './About.css';
import user from '../../img/offset_comp_772626-opt 1.png';

const About = () => {
    return (
        <section className="about-section">
            <div className="row">
                <div className="col-md-4 col-6">
                    <div className="img-section">
                        <img src={user} alt="" />
                        <img className="img2" src={user} alt="" />
                        <img className="img3" src={user} alt="" />
                    </div>
                </div>
                <div className="col-md-8 col-6">
                    <div className="about-area">
                        <h4>About Us</h4>
                        <p>Lorem Ipsum, sometimes referred to as 'lipsum', is the placeholder text used in design when creating content. It helps designers plan out where the content will sit</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;