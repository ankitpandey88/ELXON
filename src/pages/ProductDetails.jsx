

// import React from "react";
// import { useParams } from "react-router-dom";

// // Sample products data (same as in ProductPage)
// const products = [
//     { id: 1, name: "Product 1", price: 500, image: "/product/p1.avif", description: "This is Product 1" },
//     { id: 2, name: "Product 2", price: 1500, image: "/product/p2.avif", description: "This is Product 2" },
//     { id: 3, name: "Product 3", price: 2000, image: "/product/p3.avif", description: "This is Product 3" },
//     { id: 4, name: "Product 4", price: 750, image: "/product/p4.avif", description: "This is Product 4" },
//     { id: 5, name: "Product 1", price: 500, image: "/product/p1.avif", description: "This is Product 1" },
//     { id: 6, name: "Product 2", price: 1500, image: "/product/p2.avif", description: "This is Product 2" },
//     { id: 7, name: "Product 3", price: 2000, image: "/product/p3.avif", description: "This is Product 3" },
//     { id: 8, name: "Product 4", price: 750, image: "/product/p4.avif", description: "This is Product 4" },
// ];

// const ProductDetailPage = () => {
//   const { id } = useParams();  // Get the product ID from the URL
//   const product = products.find((prod) => prod.id === parseInt(id));  // Find the product by ID

//   // If the product doesn't exist, show a loading message or error
//   if (!product) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="bg-gray-100 min-h-screen p-6">
//       <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
//         <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
//         <div className="flex">
//           <img
//             src={product.image}
//             alt={product.name}
//             className="w-96 h-96 object-cover rounded-md mb-4"
//           />
//           <div className="ml-8">
//             <p className="text-lg font-semibold text-gray-800 mb-4">{product.description}</p>
//             <p className="text-xl text-green-500 font-bold mb-6">Rs. {product.price}</p>
//             <button
//               onClick={() => alert("Added to Cart")}
//               className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 mb-4"
//             >
//               Add to Cart
//             </button>
//             <button
//               onClick={() => alert("Proceed to Checkout")}
//               className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600"
//             >
//               Buy Now
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetailPage;

import React from "react";
import { useParams } from "react-router-dom";

// Sample products data (same as in ProductPage)
const products = [
  { id: 1, name: "Product 1", price: 500, image: "/product/p1.avif", description: "This is Product 1" },
  { id: 2, name: "Product 2", price: 1500, image: "/product/p2.avif", description: "This is Product 2" },
  { id: 3, name: "Product 3", price: 2000, image: "/product/p3.avif", description: "This is Product 3" },
  { id: 4, name: "Product 4", price: 750, image: "/product/p4.avif", description: "This is Product 4" },
];

const ProductDetailPage = () => {
  const { id } = useParams();  // Get the product ID from the URL
  const product = products.find((prod) => prod.id === parseInt(id));  // Find the product by ID

  // If the product doesn't exist, show a loading message or error
  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center p-6">
      <div className="max-w-6xl bg-white p-8 rounded-lg shadow-lg transform transition-all hover:scale-105">
        <div className="flex flex-col md:flex-row items-center md:items-start">
          {/* Product Image */}
          <div className="w-full md:w-1/2">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-auto object-cover rounded-lg shadow-md"
            />
          </div>

          {/* Product Details */}
          <div className="mt-6 md:mt-0 md:ml-8 w-full md:w-1/2">
            <h1 className="text-4xl font-semibold text-gray-800 mb-4">{product.name}</h1>
            <p className="text-lg text-gray-600 mb-4">{product.description}</p>
            <p className="text-2xl font-bold text-green-600 mb-6">Rs. {product.price}</p>

            <div className="flex gap-4">
              <button
                onClick={() => alert("Added to Cart")}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transform transition-all"
              >
                Add to Cart
              </button>
              <button
                onClick={() => alert("Proceed to Checkout")}
                className="px-8 bg-[#002244] text-white text-lg font-semibold rounded-lg hover:bg-blue-800 transition-colors"
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
