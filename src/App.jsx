
// import React from 'react'
// import Header from './components/Header'
// import AboutUs from './components/About'
// import HeroSection from './components/Index'

// const App = () => {
//   return (
//     <div>
//       <Header/>
//       <HeroSection/>
      

//     </div>
//   )
// }

// export default App


import React, { useState, useEffect } from 'react';
import Header from './components/Header';

import HeroSection from './components/Index';
import Popup from './pages/PopUp';


const App = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 3000); // Show after 15 seconds

    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div>
      <Header />
      <HeroSection />
   

      {/* Conditionally render the popup */}
      {showPopup && <Popup onClose={closePopup} />}
    </div>
  );
}

export default App;
