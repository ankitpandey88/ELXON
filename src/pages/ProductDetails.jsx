

import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import Footer from "../components/Footer";

const ProductDetailMain = () => {
  const { id } = useParams();
  const navigate = useNavigate();



  const products = [
    {
      id: 1,
      image: "/product/motion sensor bulb 9 Watt.jpeg",
      title: "Motion Sensor Bulb",
      description: "A motion sensor bulb automatically lights up when detecting movement.",
      price: "₹299",
      rating: 4.2,
      specifications: {
        inputSupplyVoltage: "220-240 V AC, 50HZ",
        outputLoad: "7 W , 9W , 15W (AUTO DIM)",
        detectionDistance: "6MTR",
        detectionRange: "360°",
        timeDelay: "1 MIN",
        installationHeight: "2.2 - 4 MTR",
      },
    },
    {
      id: 2,
      image: "/product/motion sensor panel light 12 watt.jpeg",
      title: "Motion Sensor Panel Light",
      description: "A motion sensor panel light activates upon detecting nearby movement.",
      price: "₹699",
      rating: 4.5,
      specifications:   {
        inputSupplyVoltage: "220-240 V AC, 50HZ",
        outputLoad: "12W",
        detectionDistance: "9MTR",
        detectionRange: "360°",
        timeDelay: "40 SEC",
        installationHeight: "2.2 - 4 MTR",
      },
    },
    {
      id: 3,
      image: "/product/motion sensor tubelight 20 watt.jpeg",
      title: "Motion Sensor Tubelight",
      description: "A motion sensor tube light illuminates when motion is detected.",
      price: "₹599",
      rating: 4.1,
      specifications:   {
        inputSupplyVoltage: "220-240 V AC, 50HZ",
        outputLoad: "20W (Auto ON/OFF & Dimmable)",
        detectionDistance: "6MTR",
        detectionRange: "360°",
        timeDelay: "30 SEC",
        installationHeight: "2.2 - 4 MTR",
      },
    },
    {
      id: 4,
      image: "/product/motion sensor street light.jpeg",
      title: "Motion Sensor Street Light",
      description: "A motion sensor street light activates upon detecting movement nearby.",
      price: "₹1999",
      rating: 4.0,
      specifications:   {
        inputSupplyVoltage: "220-240 V AC, 50HZ",
        outputLoad: "35W/80W (Auto ON/OFF & Dimmable)",
        detectionDistance: "8MTR",
        detectionRange: "360°",
        timeDelay: "40 SEC",
        installationHeight: "2 - 4 MTR",
      },
    },
    {
      id: 5,
      image: "/product/2  2 motion sensor panel light.jpeg",
      title: "2x2 Dimmable Panel Light with Motion Sensor",
      description: "2x2 dimmable panel light adjusts brightness and activates with motion detection.",
      price: "₹800",
      rating: 4.3,
      specifications: {
        inputSupplyVoltage: "220-240 V AC, 50HZ",
        outputLoad: "36W/48W",
        detectionDistance: "9MTR",
        detectionRange: "360°",
        timeDelay: "30 SEC",
        installationHeight: "2 - 4 MTR",
      },
    },
    {
      id: 6,
      image: "/product/motion_sensencer6.jpg",
      title: "Eloxee Motion Sensor Light for Home",
      description: "Eloxee Motion Sensor Light for Home with USB Charging Wireless Self Adhesive LED Magnetic Motion Activated Light Motion Sensor Rechargeable Light Motion Activated (2).",
      price: "₹1200",
      rating: 4.4,
      specifications: {
        inputSupplyVoltage: "220-240 V AC, 50HZ",
        outputLoad: "20 W",
        detectionDistance: "8MTR",
        detectionRange: "180°",
        timeDelay: "1.5 MIN",
        installationHeight: "3 - 6 MTR",
      },
    },
    {
      id: 7,
      image: "/product/motion senser 7.jpg",
      title: "Light Stock Motion Sensor",
      description: "Advanced motion detection.",
      price: "₹1500",
      rating: 4.2,
      specifications: {
        inputSupplyVoltage: "220-240 V AC, 50HZ",
        outputLoad: "20 W",
        detectionDistance: "8MTR",
        detectionRange: "180°",
        timeDelay: "1.5 MIN",
        installationHeight: "3 - 6 MTR",
      },
    },
    {
      id: 8,
      image: "/product/motion sencer 8.jpg",
      title: "Compact Light Motion Sensor",
      description: "Compact light motion sensor.",
      price: "₹1000",
      rating: 4.1,
      specifications: {
        inputSupplyVoltage: "220-240 V AC, 50HZ",
        outputLoad: "20 W",
        detectionDistance: "8MTR",
        detectionRange: "180°",
        timeDelay: "1.5 MIN",
        installationHeight: "3 - 6 MTR",
      },
    },
    {
      id: 9,
      image: "/product/PIR motion sensors.jpeg",
      title: "PIR Motion Sensor Ceiling Mount",
      description: "Detects motion using infrared technology, ideal for automatic lighting, energy efficiency, and enhanced security.",
      price: "₹499",
      rating: 4.3,
      specifications:   {
        inputSupplyVoltage: "220-240 V AC, 50HZ",
        outputLoad: "300W",
        detectionDistance: "6MTR",
        detectionRange: "360°",
        timeDelay: "10 SEC - 7 MIN",
        luxAdjustment: "3 - 2000 LUX",
        installationHeight: "2.2 - 4 MTR",
      },
    },
    {
      id: 10,
      image: "/product/microwave motion sensor.jpeg",
      title: "Microwave Motion Sensor Ceiling Mount",
      description: "Uses radar technology for motion detection, offering precise automatic lighting control and enhanced security.",
      price: "₹599",
      rating: 4.4,
      specifications:  {
        inputSupplyVoltage: "220-240 V AC, 50HZ",
        outputLoad: "1000W",
        detectionDistance: "1-8MTR",
        detectionRange: "360°",
        timeDelay: "10 SEC - 15 MIN",
        luxAdjustment: "3 - 2000 LUX",
        installationHeight: "2.2 - 4 MTR",
      },
    },
    {
      id: 11,
      image: "/product/Mini PIR sensor.jpeg",
      title: "Mini PIR Motion Sensor",
      description: "Compact infrared detector for efficient motion-based automatic lighting control and enhanced energy savings.",
      price: "₹299",
      rating: 4.5,
      specifications:   {
        inputSupplyVoltage: "220-240 V AC, 50HZ",
        outputLoad: "40W",
        detectionDistance: "6MTR",
        detectionRange: "110°",
        timeDelay: "10 SEC - 7 MIN",
        luxAdjustment: "3 - 2000 LUX",
        installationHeight: "2.2 - 4 MTR",
      },
    },
    {
      id: 12,
      image: "/product/microwave  sensor.jpeg",
      title: "Microwave Motion Sensor",
      description: "Utilizes radar waves to detect motion, providing precise automatic lighting control and enhanced energy efficiency in various applications.",
      price: "₹950",
      rating: 4.3,
      specifications:   {
        inputSupplyVoltage: "220-240 V AC, 50HZ",
        outputLoad: "1000W",
        detectionDistance: "5-15 MTR",
        detectionRange: "360°",
        timeDelay: "10 SEC - 15 MIN",
        luxAdjustment: "3 - 2000 LUX",
        installationHeight: "4 - 15 MTR",
      },
    },
    {
      id: 13,
      image: "/product/smart energy meter.jpeg",
      title: "Smart Energy Meter (6 Parameter)",
      description: "Monitors voltage, current, power, energy, frequency, and power factor, ensuring efficient energy management.",
      price: "₹1699",
      rating: 4.6,
      specifications:  {
        voltageMeasuringRange: "40V - 300V AC, 50HZ",
        currentMeasuringRange: "0 - 99.99 AMP",
        activePowerMeasuringRange: "0 - 30000 WATT",
        energyMeasuringRange: "0 - 99999KWH",
        mountingType: "DIN RAIL TYPE",
      },
    
    },
    {
      id: 14,
      image: "/product/smart energy meter plug in.jpeg",
      title: "Smart Energy Meter (Plug-in Type))",
      description: "easily monitors energy usage, providing real-time insights into power consumption for efficient energy management..",
      price: "₹999",
      rating: 4.6,
      specifications:   {
        inputSupplyVoltage: "220-240 V AC, 50HZ",
        outputLoad: "10A (2200 WATT)",
        powerMeasuringRange: "0 - 9999 KWH",
        mountingType: "PLUG IN TYPE",
      },
    },
    {
      id: 15,
      image: "/product/Voltage Protector.jpeg",
      title: "The Voltage Protector (1 Phase)",
      description: "safeguards electrical appliances by preventing damage from voltage fluctuations, ensuring stable and reliable performance.",
      price: "₹999",
      rating: 4.6,
      specifications:   {
        voltageRange: "220-240 V AC, 50HZ",
        outputLoad: "1000W",
        detectionDistance: "5-15 MTR",
        detectionRange: "360°",
        timeDelay: "10 SEC - 15 MIN",
        luxAdjustment: "3 - 2000 LUX",
        installationHeight: "4 - 15 MTR",
      },
    },
    {
      id: 16,
      image: "/product/digital timer switch.jpeg",
      title: "Digital Timer Switch",
      description: "allows precise scheduling of electrical devices, enhancing convenience and energy efficiency by automating on/off functions.",
      price: "₹699",
      rating: 4.6,
      specifications:   {
        inputSupplyVoltage: "220-240 V AC, 50HZ",
        outputLoad: "1000W",
        detectionDistance: "5-15 MTR",
        detectionRange: "360°",
        timeDelay: "10 SEC - 15 MIN",
        luxAdjustment: "3 - 2000 LUX",
        installationHeight: "4 - 15 MTR",
      },
    },

    
  {
    id: 17,
    image: "/product/Day night sensor.jpeg",
    title: "Day Night Sensor (Basic)",
    description: "Automatically controls lighting based on ambient light levels, turning lights on at dusk and off at dawn.",
    price: "₹199",
    rating: 4.3,
    specifications: {
      inputSupplyVoltage: "220-240 V AC, 50HZ",
      outputLoad: "7 W , 9W , 15W (AUTO DIM)",
      detectionDistance: "6MTR",
      detectionRange: "360°",
      timeDelay: "1 MIN",
      installationHeight: "2.2 - 4 MTR",
    },
  },
  {
    id: 18,
    image: "/image/DAY NIGHT SENSOR (ADJUSTABLE).jpg",
    title: "Day Night Sensor (Adjustable)",
    description: "Detects ambient light levels and automatically controls lighting, with customizable settings for dusk and dawn.",
    price: "₹299",
    rating: 4.4,
    specifications: {
      inputSupplyVoltage: "220-240 V AC, 50HZ",
      outputLoad: "7 W , 9W , 15W (AUTO DIM)",
      detectionDistance: "6MTR",
      detectionRange: "360°",
      timeDelay: "1 MIN",
      installationHeight: "2.2 - 4 MTR",
    },
  },
  {
    id: 19,
    image: "/image/DAY NIGHT SENSOR (IP65).jpg",
    title: "Day Night Sensor (IP65)",
    description: "Offers weatherproof protection, automatically controlling lighting based on light levels, ideal for outdoor environments.",
    price: "₹149",
    rating: 4.5,
    specifications: {
      inputSupplyVoltage: "220-240 V AC, 50HZ",
      outputLoad: "7 W , 9W , 15W (AUTO DIM)",
      detectionDistance: "6MTR",
      detectionRange: "360°",
      timeDelay: "1 MIN",
      installationHeight: "2.2 - 4 MTR",
    },
  },
  {
    id: 20,
    image: "/image/SENSOR NIGHT LIGHT (MULTICOLOR).jpg",
    title: "Sensor Night Light (Multicolor)",
    description: "Automatically activates in low light, providing a range of colors for enhanced ambiance and safety.",
    price: "₹1399",
    rating: 4.6,
    specifications: {
      inputSupplyVoltage: "220-240 V AC, 50HZ",
      outputLoad: "7 W , 9W , 15W (AUTO DIM)",
      detectionDistance: "6MTR",
      detectionRange: "360°",
      timeDelay: "1 MIN",
      installationHeight: "2.2 - 4 MTR",
    },
  },
  {
    id: 21,
    image: "/product/Wardrobe sensor.jpeg",
    title: "Wardrobe Sensor",
    description: "Automatically activates lighting when the wardrobe is opened, providing convenience and energy savings by detecting motion.",
    price: "₹900",
    rating: 4.2,
    specifications: {
      inputSupplyVoltage: "220-240 V AC, 50HZ",
      outputLoad: "7 W , 9W , 15W (AUTO DIM)",
      detectionDistance: "6MTR",
      detectionRange: "360°",
      timeDelay: "1 MIN",
      installationHeight: "2.2 - 4 MTR",
    },
  },
  {
    id: 22,
    image: "/product/warehouse  sensor.jpeg",
    title: "Wardrobe Sensor (Plug-in Type)",
    description: "Automatically turns on the light when the wardrobe door is opened, offering convenience and energy efficiency.",
    price: "₹1100",
    rating: 4.3,
    specifications: {
      inputSupplyVoltage: "220-240 V AC, 50HZ",
      outputLoad: "7 W , 9W , 15W (AUTO DIM)",
      detectionDistance: "6MTR",
      detectionRange: "360°",
      timeDelay: "1 MIN",
      installationHeight: "2.2 - 4 MTR",
    },
  },
  {
    id: 23,
    image: "/product/cabinet light.jpeg",
    title: "Cabinet Sensor Light (Rechargeable)",
    description: "This rechargeable cabinet sensor light automatically turns on when motion is detected, providing efficient lighting without wiring.",
    price: "₹1300",
    rating: 4.4,
    specifications: {
      inputSupplyVoltage: "220-240 V AC, 50HZ",
      outputLoad: "7 W , 9W , 15W (AUTO DIM)",
      detectionDistance: "6MTR",
      detectionRange: "360°",
      timeDelay: "1 MIN",
      installationHeight: "2.2 - 4 MTR",
    },
  },
  {
    id: 24,
    image: "/image/Cabinet Sensor Light (Multicolor & Dimming).webp",
    title: "Cabinet Sensor Light (Multicolor & Dimming)",
    description: "This multicolor, dimming cabinet sensor light offers customizable lighting options, activating automatically with motion for enhanced convenience and ambiance.",
    price: "₹950",
    rating: 4.5,
    specifications: {
      inputSupplyVoltage: "220-240 V AC, 50HZ",
      outputLoad: "7 W , 9W , 15W (AUTO DIM)",
      detectionDistance: "6MTR",
      detectionRange: "360°",
      timeDelay: "1 MIN",
      installationHeight: "2.2 - 4 MTR",
    },
  },
  {
    id: 25,
    image: "/image/WiFi Mini Smart Plug.webp",
    title: "WiFi Mini Smart Plug",
    description: "The WiFi Mini Smart Plug enables remote control of devices via smartphone, offering convenience and energy savings with voice command support.",
    price: "₹900",
    rating: 4.6,
    specifications: {
      inputSupplyVoltage: "220-240 V AC, 50HZ",
      outputLoad: "7 W , 9W , 15W (AUTO DIM)",
      detectionDistance: "6MTR",
      detectionRange: "360°",
      timeDelay: "1 MIN",
      installationHeight: "2.2 - 4 MTR",
    },
  },
  {
    id: 26,
    image: "/image/4CH Wi-Fi Switch Module.jpg",
    title: "4CH Wi-Fi Switch Module",
    description: "The 4CH Wi-Fi Switch Module allows you to control multiple devices remotely via Wi-Fi, providing efficient home automation.",
    price: "₹1100",
    rating: 4.7,
    specifications: {
      inputSupplyVoltage: "220-240 V AC, 50HZ",
      outputLoad: "7 W , 9W , 15W (AUTO DIM)",
      detectionDistance: "6MTR",
      detectionRange: "360°",
      timeDelay: "1 MIN",
      installationHeight: "2.2 - 4 MTR",
    },
  },
  {
    id: 27,
    image: "/image/Staircase Sensor.webp",
    title: "Staircase Sensor",
    description: "The Staircase Sensor detects motion and automatically controls lighting on stairs, ensuring safety and energy efficiency in dark areas.",
    price: "₹1300",
    rating: 4.6,
    specifications: {
      inputSupplyVoltage: "220-240 V AC, 50HZ",
      outputLoad: "7 W , 9W , 15W (AUTO DIM)",
      detectionDistance: "6MTR",
      detectionRange: "360°",
      timeDelay: "1 MIN",
      installationHeight: "2.2 - 4 MTR",
    },
  },
  {
    id: 28,
    image: "/product/rgb light controller.jpeg",
    title: "RGB Light Controller & LED Power Strip",
    description: "The RGB Light Controller and LED Power Strip offer customizable lighting options, ideal for creating vibrant, energy-efficient lighting effects.",
    price: "₹950",
    rating: 4.5,
    specifications: {
      inputSupplyVoltage: "220-240 V AC, 50HZ",
      outputLoad: "7 W , 9W , 15W (AUTO DIM)",
      detectionDistance: "6MTR",
      detectionRange: "360°",
      timeDelay: "1 MIN",
      installationHeight: "2.2 - 4 MTR",
    },
  },
  {
    id: 29,
    image: "/image/smoke.jpg",
    title: "Smoke Detector",
    description: "Smoke detectors/Alarms are usually housed in plastic enclosures, typically shaped like a disk about 125 millimetres in diameter.",
    price: "₹1499",
    rating: 4.3,
    specifications: {
      inputSupplyVoltage: "220-240 V AC, 50HZ",
      outputLoad: "7 W , 9W , 15W (AUTO DIM)",
      detectionDistance: "6MTR",
      detectionRange: "360°",
      timeDelay: "1 MIN",
      installationHeight: "2.2 - 4 MTR",
    },
  },
  {
    id: 30,
    image: "/image/Gas-Detector.jpg",
    title: "Gas Detector",
    description: "Gas detector that has a 2-line LED display and indicator lights to show the status of the instrument.",
    price: "₹1199",
    rating: 4.4,
    specifications: {
      inputSupplyVoltage: "220-240 V AC, 50HZ",
      outputLoad: "7 W , 9W , 15W (AUTO DIM)",
      detectionDistance: "6MTR",
      detectionRange: "360°",
      timeDelay: "1 MIN",
      installationHeight: "2.2 - 4 MTR",
    },
  },
  {
    id: 31,
    image: "/image/door-sencer.jpg",
    title: "Door Sensor",
    description: "It can be used to trigger alarms, send alerts, or connect to smart devices.",
    price: "₹1790",
    rating: 4.6,
    specifications: {
      inputSupplyVoltage: "220-240 V AC, 50HZ",
      outputLoad: "7 W , 9W , 15W (AUTO DIM)",
      detectionDistance: "6MTR",
      detectionRange: "360°",
      timeDelay: "1 MIN",
      installationHeight: "2.2 - 4 MTR",
    },
  },
  {
    id: 32,
    image: "/product/sirensand hooter with light.jpeg",
    title: "Siren & Hooters",
    description: "Devices that produce sound to alert people of an emergency.",
    price: "₹1399",
    rating: 4.0,
    specifications: {
      inputSupplyVoltage: "220-240 V AC, 50HZ",
      outputLoad: "7 W , 9W , 15W (AUTO DIM)",
      detectionDistance: "6MTR",
      detectionRange: "360°",
      timeDelay: "1 MIN",
      installationHeight: "2.2 - 4 MTR",
    },
  },


    
  ];
  

  const product = products.find((item) => item.id === parseInt(id));

  if (!product) {
    return (
      <div className="bg-gray-900 min-h-screen flex items-center justify-center text-white">
        <p>Product not found!</p>
        <button
          onClick={() => navigate("/")}
          className="mt-4 px-4 py-2 bg-yellow-500 text-black rounded"
        >
          Back to Home
        </button>
      </div>
    );
  }

  const handleBuyNow = () => {
    const message = `Hello! I am interested in purchasing the following product:\n\n*${product.title}*\nPrice: ${product.price}\nDescription: ${product.description}`;
    const whatsappUrl = `https://wa.me/917518588115?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
   <div>
      <div>
      <div className="bg-black text-white min-h-screen flex flex-col items-center p-6">
        {/* Back Button */}
        <div className="w-full flex justify-between items-center mb-4">
          <button
            onClick={() => navigate("/products")}
            className="flex items-center text-gray-400 hover:text-yellow-400"
          >
            <FaArrowLeft className="mr-2" />
            Back
          </button>
        </div>

        {/* Product Details Container */}
        <div className="w-full max-w-4xl shadow-lg rounded-lg overflow-hidden bg-gray-900">
          {/* Image Section */}
          <div className="relative w-full h-full">
            <img
              src={product.image}
              alt={product.title}
              className="object-cover w-full h-auto"
            />
          </div>

          {/* Details Section */}
          <div className="p-6">
            <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
            <p className="text-gray-300 mb-4">{product.description}</p>

            <div className="flex items-center justify-between mb-4">
              {/* Price */}
              <p className="text-lg font-semibold text-yellow-400">
                Price: {product.price}
              </p>

              {/* Rating */}
              <div className="flex items-center">
                <span className="text-yellow-400 text-lg mr-2">
                  {product.rating.toFixed(1)}
                </span>
                <div className="flex">
                  {[...Array(5)].map((_, index) => (
                    <svg
                      key={index}
                      xmlns="http://www.w3.org/2000/svg"
                      fill={index < Math.round(product.rating) ? "yellow" : "none"}
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 text-yellow-400"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.998 4.708l1.517 4.668h4.91l-3.975 2.882 1.516 4.67-3.968-2.88-3.969 2.88 1.516-4.67-3.975-2.882h4.91l1.516-4.668z"
                      />
                    </svg>
                  ))}
                </div>
              </div>
            </div>

            {/* Specifications Section */}
            <div className="mt-6">
              <h2 className="text-2xl font-semibold mb-4">Specifications:</h2>
              <ul className="list-disc list-inside text-gray-300">
                <li><strong>Input Supply Voltage:</strong> {product.specifications.inputSupplyVoltage}</li>
                <li><strong>Output Load:</strong> {product.specifications.outputLoad}</li>
                <li><strong>Detection Distance:</strong> {product.specifications.detectionDistance}</li>
                <li><strong>Detection Range:</strong> {product.specifications.detectionRange}</li>
                <li><strong>Time Delay:</strong> {product.specifications.timeDelay}</li>
                <li><strong>Installation Height:</strong> {product.specifications.installationHeight}</li>
              </ul>
            </div>

            {/* Buy Now Button */}
            <button
              onClick={handleBuyNow}
              className="mt-6 w-full bg-yellow-500 text-black font-semibold py-2 rounded-lg hover:bg-yellow-600"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
   </div>
  );
};

export default ProductDetailMain;





