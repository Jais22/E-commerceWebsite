import React from 'react'
import HeroSection from '../../components/HeroSection/HeroSection'
import Service from '../../components/Service/Service'
import Gallery from '../../components/Gallery/Gallery'
import Testimonial from '../../components/Testimonial/Testimonial'

const Home = () => {
  return (
    <>
        <HeroSection/>
        <Service/>
        <Gallery/>
        <Testimonial/>
    </>
  )
}

export default Home