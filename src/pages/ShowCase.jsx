

import React from "react";
import { useNavigate } from "react-router-dom";

const ShowCase = () => {
  const navigate = useNavigate();

  const items = [
    {
      id: 1,
      image: "/image/show1.jpg",
      alt: "Electric Appliance 1",
      title: "3D and Circular Light",
      description: "Upgrade your viewing experience with a 4K Smart LED TV.",
      price: "1499",
    },
    {
      id: 2,
      image: "/image/show2.avif",
      alt: "Electric Appliance 2",
      title: "3D Universe Crystal Ball Night",
      description: "Desidiya Unique 3D Universe Crystal Ball Night.",
      price: "1799",
    },
    {
      id: 3,
      image: "/image/show3.jpg",
      alt: "Electric Appliance 3",
      title: "Diamond Hanging Pendant Light",
      description: "Groeien 3 Lights Cluster Chandelier Diamond Hanging Pendant Light With Braided Cord",
      price: "1999",
    },
    {
      id: 4,
      image: "/image/show4.jpg",
      alt: "Electric Appliance 4",
      title: "Floret Wall light",
      description: "The Floret Wall Light boasts a contemporary design that adds a touch of elegance to any room",
      price: "999",
    },
  ];

  const handleProductClick = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    < div className="bg-gradient-to-r from-gray-900 via-gray-550 to-black py-4 px-8">
       <h1 className="text-center  text-5xl glow-text font-bold mb-16 text-white">
       Luminary Lights
      </h1>
      <div className="px-2 pb-1 flex flex-col md:flex-row gap-x-2">
        
        <div
          className="relative h-96 w-full md:w-[70%] cursor-pointer"
          onClick={() => handleProductClick(items[0].id)}
        >
          <div
            className="relative h-full w-full bg-cover bg-center shadow-md flex flex-col justify-between"
            style={{ backgroundImage: `url(${items[0].image})` }}
          >
            <div className="absolute bottom-0 bg-black bg-opacity-50 p-4 w-full text-white">
              <h3 className="text-xl font-semibold">{items[0].title}</h3>
              <p className="mt-2">{items[0].description}</p>
            </div>
          </div>
        </div>
        <div
          className="relative h-96 w-full md:w-[30%] cursor-pointer"
          onClick={() => handleProductClick(items[1].id)}
        >
          <img
            src={items[1].image}
            alt={items[1].alt}
            className="shadow-md object-cover w-full h-96"
          />
          <div className="absolute bottom-0 bg-black bg-opacity-50 p-4 w-full text-white">
            <h3 className="text-xl font-semibold">{items[1].title}</h3>
            <p className="mt-2">{items[1].description}</p>
          </div>
        </div>
      </div>
      <div className="px-2 pb-1 pt-1 flex flex-col md:flex-row gap-x-2">
        <div
          className="relative h-96 w-full md:w-[30%] cursor-pointer"
          onClick={() => handleProductClick(items[2].id)}
        >
          <img
            src={items[2].image}
            alt={items[2].alt}
            className="shadow-md object-cover w-full h-96"
          />
          <div className="absolute bottom-0 bg-black bg-opacity-50 p-4 w-full text-white">
            <h3 className="text-xl font-semibold">{items[2].title}</h3>
            <p className="mt-2">{items[2].description}</p>
          </div>
        </div>
        <div
          className="relative h-96 w-full md:w-[70%] cursor-pointer"
          onClick={() => handleProductClick(items[3].id)}
        >
          <div
            className="relative h-full w-full bg-cover bg-center shadow-md flex flex-col justify-between"
            style={{ backgroundImage: `url(${items[3].image})` }}
          >
            <div className="absolute bottom-0 bg-black bg-opacity-50 p-4 w-full text-white">
              <h3 className="text-xl font-semibold">{items[3].title}</h3>
              <p className="mt-2">{items[3].description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowCase;
      