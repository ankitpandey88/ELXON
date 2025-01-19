




import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

const categories = [
  {
    name: " MOTION SENSOR LIGHTS",
    products: [
      { id: 1, name: "Motion Sensor Bulb ", price: 1200, image: "/product/motion sensor bulb 9 Watt.jpeg", description: "A motion sensor bulb automatically lights up when detecting movement" },
      { id: 2, name: "Motion Sensor Panel Light ", price: 1500, image: "/product/motion sensor panel light 12 watt.jpeg", description: "A motion sensor panel light activates upon detecting nearby movement" },
      { id: 3, name: " Motion Sensor Tubelight", price: 1000, image: "/product/motion sensor tubelight 20 watt.jpeg", description: "A motion sensor tube light illuminates when motion is detected" },
      { id: 4, name: "  Motion Sensor Street Light ", price: 800, image: "/product/motion sensor street light.jpeg", description: "A motion sensor street light activates upon detecting movement nearby" },
      { id: 5, name: "  2 x2 Dimmable Panel Light with Motion Sensor  ", price: 800, image: "/product/2  2 motion sensor panel light.jpeg", description: " 2x2 dimmable panel light adjusts brightness and activates with motion detection" },
      { id: 6, name: "Eloxee Motion Sensor Light for Home ", price: 1200, image: "/product/motion_sensencer6.jpg", description: "Eloxee Motion Sensor Light for Home with USB Charging Wireless Self Adhesive LED Magnetic Motion Activated Light Motion Sensor Rechargeable Light Motion Activated (2)" },
      { id: 7, name: "Light StockMotion Sensor ", price: 1500, image: "/product/motion senser 7.jpg", description: "Advanced motion detection" },
      { id: 8, name: "Compact light motion sensor", price: 1000, image: "/product/motion sencer 8.jpg", description: "Compact light motion sensor" },
    ],
  },
  {
    name: "Motion Sensors",
    products: [
      { id: 9, name: "PIR Motion Sensor Ceiling Mount", price: 900, image: "/product/PIR motion sensors.jpeg", description: "detects motion using infrared technology, ideal for automatic lighting, energy efficiency, and enhanced security" },
      { id: 10, name: "Microwave Motion Sensor Ceiling Mount ", price: 1100, image: "/product/microwave motion sensor.jpeg", description: "uses radar technology for motion detection, offering precise automatic lighting control and enhanced security" },
      { id: 11, name: "Mini PIR Motion Sensor", price: 1300, image: "/product/Mini PIR sensor.jpeg", description: "compact infrared detector for efficient motion-based automatic lighting control and enhanced energy savings" },
      { id: 12, name: "Microwave Motion Sensor", price: 950, image: "/product/microwave  sensor.jpeg", description: "  utilizes radar waves to detect motion, providing precise automatic lighting control and enhanced energy efficiency in various applications." },
    ],
  },
  {
    name: " TIMERS & SMART METERS",
    products: [
      { id: 13, name: "Smart Energy Meter (6 Parameter)", price: 900, image: "/product/smart energy meter.jpeg", description: "monitors voltage, current, power, energy, frequency, and power factor, ensuring efficient energy management" },
      { id: 14, name: "Smart Energy Meter (Plug-in Type) ", price: 1100, image: "/product/smart energy meter plug in.jpeg", description: "easily monitors energy usage, providing real-time insights into power consumption for efficient energy management." },
      { id: 15, name: "The Voltage Protector (1 Phase)", price: 1300, image: "/product/Voltage Protector.jpeg", description: "safeguards electrical appliances by preventing damage from voltage fluctuations, ensuring stable and reliable performance" },
      { id: 16, name: " Digital Timer Switch", price: 950, image: "/product/digital timer switch.jpeg", description: " allows precise scheduling of electrical devices, enhancing convenience and energy efficiency by automating on/off functions" },
    ],
  },
  {
    name: " DAY NIGHT SENSOR",
    products: [
      { id: 17, name: " Day Night Sensor (Basic) ", price: 1499, image: "/product/Day night sensor.jpeg", description: " automatically controls lighting based on ambient light levels, turning lights on at dusk and off at dawn." },
      { id: 18, name: "Day Night Sensor (Adjustable) ", price: 1199, image: "/image/DAY NIGHT SENSOR (ADJUSTABLE).jpg", description: " detects ambient light levels and automatically controls lighting, with customizable settings for dusk and dawn " },
      { id: 19, name: " Day Night Sensor (IP65)", price: 1790, image: "/image/DAY NIGHT SENSOR (IP65).jpg", description: " offers weatherproof protection, automatically controlling lighting based on light levels, ideal for outdoor environments" },
      { id: 20, name: "Sensor Night Light (Multicolor) ", price: 1399, image: "/image/SENSOR NIGHT LIGHT (MULTICOLOR).jpg", description: " automatically activates in low light, providing a range of colors for enhanced ambiance and safety." },
    ],
  },
  {
    name: " WARDROBE SENSOR & LIGHTS",
    products: [
      { id: 21, name: " Wardrobe Sensor", price: 900, image: "/product/Wardrobe sensor.jpeg", description: "automatically activates lighting when the wardrobe is opened, providing convenience and energy savings by detecting motion" },
      { id: 22, name: " Wardrobe Sensor (Plug-in Type) ", price: 1100, image: "/product/warehouse  sensor.jpeg", description: "automatically turns on the light when the wardrobe door is opened, offering convenience and energy efficiency." },
      { id: 23, name: "Cabinet Sensor Light (Rechargeable)", price: 1300, image: "/product/cabinet light.jpeg", description: " This rechargeable cabinet sensor light automatically turns on when motion is detected, providing efficient lighting without wiring" },
      { id: 24, name: " Cabinet Sensor Light (Multicolor & Dimming)", price: 950, image: "/image/Cabinet Sensor Light (Multicolor & Dimming).webp", description: " This multicolor, dimming cabinet sensor light offers customizable lighting options, activating automatically with motion for enhanced convenience and ambiance" },
    ],
  },
  {
    name: " SENSOR SOLAR LIGHTS",
    products: [
      { id: 21, name: " Solar Motion Sensor Street Light", price: 900, image: "/product/solar motion sensro street light.jpeg", description: " The Solar Motion Sensor Street Light automatically activates at night, using solar power and motion detection for efficient outdoor lightingSolar Motion Sensor Street Light: The Solar Motion Sensor Street Light automatically activates at night, using solar power and motion detection for efficient outdoor lighting" },
      { id: 22, name: " Solar Wall Light ", price: 1100, image: "/product/solar wall light.jpeg", description: " The Solar Wall Light provides energy-efficient illumination, charging during the day and lighting up automatically at night." },
      { id: 23, name: "Solar Ceiling Lamp", price: 1300, image: "/image/Solar Ceiling Lamp.webp", description: "  The Solar Ceiling Lamp offers eco-friendly lighting by harnessing solar energy, perfect for brightening interiors with sustainable power" },
      { id: 24, name: " Sensor Solar Light", price: 950, image: "/image/Sensor Solar Light.webp", description: " The Sensor Solar Light detects motion and provides automatic lighting powered by solar energy, ideal for security and outdoor areas." },
    ],
  },

  {
    name: "SMART PLUG & CONTROLLER",
    products: [
      { id: 25, name: " WiFi Mini Smart Plug", price: 900, image: "/image/WiFi Mini Smart Plug.webp", description: " The WiFi Mini Smart Plug enables remote control of devices via smartphone, offering convenience and energy savings with voice command support." },
      { id: 26, name: " 4CH Wi-Fi Switch Module ", price: 1100, image: "/image/4CH Wi-Fi Switch Module.jpg", description: "  The 4CH Wi-Fi Switch Module allows you to control multiple devices remotely via Wi-Fi, providing efficient home automation" },
      { id: 27, name: " Staircase Sensor", price: 1300, image: "/image/Staircase Sensor.webp", description: "  The Staircase Sensor detects motion and automatically controls lighting on stairs, ensuring safety and energy efficiency in dark areas" },
      { id: 28, name: " RGB Light Controller & LED Power Strip", price: 950, image: "/product/rgb light controller.jpeg", description: " The RGB Light Controller and LED Power Strip offer customizable lighting options, ideal for creating vibrant, energy-efficient lighting effects" },
    ],
  },
  
  {
    name: "Security Systems",
    products: [
      { id: 29, name: "Smoke Detector ", price: 1499, image: "/image/smoke.jpg", description: " Smoke detectors/Alarms are usually housed in plastic enclosures, typically shaped like a disk about 125 millimetres (5 in) in diameter and 25 millimetres (1 in) thick, but shape and size vary." },
      { id: 30, name: "Gas Detector ", price: 1199, image: "/image/Gas-Detector.jpg", description: " Gas detector that has a 2-line LED display and indicator lights to show the status of the instrument. " },
      { id: 31, name: "Door senso", price: 1790, image: "/image/door-sencer.jpg", description: " It can be used to trigger alarms, send alerts, or connect to smart devices" },
      { id: 32, name: "Siren & Hooters", price: 1399, image: "/product/sirensand hooter with light.jpeg", description: " devices that produce sound to alert people of an emergency" },
    ],
  },


];

const ProductPage = () => {
   const navigate = useNavigate();

   const handleProductClick = (id) => {
    navigate(`/productlist/${id}`);
  };
  return (
    <div>
      <div className="bg-gray-900 min-h-screen p-6">
      <h1 className="text-4xl font-bold text-white text-center mb-8">Our Product Categories</h1>
      {categories.map((category, index) => (
        <div key={index} className="mb-8">
          <h2 className="text-2xl font-bold text-center text-white mb-4">{category.name}</h2>
          <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
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
                  to={`/productlist/${product.id}`}
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
