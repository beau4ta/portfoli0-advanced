import React, { useState, useEffect, useRef } from 'react';
import './projects.css';
import { projects } from '../../data';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';

const Projects = () => {
    const [width, setWidth] = useState(0);
    const carousel = useRef();

    useEffect(() => {
        Aos.init({ duration: 3000 });
        console.log(carousel.current.scrollWidth, carousel.current.offsetWidth)
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
    }, []);

    return (
        <div>
            <div className='proj-main-container'>
                <motion.div ref={carousel} className='carousel'>
                <div id='projects' className='projects'>
                    <motion.div drag='x' dragConstraints={{ right: 0, left: -width }} whileTap={{ cursor: 'grabbing' }} className='inner-carousel'>
                        {projects.map((project) => (
                            <motion.div key={project.title}>
                                <div className='proj-container'>
                                    <div className='proj-title-container'>
                                        <h1 data-aos='fade-down' className='proj-title'>{project.title}</h1>
                                    </div>
                                    <div className='proj-img-container'>
                                        <img data-aos='fade-in' src={project.image} alt='projects' className='proj-img' />
                                    </div>
                                        <div className='proj-info-container'>
                                            <p data-aos='fade-up' className='proj-info'>{project.description}</p>
                                        </div>
                                        <div data-aos='fade-up' className='info-btn'>
                                            <a className='link' href={project.link}><i className='fas fa-external-link-alt'></i></a>
                                            <a className='link' href={project.repo}><i className='fab fa-github-square'></i></a>
                                        </div>
                                </div>
                            </motion.div>
                        ))}
                        </motion.div>
                </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Projects;
