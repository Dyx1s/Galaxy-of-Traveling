import React from 'react'
import {Link} from 'react-router-dom'
import './VideoStyles.css'

import travelVideo from '../assets/video.mp4'
const Video = () => {
  return (
    <>
        <div className='hero'>
            <video autoPlay loop muted id='video'>
                <source src={travelVideo} type='video/mp4' />
            </video>
        <div className='content'>
            <h1>Travel.</h1>
            <p>Discover the world.</p>
                <div>
                    <Link to='/preparing' className='btn'>Prepare</Link>
                    <Link to='/contact' className='btn btn-light'>Launch</Link>
                </div>
            </div>
        </div>
    </>
  )
}

export default Video
