import React, { useState, useEffect } from 'react';
import './projects.css';
import { projects } from '../../data';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Carousel, CarouselItem } from 'react-bootstrap';

const Projects = () => {
    useEffect(() => {
        Aos.init({ duration: 3000 });
    }, []);

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <div>
            <div className='proj-main-container'>
                <div id='projects' className='projects'>
                    <Carousel fade activeIndex={index} onSelect={handleSelect} keyboard={true}>
                        {projects.map((project) => (
                            <CarouselItem>
                                <div className='proj-container'>
                                    <div className='proj-title-container'>
                                        <h1 data-aos='fade-down' className='proj-title'>{project.title}</h1>
                                    </div>
                                    <div className='proj-img-container'>
                                        <img data-aos='fade-in' src={project.image} alt='projects' className='proj-img' />
                                    </div>
                                    <Carousel.Caption>
                                        <div className='proj-info-container'>
                                            <p data-aos='fade-up' className='proj-info'>{project.description}</p>
                                        </div>
                                        <div data-aos='fade-up' className='info-btn'>
                                            <a className='link' href={project.link}><i className='fas fa-external-link-alt'></i></a>
                                            <a className='link' href={project.repo}><i className='fab fa-github-square'></i></a>
                                        </div>
                                    </Carousel.Caption>
                                </div>
                            </CarouselItem>
                        ))}
                    </Carousel>
                </div>
            </div>
        </div>
    )
}

export default Projects;
