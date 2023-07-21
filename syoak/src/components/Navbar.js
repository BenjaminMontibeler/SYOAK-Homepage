import React from 'react'
import './navbar.css'
import {ReactComponent as Login} from './images/Login.svg';
import {ReactComponent as Contact} from './images/Contact.svg';

function Navbar() {
    return (
        <div className='navbar'>
            <div className='navbar-navigation'>
                <li>Services</li>
                <li>Projects</li>
                <li>About us</li>
                <li>Blog</li>
            </div>

            <div className='navbar-actions'>
                <li><Login className='img' /><span>Log in</span></li>
                <li><Contact className='img' /><span>Contact us</span></li>
                <button className='button-outline'>Sign up</button>
            </div>
        </div>
    )
}

export default Navbar
