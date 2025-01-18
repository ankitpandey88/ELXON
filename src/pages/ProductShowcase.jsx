

import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import Footer from "../components/Footer";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const items = [
    {
      id: 1,
      image: "/image/show1.jpg",
      title: "3D and Circular Light",
      description: "Upgrade your viewing experience with a 4K Smart LED TV.",
      price: "₹1299",
      rating: 4.5,
    },
    {
      id: 2,
      image: "/image/show2.avif",
      title: "3D Universe Crystal Ball Night",
      description: "Desidiya Unique 3D Universe Crystal Ball Night.",
      price: "₹1499",
      rating: 4.0,
    },
    {
      id: 3,
      image: "/image/show3.jpg",
      title: "Diamond Hanging Pendant Light",
      description: "Groeien 3 Lights Cluster Chandelier Diamond Hanging Pendant Light With Braided Cord",
      price: "₹1799",
      rating: 4.7,
    },
    {
      id: 4,
      image: "/image/show4.jpg",
      title: "Floret Wall light",
      description: "The Floret Wall Light boasts a contemporary design that adds a touch of elegance to any room",
      price: "₹1999",
      rating: 4.3,
    },
  ];

  const product = items.find((item) => item.id === parseInt(id));

  if (!product) return <p>Product not found!</p>;

  const handleBuyNow = () => {
    const message = `Hello! I am interested in purchasing the following product:\n\n*${product.title}*\nPrice: ${product.price}\nDescription: ${product.description}`;
    const whatsappUrl = `https://wa.me/8858484220?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
   <div>
     <div className="bg-black text-white min-h-screen flex flex-col items-center p-6">
      {/* Back Button */}
      <div className="w-full flex justify-between items-center mb-4">
        <button
          onClick={() => navigate("/")}
          className="flex items-center text-gray-400 hover:text-yellow-400"
        >
          <FaArrowLeft className="mr-2" />
          Back
        </button>
      </div>

      {/* Product Details Container */}
      <div className="w-full max-w-4xl shadow-lg rounded-lg overflow-hidden bg-gray-900">
        {/* Image Section */}
        <div className="relative w-full h-80">
          <img
            src={product.image}
            alt={product.title}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Details Section */}
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
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

          {/* Buy Now Button */}
          <button
            onClick={handleBuyNow}
            className="w-full bg-yellow-500 text-black font-semibold py-2 rounded-lg hover:bg-yellow-600"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
    <Footer/>
   </div>
  );
};

export default ProductDetail;
