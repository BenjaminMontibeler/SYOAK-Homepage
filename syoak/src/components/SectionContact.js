import React from 'react';
import { ReactComponent as Map } from './images/map.svg';
import './sectionContact.css';
import '../general/typography.css';

function SectionContact() {
  return (
    <div className='contact'>
      <h2>Get in Touch With Us</h2>
      <div className='contact__form-container'>
        <form>
            <div className='input-group'>
                <label for='name' className='input-group__label'>Name</label>
                <input type='text' id='name'></input>
            </div>
            
            <div className='input-group'>
                <label for='email' className='input-group__label'>Email Adress</label>
                <input type='email' id='email'></input>
            </div>
            
            <div className='input-group'>
                <label for='message' className='input-group__label'>Message</label>
                <textarea id='message' placeholder='Write message here...'></textarea>
            </div>
            
            <div>
                <label for='robot' className='input-group__label'>Verification</label>
                <div className='checkbox'> 
                    <input type="checkbox" name="checkbox" placeholder=''></input>
                    <label for='checkbox'>I am not a robot</label>
                </div>
            </div>

            <button className='form-submit button-fill'>Send message</button>
            
        </form>


        <div className='contact__image-container'>
            <Map className='contact__image'/>
        </div>
        
      </div>
    </div>
  )
}

export default SectionContact
