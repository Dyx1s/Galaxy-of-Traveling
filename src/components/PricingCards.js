import React from 'react'
import './PricingStyle.css'
import { Link } from 'react-router-dom'

const PricingCards = () => {
  return (
    <div className='pricing'>
        <div className='card-container'>
            <div className='card'>
                <h3>Basic Night</h3>
                <span className='bar'></span>
                <p className='rub'>2000 RUB</p>
                <p>- 4 hours trip -</p>
                <p>- Breathtaking views -</p>
                <p>- Dinner -</p>
                <p>- Equipment includes -</p>
                <Link to='/contact' className='btn'>Book Now</Link>
            </div>
            <div className='card'>
                <h3>All night</h3>
                <span className='bar'></span>
                <p className='rub'>5000 RUB</p>
                <p>- All night trip -</p>
                <p>- Breathtaking views -</p>
                <p>- Dinner -</p>
                <p>- Equipment includes -</p>
                <Link to='/contact' className='btn'>Book Now</Link>
            </div>
            <div className='card'>
                <h3>All stars for You</h3>
                <span className='bar'></span>
                <p className='rub'>10000 RUB</p>
                <p>- All night trip -</p>
                <p>- Camping in secrete place -</p>
                <p>- Photosession -</p>
                <p>- Equipment includes -</p>
                <Link to='/contact' className='btn'>Book Now</Link>
            </div>
        </div>
    </div>
  )
}

export default PricingCards
