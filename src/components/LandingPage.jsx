


import React from 'react';
import { motion } from 'framer-motion';

function LandingPage() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/image/landing1.jpg')" }}
      id="home"
      aria-label="home"
    >
      {/* Overlay */}
      <div className="absolute inset-0 "></div>
      
      {/* Main Content */}
      <div className="relative z-10 text-center p-10">
        {/* Hero Text Animation */}
        <motion.div
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 1 }} 
          className="bg-cover bg-center h-[80vh] relative text-white flex flex-col items-center justify-center"
        >
          <h1 className="text-4xl  bg-black bg-opacity-50 p-8  text-center rounded-lg font-extrabold leading-tight">
            One of the leading Inland Container Depots (ICD)
          </h1>
          <p className="mt-4 text-xl font-medium  bg-black bg-opacity-50 p-4  text-center rounded-lg ">
            Recognized as a leading inland container depot, Sanjvik Terminals sets the standard for excellence
          </p>
        </motion.div>

       
      </div>
    </section>
  );
}

export default LandingPage;