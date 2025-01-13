

import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/Index';
import Contact from './pages/Contact';
import Product from './pages/Product';
import AboutUs from './pages/About';
import ProductDetails from './pages/ProductDetails';
import Popup from './pages/PopUp';

const App = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 3000); // Show after 3 seconds

    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Product />} />
        <Route path="/product/:id" element={<ProductDetails/>} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>

      {/* Uncomment if you have the Popup component */}
      {showPopup && <Popup onClose={closePopup} />}
    </div>
  );
};

export default App;
