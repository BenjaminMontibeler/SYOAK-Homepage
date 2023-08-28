import React, { useState, useEffect } from 'react';
import './navbar.css';
import { ReactComponent as Login } from './images/Login.svg';
import { ReactComponent as Contact } from './images/Contact.svg';
import '../general/typography.css';

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
        <div className={`main-nav ${isHamburgerOpen ? 'active' : ''}`}>
            <div className='main-nav__toggle' onClick={toggleHamburger}>
                <div className='bar'></div>
                <div className='bar'></div>
                <div className='bar'></div>
            </div>

            <div className='main-nav__content'>
                <div className='main-nav__list'>
                    <li>Services</li>
                    <li>Projects</li>
                    <li>About us</li>
                    <li>Blog</li>
                </div>

                <div className='main-nav__actions'>
                    <li>
                        <Login className='main-nav__img' />
                        <span>Log in</span>
                    </li>
                    <li>
                        <Contact className='main-nav__img' />
                        <span>Contact us</span>
                    </li>
                    <button className='button-font button-outline'>
                        Sign up
                    </button>
                </div>
            </div>

        </div>
    );
}

export default Navbar;