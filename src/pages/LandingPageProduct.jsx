


import React from "react";
import { motion } from "framer-motion"; 

const products = [
  {
    name: "MOTION SENSOR LIGHTS",
    image: "/product/motion sensor street light.jpeg",
    details: "Motion sensor lights activate on movement, offering energy-efficient security and convenience indoors or outdoors",
  },
  {
    name: " MOTION SENSORS",
    image: "/product/Day night sensor.jpeg",
    details: "Motion sensors detect movement to automate lighting, enhance security, and improve energy efficiency in any space.",
  },
  {
    name: "TIMERS & SMART METERS",
    image: "/product/Wardrobe sensor.jpeg",
    details: "Timers and smart meters optimize energy usage by scheduling devices and tracking consumption for efficiency and cost savings.",
  },
  {
    name: "DAY NIGHT SENSOR",
    image: "/product/solar motion sensro street light.jpeg",
    details: "Day-night sensors automatically adjust lighting based on ambient light levels, ensuring energy efficiency and convenience.",
  },
  {
    name: "WARDROBE SENSOR & LIGHTS",
    image: "/product/Mini PIR sensor.jpeg",
    details: "Wardrobe sensors and lights illuminate automatically upon opening, providing convenient and energy-efficient lightin.",
  },
  {
    name: "SENSOR SOLAR LIGHTS",
    image: "/product/Voltage Protector.jpeg",
    details: "Sensor solar lights harness solar energy and activate on motion, offering eco-friendly and automatic outdoor illumination.",
  },
  {
    name: "SMART PLUG & CONTROLLER",
    image: "/product/solar wall light.jpeg",
    details: "Smart plugs and controllers enable remote device management, energy monitoring, and automation for a smarter, more efficient home.",
  },
  {
    name: "SECURITY SYSTEM",
    image: "/product/sirens and hooters.jpeg",
    details: "Audible alarms for alerts and security.",
  },
  {
    name: "MICROWAVE SENSOR  ",
    image: "/product/microwave  sensor.jpeg",
    details: "Audible alarms for alerts and security.",
  },
];

const ProductCategories = () => {
  return (
    <div className="bg-gray-100 py-16 px-8"
    style={{ backgroundImage: "url('/image/productBg.jpg')" }}
    
    >
      <h1 className="text-center text-5xl glow-text font-bold mb-16 text-white">
        Our Product Categories
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {products.map((product, index) => (
          <motion.div
            key={index}
            className="relative group overflow-hidden rounded-xl shadow-lg bg-white transform hover:scale-105 transition-transform duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            {/* Image */}
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover rounded-t-xl"
            />
            {/* Content */}
            <div className="p-6">
              <h2 className="text-xl font-bold text-gray-700 mb-2">
                {product.name}
              </h2>
              <p className="text-sm text-gray-600">{product.details}</p>
            </div>
            {/* Subtle Overlay on Hover */}
            <div className="absolute inset-0 bg-gray-900 bg-opacity-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            {/* Button on Hover */}
            <div className="absolute inset-x-0 bottom-4 opacity-0 group-hover:opacity-100 flex justify-center transition-opacity duration-300">
              
            </div>
          </motion.div>
        ))}
      </div>
      <style jsx>{`
        .glow-text {
          color: white;
          text-shadow: 
            0px 0px 10px red,
            0px 0px 20px red,
            0px 0px 40px red,
            0px 0px 80px red;
        }
      `}</style>
    </div>
  );
};

export default ProductCategories;
