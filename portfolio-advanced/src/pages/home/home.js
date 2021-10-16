import React from 'react';
import { useSpring, animated } from 'react-spring';
import './home.css';


const Home = () => {
    const style1 = useSpring({ from: { opacity: 0 }, to: { opacity: 1 }, delay: 1000 })
    const style2 = useSpring({ from: { opacity: 0 }, to: { opacity: 1 }, delay: 1100 })
    const style3 = useSpring({ from: { opacity: 0 }, to: { opacity: 1 }, delay: 1200 })
    const style4 = useSpring({ from: { opacity: 0 }, to: { opacity: 1 }, delay: 1300 })
    const style5 = useSpring({ from: { opacity: 0 }, to: { opacity: 1 }, delay: 1400 })
    const style6 = useSpring({ from: { opacity: 0 }, to: { opacity: 1 }, delay: 1500 })
    const style7 = useSpring({ from: { opacity: 0 }, to: { opacity: 1 }, delay: 1600 })
    const style8 = useSpring({ from: { opacity: 0 }, to: { opacity: 1 }, delay: 1700 })

    return (
        <div className='home-main'>
            <div className='home-container'>
                <animated.div style={style1}>
                    <h1 className='welcome'>W</h1>
                </animated.div>
                <animated.div style={style2}>
                    <h1 className='welcome'>E</h1>
                </animated.div>
                <animated.div style={style3}>
                    <h1 className='welcome'>L</h1>
                </animated.div>
                <animated.div style={style4}>
                    <h1 className='welcome'>C</h1>
                </animated.div>
                <animated.div style={style5}>
                    <h1 className='welcome'>O</h1>
                </animated.div>
                <animated.div style={style6}>
                    <h1 className='welcome'>M</h1>
                </animated.div>
                <animated.div style={style7}>
                    <h1 className='welcome'>E</h1>
                </animated.div>
                <animated.div style={style8}>
                    <h1 className='welcome'>!</h1>
                </animated.div>
            </div>
        </div>
    )
}

export default Home;