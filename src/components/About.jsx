

import React from 'react';

const AboutUs = () => {
  return (
    <section className="bg-gray-50 text-gray-800 py-12 px-6">
      <div className="container mx-auto">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-blue-600 mb-4 animate-fadeInDown">
            INDIA’S FINEST RANGE OF LIGHTING AUTOMATION, SMART ELECTRICAL APPLIANCES & SOLAR LIGHTINGS
          </h2>
          <p className="text-lg text-gray-600 mb-8 animate-fadeInUp">
            ELXON - Lighting Automation and Control Solution, New Delhi, India
          </p>
        </div>
        <div className="bg-white shadow-lg rounded-lg overflow-hidden p-8 animate-scaleIn">
          <h3 className="text-3xl font-bold text-gray-800 mb-4">ABOUT US</h3>
          <p className="text-gray-600 mb-4">
            ELXON is a leading private company in the electrical and automation industry. We specialize in the development, design, and manufacturing of customized automation solutions for lighting industries, home automation, and solar industries.
          </p>
          <p className="text-gray-600 mb-4">
            With over 5 years of expertise in electrical, electronics, and automation, we provide complete automation solutions, installation, and services. Our journey began with a vision to create a world where sustainability is not just a concept but a way of life ingrained in every product we offer.
          </p>
          <p className="text-gray-600">
            Our mission is to save energy and effort through our innovative automation devices.
          </p>
        </div>
        <div className="mt-12 flex justify-center">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium shadow-lg hover:bg-blue-700 transform hover:scale-105 transition duration-300 animate-bounce">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
