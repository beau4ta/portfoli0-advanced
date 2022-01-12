import React from 'react';
import './Nav.css';
import Logo from '../../bdzlogo.png';

const Nav = () => {
    return(
        <nav className='nav'>
            <div className='list-container'>
            
            <ul className='ul'>
            <img src={Logo} alt='logo' className='App-logo'></img>
                <li>
                    <a href='#about'>About</a>
                </li>
                <li>
                    <a href='#projects'>Projects</a>
                </li>
                <li>
                    <a href='#resume'>Resume</a>
                </li>
                <li>
                    <a href='#contact'>Contact</a>
                </li>
            </ul>
            </div>
        </nav>
    )
}

export default Nav;