import React, { useEffect } from 'react';
import './about.css';
import '../../App.css';
import Img from '../../components/img-fade/img-fade';
import Aos from 'aos';
import 'aos/dist/aos.css';

const About = () => {
    useEffect(() => {
        Aos.init({duration: 3000});
    }, []);

    return (
        <div className='about-background'>
        <div className='about-container' id='about'>
            <section className='about-section'>
                <div className='img-info-container'>
                    <div className='about-img'>
                        <Img />
                    </div>
                    <div className='about-info'>
                        <h1 data-aos='fade-down' className='info-title'>Hi, I'm Beau Fortier!</h1>
                        <p data-aos='fade-right' className='info-info'>
                            I am a Software Developer and I graduated from Case Western Reserve University's Coding Bootcamp.
                            Here I built skills such as, HTML, CSS, JavaScript, JQuery, Node,js, React.js, MySQL, and MongoDB.
                            I am currently employed at Chipotle Mexican Grill as a Service Manager. I have been working there for 4 years and I have climbed my way up the ladder to be in the position I am in.
                            I hope you enjoy this interactive portfolio that showcases some of the skills I have learned.
                        </p>
                        <div data-aos='fade-left' className='link-container'>
                            <a className='linkedIn' href='https://www.linkedin.com/in/beau4ta/'><i className="fab fa-linkedin"></i></a>
                            <a className='gitHub' href='https://github.com/beau4ta'><i className="fab fa-github-square"></i></a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        </div>
    )
}

export default About;