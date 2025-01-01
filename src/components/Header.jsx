

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaSearch, FaUser } from "react-icons/fa";

function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const linkClasses = `font-semibold transition-colors ${
    scrollPosition > 0 ? "text-white hover:text-gray-300" : "text-black hover:text-gray-700"
  }`;

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrollPosition > 0 ? "bg-[#002244]" : "bg-white"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center py-3">
        {/* Logo and Company Name */}
        <div className="flex items-center space-x-3">
          <Link to="/">
            <img
              src="/image/logo1.jpeg"
              alt="logo"
              className="w-30 h-14 bg-white p-2 rounded-2xl"
            />
          </Link>
          <span
            className={`text-2xl font-bold transition-colors ${
              scrollPosition > 0 ? "text-white" : "text-black"
            }`}
          >
            ELXON
          </span>
        </div>

        {/* Navigation and Utility Icons */}
        <div className="flex items-center space-x-6">
          {/* Navigation Links */}
          <nav className="hidden lg:flex space-x-8 text-base">
            <Link to="/" className={linkClasses}>
              Home
            </Link>
            <Link to="/about" className={linkClasses}>
              About 
            </Link>
            <Link to="/products" className={linkClasses}>
              Our Products
            </Link>
            <Link to="/contact-us" className={linkClasses}>
              Contact
            </Link>
          </nav>

          {/* Search Bar */}
          <div className="hidden lg:flex items-center bg-gray-200 rounded-full px-3 py-1">
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent outline-none text-sm text-black px-2"
            />
            <FaSearch className="text-black" />
          </div>

          {/* User Icon */}
          <div
            className={`hidden lg:flex items-center space-x-2 cursor-pointer ${linkClasses}`}
            onClick={() => setLoginModalOpen(true)}
          >
            <FaUser className="w-6 h-6" />
            {/* <span className="text-sm">Login</span> */}
          </div>

          {/* Hamburger Menu for Mobile */}
          <button
            className="lg:hidden"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <FaBars className="w-8 h-8 text-black" />
          </button>
        </div>
      </div>

      {/* Sidebar for Mobile */}
      {sidebarOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50">
          <div className="w-64 h-full bg-gray-800 p-6">
            <button
              className="absolute top-4 right-4 text-white"
              onClick={() => setSidebarOpen(false)}
            >
              <FaTimes className="w-6 h-6" />
            </button>
            <nav className="mt-10 space-y-4">
              {[
                { name: "Home", link: "/" },
                { name: "About ", link: "/about" },
                { name: "Services", link: "/services" },
                { name: "Contact", link: "/contact-us" },
              ].map((item) => (
                <Link
                  key={item.name}
                  to={item.link}
                  className="block text-lg text-white hover:text-gray-400"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}

      {/* Login/Register Modal */}
      {isLoginModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-lg w-96 p-6 shadow-lg">
            <button
              className="absolute top-4 right-4 text-black"
              onClick={() => setLoginModalOpen(false)}
            >
              <FaTimes className="w-6 h-6" />
            </button>
            <h2 className="text-xl font-bold mb-4">Login / Register</h2>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Email"
                className="w-full p-2 border border-gray-300 rounded"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full p-2 border border-gray-300 rounded"
              />
              <button
                type="submit"
                className="w-full bg-[#002244] text-white py-2 rounded hover:bg-blue-700"
              >
                Login
              </button>
            </form>
            <p className="mt-4 text-center text-sm">
              Don't have an account?{" "}
              <Link to="/register" className="text-blue-600 hover:underline">
                Register
              </Link>
            </p>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
