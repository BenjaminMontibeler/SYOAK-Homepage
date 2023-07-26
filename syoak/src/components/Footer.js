import React from 'react';
import { ReactComponent as Logo } from './images/Logo.svg';
import { ReactComponent as Location } from './images/Location.svg';
import { ReactComponent as Email } from './images/Email.svg';
import './footer.css';

function Footer() {
    return (
        <div className='footer'>
            <div className='footer-wrapper'>
                <div className='footer-content'>
                    <div className='description-container'>
                        <Logo className='footer-logo' />
                        <p className='content-text'>We have a long and proud history givin emphasis to environment social and economic outcomes to deliver places that respond</p>
                        <a className='link'><Location className='link-icon' />1182  Williams Avenue, San Francisco</a>
                        <a className='link'><Email className='link-icon' />hello@syoak.com</a>
                    </div>

                    <div className='link-table'>

                        <div className='column'>
                            <span className='table-heading'>Company</span>
                            <a className='link'>About Us</a>
                            <a className='link'>Company</a>
                            <a className='link'>How we do it</a>
                        </div>

                        <div className='column'>
                            <span className='table-heading'>Services</span>
                            <a className='link'>Oil & Gas Industry</a>
                            <a className='link'>Fuel Management</a>
                            <a className='link'>Chemical Research</a>
                            <a className='link'>Power & Energy</a>
                            <a className='link'>Eco & Biopower</a>
                        </div>

                        <div className='column'>
                            <span className='table-heading'>Projects</span>
                            <a className='link'>Factory</a>
                            <a className='link'>Industry</a>
                            <a className='link'>Manufactoring</a>
                            <a className='link'>Mechanical</a>
                        </div>

                    </div>
                </div>
            </div>


            <div className='copyright'>
                <span>Copyright (c) 2019 syoak.com All rights reserved.</span>
                <div className='copyright-wrapper'>
                    <span><a>Support</a></span>
                    <span><a>Privacy Policy</a></span>
                    <span><a>Terms of Condition</a></span>
                </div>
            </div>
        </div>
    )
}

export default Footer
