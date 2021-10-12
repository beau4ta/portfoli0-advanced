import React from 'react';
import './about.css';
import '../../App.css';
import Beau from './beau.JPG';
import Img from '../../components/img-fade/img-fade';

const About = () => {
    return (
        <div className='about-container'>
            <section className='about-section'>
                <div className='img-info-container'>
                    <div className='about-img'>
                        <Img />
                    </div>
                    <div className='about-info'>
                        <h1 className='info-title'>Hi, I'm Beau Fortier!</h1>
                        <p className='info-info'>
                            I am a Software Developer and I graduated from Case Western Reserve University's Coding Bootcamp.
                            Here I built skills such as, HTML, CSS, JavaScript, JQuery, Node,js, React.js, MySQL, and more.
                            I am currently employed at Chipotle Mexican Grill as a Service Manager. I have been working there for 4 years and I have climbed my way up the ladder to be in the position I am in.
                            I hope you enjoy this interactive portfolio that showcases some of the skills I have learned.
                        </p>
                        <div className='link-container'>
                            <a className='linkedIn' href='https://www.linkedin.com/in/beau4ta/'><i class="fab fa-linkedin"></i></a>
                            <a className='gitHub' href='https://github.com/beau4ta'><i class="fab fa-github-square"></i></a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About;