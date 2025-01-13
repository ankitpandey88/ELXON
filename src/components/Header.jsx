

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaSearch,
  FaUser,
  FaShoppingCart,
} from "react-icons/fa";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";

function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isCatalogueDropdownOpen, setCatalogueDropdownOpen] = useState(false);

  const rotatingTexts = [
    "Apply VIPUL coupon now and enjoy a fantastic 20% discount on your purchase!",
    "Get free shipping on all orders over 1999rp shop more and save on delivery!",
    "Hurry up and grab these amazing limited-time offers before they run out!",
    "Shop now to discover incredible deals and save big on your favorite items!",
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const textChangeInterval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % rotatingTexts.length);
    }, 7000);

    return () => clearInterval(textChangeInterval);
  }, []);

  const linkClasses = `font-semibold transition-colors ${
    scrollPosition > 0
      ? "text-white hover:text-gray-300"
      : "text-black hover:text-gray-700"
  }`;

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrollPosition > 0 ? "bg-gray-900" : "bg-white"
      }`}
    >
      {/* Contact and Rotating Text Section */}
      <section className="bg-gray-700 py-2">
        <div className="container mx-auto flex justify-between items-center">
          {/* Rotating Text (Hidden on Mobile) */}
          <div className="hidden sm:block text-center ml-32 text-sm font-semibold text-white flex-1">
            {rotatingTexts[currentTextIndex]}
          </div>
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-white">
              <AiOutlineMail className="text-base" />
              <span className="text-base">info@elxon.in</span>
            </div>
            <div className="flex items-center space-x-2 text-white">
              <AiOutlinePhone className="text-base" />
              <a href="tel:+917518588115" className="text-base">
                +91 75185 88115
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Header */}
      <div className="container mx-auto flex justify-between items-center py-3">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <Link to="/">
            <img
              src="/image/logo.png"
              alt="logo"
              className="w-30 h-14 bg-white p-2 rounded-2xl"
            />
          </Link>
        </div>

        {/* Navigation Links (Visible in Web View) */}
        <nav className="hidden lg:flex space-x-8 text-base">
          <Link to="/" className={linkClasses}>
            Home
          </Link>
          <Link to="/about" className={linkClasses}>
            About
          </Link>
          <Link to="/products" className={linkClasses}>
            Products
          </Link>
          <div
            className="relative cursor-pointer"
            onMouseEnter={() => setCatalogueDropdownOpen(true)}
            onMouseLeave={() => setCatalogueDropdownOpen(false)}
          >
            <span className={linkClasses}>Catalogue</span>
            {isCatalogueDropdownOpen && (
              <div className="absolute top-full left-0 bg-white shadow-md p-2 rounded">
                <a
                  href="/catalog/elxon-catalogue .pdf"
                  download
                  className="block px-4 py-2 text-black hover:bg-gray-100"
                >
                  Download Catalogue
                </a>
              </div>
            )}
          </div>
          <Link to="/contact" className={linkClasses}>
            Contact
          </Link>
        </nav>

        {/* Icons and Search */}
        <div className="flex items-center space-x-4">
          {/* Search Bar (Visible in all views) */}
          <div className="flex items-center bg-gray-200 rounded-full px-3 py-1">
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent outline-none text-sm text-black px-2"
            />
            <FaSearch className="text-black" />
          </div>

          {/* User Icon */}
          <div
            className={`flex items-center space-x-2 cursor-pointer ${linkClasses}`}
            onClick={() => setLoginModalOpen(true)}
          >
            <FaUser className="w-6 h-6" />
          </div>

          {/* Hamburger Menu */}
          <button
            className="lg:hidden"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <FaBars className={`w-8 h-8 text-black ${linkClasses}`} />
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
                { name: "About", link: "/about" },
                { name: "Products", link: "/products" },
                {
                  name: "Catalogue",
                  link: "",
                  onClick: () => setCatalogueDropdownOpen(!isCatalogueDropdownOpen),
                },
                { name: "Contact", link: "/contact" },
              ].map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.link}
                    className="block text-lg text-white hover:text-gray-400"
                    onClick={item.onClick}
                  >
                    {item.name}
                  </Link>
                  {item.name === "Catalogue" && isCatalogueDropdownOpen && (
                    <a
                      href="/catalog/elxon-catalogue .pdf"
                      download
                      className="block text-sm text-gray-300 hover:text-white pl-4"
                    >
                      Download Catalogue
                    </a>
                  )}
                </div>
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
