import React from 'react'
import './FooterStyle.css'
import { FaInstagram, FaPhone, FaSearchLocation, FaTwitter, FaLinkedin, FaTelegram } from 'react-icons/fa'

const Footer = () => {
  return (
    <>
        <div className='footer'>
            <div className='footer-container'>
                <div className='left'>
                    <div className='location'>
                        <FaSearchLocation size={20} style={{color: '#fff', marginRight: '2rem'}}/>
                        <div>
                            <p>st. Lenina 154, office 3</p>
                            <h4>Sochi, Russia</h4>
                        </div>
                    </div>
                    <div className='phone'>
                        <h4> <FaPhone size={20} style={{color: '#fff', marginRight: '2rem'}}/>8-800-555-35-35</h4>
                    </div>
                    <div className='telegram'>
                        <h4><FaTelegram size={20} style={{color: '#fff', marginRight: '2rem'}}/> @ilyachuprin</h4>
                    </div>
                </div>
                <div className='right'>
                    <h4>About the company</h4>
                    <p>NighTravel organizes hiking trips, extreme adventures, and corporate events. It provides training in tourism and survival. Selects routes for any level of training and provides equipment rental</p>
                    <div className='socials'>
                        <FaTwitter size={30} style={{color: '#fff', marginRight: '1rem'}}/>
                        <FaLinkedin size={30} style={{color: '#fff', marginRight: '1rem'}}/>
                        <FaInstagram size={30} style={{color: '#fff', marginRight: '1rem'}}/>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer
