import React from 'react';
import './Nav.css';
import Logo from '../../bdzlogo.png';

const Nav = () => {
    return(
        <nav className='navbar'>
            <div className='list-container'>
            
            <ul className='ul'>
            <img src={Logo} className='App-logo'></img>
                <li>
                    <a>About</a>
                </li>
                <li>
                    <a>Projects</a>
                </li>
                <li>
                    <a>Resume</a>
                </li>
                <li>
                    <a>Contact</a>
                </li>
            </ul>
            </div>
        </nav>
    )
}

export default Nav;