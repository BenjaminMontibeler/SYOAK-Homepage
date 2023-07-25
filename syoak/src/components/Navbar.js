import React, { useState, useEffect } from 'react';
import './navbar.css';
import { ReactComponent as Login } from './images/Login.svg';
import { ReactComponent as Contact } from './images/Contact.svg';

function Navbar() {
    const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

    const toggleHamburger = () => {
        setIsHamburgerOpen(!isHamburgerOpen);
    };

    const closeHamburger = () => {
        setIsHamburgerOpen(false);
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 1100 && isHamburgerOpen) {
                closeHamburger();
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [isHamburgerOpen]);

    return (
        <div className={`navbar ${isHamburgerOpen ? 'active' : ''}`}>
            <div className='navbar-toggle' onClick={toggleHamburger}>
                <div className='bar'></div>
                <div className='bar'></div>
                <div className='bar'></div>
            </div>

            <div className='navbar-content'>
                <div className='navbar-navigation'>
                    <li>Services</li>
                    <li>Projects</li>
                    <li>About us</li>
                    <li>Blog</li>
                </div>

                <div className='navbar-actions'>
                    <li>
                        <Login className='img' />
                        <span>Log in</span>
                    </li>
                    <li>
                        <Contact className='img' />
                        <span>Contact us</span>
                    </li>
                    <button className='button-outline'>
                        Sign up
                    </button>
                </div>
            </div>

        </div>
    );
}

export default Navbar;
