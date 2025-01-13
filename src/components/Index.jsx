import React from 'react'
import LandingPage from './LandingPage'
import Footer from './Footer'
import AboutUs from '../pages/About'
import ProductCategories from '../pages/LandingPageProduct'
import ShowCase from '../pages/ShowCase'
import Contact from '../pages/Contact'


const HeroSection = () => {
  return (
    <div>
        <LandingPage/>
        <AboutUs/>
        <ProductCategories/>
        <ShowCase/>
        <Contact/>
        <Footer/>

    </div>
  )
}

export default HeroSection