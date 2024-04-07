import React from 'react'
import Navbar from '../components/Navbar'
import HeroImage from '../components/HeroImage'
import PreparingSection from '../components/Preparing'
import Footer from '../components/Footer'


const Preparing = () => {
  return (
    <div>
      <Navbar />
      <HeroImage heading='Preparing.' text='Prepare for the trip.'/>
      <PreparingSection />
      <Footer />
    </div>
  )
}

export default Preparing
