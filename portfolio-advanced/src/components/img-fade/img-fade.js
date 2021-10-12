import React from 'react';
import { useSpring, animated } from 'react-spring';
import Beau from '../../pages/about/beau.JPG';
import '../../pages/about/about.css';

const Img = () => {
    const styles = useSpring({ from: { opacity: 0 }, to: { opacity: 1 }, delay: 1000 })

    return (<animated.div style={styles}>
        <div>
            <img src={Beau} className='beau-img' />
        </div>
        </animated.div>
    )
}

export default Img;