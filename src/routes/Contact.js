import React from 'react'
import Navbar from '../components/Navbar'
import HeroImage from '../components/HeroImage'
import Footer from '../components/Footer'
import Form from '../components/Form'


const Contact = () => {
  return (
    <div>
      <Navbar/>
      <HeroImage heading='Contact.' text='Get in touch.'/>
      <Form/>
      <Footer/>
    </div>
  )
}

export default Contact
