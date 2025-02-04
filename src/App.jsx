


// import React, { useState, useEffect } from 'react';
// import { Routes, Route } from 'react-router-dom';
// import Header from './components/Header';
// import HeroSection from './components/Index';
// import Product from './pages/Product';
// import ProductDetails from './pages/ProductDetails';
// import Popup from './pages/PopUp';
// import ContactMain from './pages/ContactMain';
// import AboutMain from './pages/AboutMain';
// import { FaWhatsapp } from 'react-icons/fa'; // Import WhatsApp icon
// import ShowCase from './pages/ShowCase';
// import ProductDetail from './pages/ProductShowcase';

// const App = () => {
//   const [showPopup, setShowPopup] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setShowPopup(true);
//     }, 3000); // Show after 3 seconds

//     return () => clearTimeout(timer);
//   }, []);

//   const closePopup = () => {
//     setShowPopup(false);
//   };

//   return (
//     <div>
//       <Header />
//       <Routes>
//       {/* <Route path="/" element={<ShowCase />} /> */}
//       <Route path="/product/:id" element={<ProductDetail />} />
//         <Route path="/" element={<HeroSection />} />
//         <Route path="/contact" element={<ContactMain />} />
//         <Route path="/products" element={<Product />} />
      
//         <Route path="/about" element={<AboutMain />} />
//       </Routes>

//       {/* Uncomment if you have the Popup component */}
//       {showPopup && <Popup onClose={closePopup} />}

//       {/* WhatsApp Floating Icon */}
//       <a
//         href="https://wa.me/9873719245"
//         target="_blank"
//         rel="noopener noreferrer"
//         style={{
//           position: 'fixed',
//           bottom: '20px',
//           right: '20px',
//           backgroundColor: '#25D366',
//           color: 'white',
//           borderRadius: '50%',
//           width: '50px',
//           height: '50px',
//           display: 'flex',
//           justifyContent: 'center',
//           alignItems: 'center',
//           boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
//           zIndex: 1000,
//         }}
//       >
//         <FaWhatsapp size={28} />
//       </a>
//     </div>
//   );
// };

// export default App;


import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/Index';
import Product from './pages/Product';
import ProductDetails from './pages/ProductDetails';
import Popup from './pages/PopUp';
import ContactMain from './pages/ContactMain';
import AboutMain from './pages/AboutMain';
import ShowCase from './pages/ShowCase';
import ProductDetail from './pages/ProductShowcase';
import { FaWhatsapp } from 'react-icons/fa'; // Import WhatsApp icon
import ProductPage from './pages/Product';
import MainProductDetail from './pages/ProductDetails';
import ProductDetailMain from './pages/ProductDetails';

const App = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false); // State for dark/light mode

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 3000); // Show popup after 3 seconds

    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => {
    setShowPopup(false);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div >
     

      <Header />
      <Routes>
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/" element={<HeroSection />} />
        <Route path="/contact" element={<ContactMain />} />
        <Route path="/products" element={<Product />} />
        <Route path="/about" element={<AboutMain />} />
        <Route path="/productlist/:id" element={<ProductDetailMain/>}/>
      </Routes>

      {/* Popup (if required) */}
      {/* {showPopup && <Popup onClose={closePopup} />} */}

      {/* Floating Chat Us Button */}
      <a
        href="https://wa.me/7518588115"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          backgroundColor: '#008E97',
          color: 'white',
          borderRadius: '25px',
          padding: '8px 16px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
          zIndex: 1000,
          cursor: 'pointer',
        }}
      >
        <FaWhatsapp size={20} style={{ marginRight: '8px' ,  }} />
        Chat Us
      </a>
    </div>
  );
};

export default App;
