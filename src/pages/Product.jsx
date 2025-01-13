
import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const categories = [
  {
    name: "Motion Sensors",
    products: [
      { id: 1, name: "2*2 Motion Sensor Panel Light", price: 800, image: "/product/2  2 motion sensor panel light.jpeg", description: "High sensitivity motion sensor" },
      { id: 2, name: "Motion Sensor Bulb 9 Watt", price: 1200, image: "/product/motion sensor bulb 9 Watt.jpeg", description: "Wireless motion detector" },
      { id: 3, name: "Motion Sensor Panel Light 12 Watt", price: 1500, image: "/product/motion sensor panel light 12 watt.jpeg", description: "Advanced motion detection" },
      { id: 4, name: "Motion Sensor Street Light", price: 1000, image: "/product/motion sensor street light.jpeg", description: "Compact motion sensor" },
      { id: 5, name: "Motion Sensor 1", price: 800, image: "/product/motion sensor tubelight 20 watt.jpeg", description: "High sensitivity motion sensor" },
      { id: 6, name: "Eloxee Motion Sensor Light for Home ", price: 1200, image: "/product/motion_sensencer6.jpg", description: "Eloxee Motion Sensor Light for Home with USB Charging Wireless Self Adhesive LED Magnetic Motion Activated Light Motion Sensor Rechargeable Light Motion Activated (2)" },
      { id: 7, name: "Light StockMotion Sensor ", price: 1500, image: "/product/motion senser 7.jpg", description: "Advanced motion detection" },
      { id: 8, name: "Compact light motion sensor", price: 1000, image: "/product/motion sencer 8.jpg", description: "Compact light motion sensor" },
    ],
  },
  {
    name: "Day Night Sensors",
    products: [
      { id: 5, name: "Day Night Sensor 1", price: 900, image: "/sensors/daynight1.avif", description: "Automatic day-night sensor" },
      { id: 6, name: "Day Night Sensor 2", price: 1100, image: "/sensors/daynight2.avif", description: "Energy-efficient sensor" },
      { id: 7, name: "Day Night Sensor 3", price: 1300, image: "/sensors/daynight3.avif", description: "Durable day-night sensor" },
      { id: 8, name: "Day Night Sensor 4", price: 950, image: "/sensors/daynight4.avif", description: "Compact and reliable" },
    ],
  },
  {
    name: "Wardrobe Sensors & Lights",
    products: [
      { id: 9, name: "Wardrobe Light 1", price: 500, image: "/sensors/wardrobe1.avif", description: "Automatic wardrobe light" },
      { id: 10, name: "Wardrobe Light 2", price: 700, image: "/sensors/wardrobe2.avif", description: "Energy-saving LED light" },
      { id: 11, name: "Wardrobe Sensor 1", price: 650, image: "/sensors/wardrobe3.avif", description: "Wardrobe proximity sensor" },
      { id: 12, name: "Wardrobe Sensor 2", price: 800, image: "/sensors/wardrobe4.avif", description: "Motion-activated light" },
    ],
  },
  {
    name: "Solar Sensor Lights",
    products: [
      { id: 13, name: "Solar Light 1", price: 2000, image: "/sensors/solar1.avif", description: "Solar-powered sensor light" },
      { id: 14, name: "Solar Light 2", price: 2500, image: "/sensors/solar2.avif", description: "Waterproof solar light" },
      { id: 15, name: "Solar Light 3", price: 3000, image: "/sensors/solar3.avif", description: "High-brightness solar light" },
      { id: 16, name: "Solar Light 4", price: 2200, image: "/sensors/solar4.avif", description: "Durable solar sensor light" },
    ],
  },
  {
    name: "Timer and Smart Meters",
    products: [
      { id: 17, name: "Smart Timer 1", price: 1000, image: "/sensors/timer1.avif", description: "Programmable smart timer" },
      { id: 18, name: "Smart Timer 2", price: 1200, image: "/sensors/timer2.avif", description: "Compact timer switch" },
      { id: 19, name: "Smart Meter 1", price: 1500, image: "/sensors/meter1.avif", description: "Advanced smart meter" },
      { id: 20, name: "Smart Meter 2", price: 1800, image: "/sensors/meter2.avif", description: "Energy monitoring smart meter" },
    ],
  },
  {
    name: "Smart Plug and Controllers",
    products: [
      { id: 21, name: "Smart Plug 1", price: 800, image: "/sensors/plug1.avif", description: "WiFi-enabled smart plug" },
      { id: 22, name: "Smart Plug 2", price: 900, image: "/sensors/plug2.avif", description: "Voice-controlled plug" },
      { id: 23, name: "Controller 1", price: 1200, image: "/sensors/controller1.avif", description: "Smart device controller" },
      { id: 24, name: "Controller 2", price: 1300, image: "/sensors/controller2.avif", description: "Universal smart controller" },
    ],
  },
  {
    name: "Sirens and Hooters",
    products: [
      { id: 25, name: "Siren 1", price: 1500, image: "/sensors/siren1.avif", description: "Loud emergency siren" },
      { id: 26, name: "Siren 2", price: 1800, image: "/sensors/siren2.avif", description: "Compact hooter" },
      { id: 27, name: "Hooter 1", price: 2000, image: "/sensors/hooter1.avif", description: "High-volume hooter" },
      { id: 28, name: "Hooter 2", price: 2200, image: "/sensors/hooter2.avif", description: "Durable alarm hooter" },
    ],
  },
  {
    name: "Security Systems",
    products: [
      { id: 29, name: "Security System 1", price: 5000, image: "/sensors/security1.avif", description: "Complete security system" },
      { id: 30, name: "Security System 2", price: 7000, image: "/sensors/security2.avif", description: "Advanced surveillance system" },
      { id: 31, name: "Security System 3", price: 10000, image: "/sensors/security3.avif", description: "Smart home security" },
      { id: 32, name: "Security System 4", price: 8000, image: "/sensors/security4.avif", description: "Wireless security system" },
    ],
  },
];

const ProductPage = () => {
  return (
    <div>
      <div className="bg-gray-100 min-h-screen p-6">
      <h1 className="text-4xl font-bold text-center mb-8">Our Product Categories</h1>
      {categories.map((category, index) => (
        <div key={index} className="mb-12">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">{category.name}</h2>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {category.products.map((product) => (
              <div key={product.id} className="bg-white p-4 rounded-lg shadow-lg">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h3 className="text-lg font-semibold text-gray-800 truncate">{product.name}</h3>
                
                <p className="text-sm text-gray-600 truncate">{product.description}</p>
                <Link
                  to={`/product/${product.id}`}
                  className="text-blue-500 hover:underline mt-2 block"
                >
                  View Details
                </Link>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
    <Footer/>
    </div>
  );
};

export default ProductPage;
