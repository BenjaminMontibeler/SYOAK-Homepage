import React from 'react';
import { ReactComponent as Logo } from './images/Logo.svg';
import { ReactComponent as Location } from './images/Location.svg';
import { ReactComponent as Email } from './images/Email.svg';
import './footer.css';
import '../general/typography.css';

function Footer() {
    return (
        <div className='footer'>
            <div className='footer__body'>
                <div className='footer__about'>
                    <Logo className='footer__logo' />
                    <p>We have a long and proud history givin emphasis to environment social and economic outcomes to deliver places that respond</p>
                    <a><Location className='footer__icon' />1182  Williams Avenue, San Francisco</a>
                    <a><Email className='footer__icon' />hello@syoak.com</a>
                </div>

                <div className='footer__table'>

                    <div className='table__column'>
                        <span>Company</span>
                        <a>About Us</a>
                        <a>Company</a>
                        <a>How we do it</a>
                    </div>

                    <div className='table__column'>
                        <span>Services</span>
                        <a>Oil & Gas Industry</a>
                        <a>Fuel Management</a>
                        <a>Chemical Research</a>
                        <a>Power & Energy</a>
                        <a>Eco & Biopower</a>
                    </div>

                    <div className='table__column'>
                        <span>Projects</span>
                        <a>Factory</a>
                        <a>Industry</a>
                        <a>Manufactoring</a>
                        <a>Mechanical</a>
                    </div>
                </div>
            </div>


            <div className='footer__copyright'>
                <span>Copyright (c) 2019 syoak.com All rights reserved.</span>
                <div className='copyright__stack'>
                    <span><a>Support</a></span>
                    <span><a>Privacy Policy</a></span>
                    <span><a>Terms of Condition</a></span>
                </div>
            </div>
        </div>
    )
}

export default Footer
