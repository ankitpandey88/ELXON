

import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/Index';

import Product from './pages/Product';

import ProductDetails from './pages/ProductDetails';
import Popup from './pages/PopUp';
import ContactMain from './pages/ContactMain';
import AboutMain from './pages/AboutMain';

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
        <Route path="/contact" element={<ContactMain />} />
        <Route path="/products" element={<Product />} />
        <Route path="/product/:id" element={<ProductDetails/>} />
        <Route path="/about" element={<AboutMain />} />
      </Routes>

      {/* Uncomment if you have the Popup component */}
      {showPopup && <Popup onClose={closePopup} />}
    </div>
  );
};

export default App;
