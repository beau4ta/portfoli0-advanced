import React, { useEffect } from 'react';
import Beau from '../../pages/about/beau.JPG';
import '../../pages/about/about.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Img = () => {
    useEffect(() => {
        Aos.init({duration: 3000});
    }, []);

    return (
        <div className='img-container'>
            <img data-aos='fade-up' src={Beau} alt='Beau' className='beau-img' />
        </div>
    )
}

export default Img;