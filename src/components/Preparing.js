import React from 'react'
import './PreparingStyles.css'
import { Link } from 'react-router-dom'

import Camp from '../assets/nightcamp.jpg'
import City from '../assets/nightcity.jpg'


const Preparing = () => {
    return (
    <div className='preparing'>
        <div className='left'>
            <h1>Preparing</h1>
            <p className=''>
                We can help you to prepare for the hike. Determine the purpose of the hike, choose the right time, gather the necessary equipment, clothes and shoes, prepare food, and study the map. And, of course, do not forget to train before the hike. With our help, your hike will be successful and memorable.
            </p>
            <Link to='/contact'><button className='btn'>Contact us.</button></Link>
    </div>
    <div className='right'>
        <div className='img-container'>
            <div className='image-stack top'>
                <img src={City} className='img' alt='camp'></img>
            </div>
            <div className='image-stack bottom'>
                <img src={Camp} className='img' alt='camp'></img>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Preparing
