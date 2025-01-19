import React from "react";
import {
  FaLightbulb,
  FaSolarPanel,
  FaWind,
  FaFan,
  FaPlug,
  FaLeaf,
  FaHome,
} from "react-icons/fa";
import { MdEnergySavingsLeaf } from "react-icons/md";

const SaveEnergyDarkTheme = () => {
  return (
    <div className="bg-gray-900 text-gray-100 py-10 px-6">
      {/* Header Section */}
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl glow-textt font-bold text-green-400 mb-4 animate-fade-in-down">
          Save Energy, Save the Planet 🌍
        </h1>
        <p className="text-gray-300 text-lg max-w-3xl mx-auto animate-fade-in">
          Reduce your energy consumption by adopting energy-efficient practices
          and using equipment designed to minimize waste. A small change today
          can ensure a sustainable tomorrow!
        </p>
      </div>

      {/* Content Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-7xl mx-auto">
        {/* Section 1 */}
        <div className="group bg-gray-800 rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-300">
          <div className="p-6">
            <FaSolarPanel className="text-green-400 text-6xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
            <h2 className="text-2xl font-bold text-green-400 mb-3 text-center group-hover:text-green-300 transition-colors duration-300">
              Use Energy-Efficient Appliances
            </h2>
            <p className="text-gray-300 mb-4 text-center">
              Switch to energy-saving appliances like refrigerators, air
              conditioners, and washing machines with high energy efficiency
              ratings. These appliances consume less power and help reduce your
              energy bills.
            </p>
            <div className="flex justify-center space-x-8 mt-6">
              <div className="text-center group-hover:text-green-400">
                <FaPlug className="text-green-400 text-4xl mx-auto group-hover:rotate-12 transition-transform duration-300" />
                <p className="text-sm mt-2 text-gray-300">Smart Plugs</p>
              </div>
              <div className="text-center group-hover:text-green-400">
                <FaFan className="text-green-400 text-4xl mx-auto group-hover:rotate-12 transition-transform duration-300" />
                <p className="text-sm mt-2 text-gray-300">Efficient Fans</p>
              </div>
              <div className="text-center group-hover:text-green-400">
                <FaHome className="text-green-400 text-4xl mx-auto group-hover:rotate-12 transition-transform duration-300" />
                <p className="text-sm mt-2 text-gray-300">Smart Appliances</p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2 */}
        <div className="group bg-gray-800 rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-300">
          <div className="p-6">
            <FaLightbulb className="text-green-400 text-6xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
            <h2 className="text-2xl font-bold text-green-400 mb-3 text-center group-hover:text-green-300 transition-colors duration-300">
              Conserve Energy with Smart Practices
            </h2>
            <p className="text-gray-300 mb-4 text-center">
              Turn off lights, fans, and appliances when not in use. Switch to
              LED bulbs, smart thermostats, and motion-sensor lighting to
              further reduce unnecessary energy consumption.
            </p>
            <div className="flex justify-center space-x-8 mt-6">
              <div className="text-center group-hover:text-green-400">
                <FaLeaf className="text-green-400 text-4xl mx-auto group-hover:rotate-12 transition-transform duration-300" />
                <p className="text-sm mt-2 text-gray-300">Eco Lighting</p>
              </div>
              <div className="text-center group-hover:text-green-400">
                <MdEnergySavingsLeaf className="text-green-400 text-4xl mx-auto group-hover:rotate-12 transition-transform duration-300" />
                <p className="text-sm mt-2 text-gray-300">Energy Savings</p>
              </div>
              <div className="text-center group-hover:text-green-400">
                <FaWind className="text-green-400 text-4xl mx-auto group-hover:rotate-12 transition-transform duration-300" />
                <p className="text-sm mt-2 text-gray-300">Renewable Energy</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .glow-textt {
          color: #32cdyh0u732; /* LimeGreen */
          text-shadow: 
            0 0 5px #32cd32,
            0 0 10px #32cd32,
            0 0 20px #32cd32,
            0 0 40px #32cd32,
            0 0 80px #32cd32;
        }
        .animate-fade-in {
          animation: fadeIn 2s ease-in-out;
        }
        .animate-fade-in-down {
          animation: fadeInDown 2s ease-in-out;
        }
        @keyframes fadeIn {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
        @keyframes fadeInDown {
          0% {
            opacity: 0;
            transform: translateY(-20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      {/* Footer Section */}
      <footer className="mt-12 text-center animate-fade-in">
        <p className="text-gray-400 text-lg">
          "Together, we can create a better future by using energy wisely." 🌱
        </p>
      </footer>
    </div>
  );
};

export default SaveEnergyDarkTheme;



