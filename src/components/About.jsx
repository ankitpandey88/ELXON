


import React from 'react';
import { motion } from 'framer-motion';


function AboutUs() {
  return (
    <section className="py-20 bg-gray-100" id="about">
      <div className="container mx-auto px-6 flex items-center justify-between space-x-12">
        
        {/* Content Section */}
        <div className="text-center lg:text-left max-w-xl">
          {/* Title Section */}
          <motion.h2
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl font-extrabold text-gray-800 mb-6"
          >
            About Us
          </motion.h2>

          {/* Description Section */}
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-lg text-gray-600 mb-6"
          >
            ELXON - Lighting Automation and Control Solution, based in New Delhi, India, is a leading private company in the electrical and automation industry. We specialize in the development, design, and manufacturing of customized automation solutions for the lighting, home automation, and solar industries.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-lg text-gray-600 mb-6"
          >
            With over 5 years of expertise in electrical, electronics, and automation, we offer complete automation solutions, installation, and services. Our journey began with a vision to create a world where sustainability is ingrained in every product we offer.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="text-lg text-gray-600 mb-8"
          >
            Our mission is to save energy and reduce efforts through innovative automation devices. We aim to help save energy, save money, and ultimately save the planet.
          </motion.p>

          {/* Learn More Button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <a
              href="#learn-more" // This could be an internal link or an external link
              className="inline-block mt-4 px-8 py-3 bg-[#002244] text-white text-lg font-semibold rounded-lg hover:bg-blue-800 transition-colors"
            >
              Learn More
            </a>
          </motion.div>
        </div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="w-1/2 hidden lg:block"
        >
          <img
            src="image/about.png"
            alt="Lighting Automation"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default AboutUs;
