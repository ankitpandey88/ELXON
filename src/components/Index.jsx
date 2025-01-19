import React from 'react'
import LandingPage from './LandingPage'
import Footer from './Footer'
import AboutUs from '../pages/About'
import ProductCategories from '../pages/LandingPageProduct'
import ShowCase from '../pages/ShowCase'
import Contact from '../pages/Contact'
import SaveEnergyComponent from '../pages/SaveEnergy'


const HeroSection = () => {
  return (
    <div>
        <LandingPage/>
        <AboutUs/>
        <ProductCategories/>
        <ShowCase/>
        <SaveEnergyComponent/>
        
        <Contact/>
        <Footer/>

    </div>
  )
}

export default HeroSection