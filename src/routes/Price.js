import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImage from '../components/HeroImage'
import PricingCards from '../components/PricingCards'

const Price = () => {
  return (
    <div>
      <Navbar />
      <HeroImage heading='Pricing.' text='Choose Your Trip.'/>
      <PricingCards />
      <Footer />
    </div>
  )
}

export default Price
