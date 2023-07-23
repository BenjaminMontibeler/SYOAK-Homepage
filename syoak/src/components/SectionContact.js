import React from 'react';
import { ReactComponent as Map } from './images/map.svg';
import './buttonPositions.css'

function SectionContact() {
  return (
    <div className='section-contact'>
      <h2 className='header'>Get in Touch With Us</h2>
      <div className='form-container'>
        <form>
            <div className='input-container'>
                <label for='name' className='input-label'>Name</label>
                <input type='text' id='name'></input>
            </div>
            
            <div className='input-container'>
                <label for='email' className='input-label'>Email Adress</label>
                <input type='email' id='email'></input>
            </div>
            
            <div className='input-container'>
                <label for='message' className='input-label'>Message</label>
                <textarea id='message' placeholder='Write message here...'></textarea>
            </div>
            
            <div>
                <label for='robot' className='input-label'>Verification</label>
                <div className='checkbox-container'> 
                    <input type="checkbox" name="robot" placeholder=''></input>
                    <label for='robot'>I am not a robot</label>
                </div>
            </div>

            <button className='form-submit button-fill'>Send message</button>
            
        </form>


        <div className='map-container'>
            <Map className='map'/>
            <button className='button-circle-fill position-7' />
        </div>
        
      </div>
    </div>
  )
}

export default SectionContact
