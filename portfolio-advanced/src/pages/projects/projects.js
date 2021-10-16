import React, { useEffect } from 'react';
import './projects.css';
import { projects } from '../../data';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Projects = () => {
    useEffect(() => {
        Aos.init({duration: 3000});
    }, []);

    return (
        <div>
            <div className='proj-main-container'>
                <div id='projects' className='projects'>
                    {projects.map((project) => (
                        <div className='proj-container'>
                            <div className='proj-title-container'>
                                <h1 data-aos='fade-down' className='proj-title'>{project.title}</h1>
                            </div>
                            <div className='proj-img-container'>
                                <img data-aos='fade-in' src={project.image} alt='projects' className='proj-img'/>
                            </div>
                            <div className='proj-info-container'>
                                <p data-aos='fade-up' className='proj-info'>{project.description}</p>
                                <div data-aos='fade-up' className='info-btn'>
                                    <a className='link' href={project.link}><i className='fas fa-external-link-alt'></i></a>
                                    <a className='link' href={project.repo}><i className='fab fa-github-square'></i></a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Projects;
