

// import React from "react";

// const ShowCase = () => {
//   const items = [
//     {
//       image: "/image/show1.jpg",
//       alt: "Electric Appliance 1",
//       title: "3D and Circular Light",
//       description: "Upgrade your viewing experience with a 4K Smart LED TV.",
   
//     },
//     {
//       image: "/image/show2.avif",
//       alt: "Electric Appliance 2",
//       title: " 3D Universe Crystal Ball Night",
//       description: "Desidiya Unique 3D Universe Crystal Ball Night.",
//       buttonText: "Shop Now",
//     },
//     {
//       image: "/image/show3.jpg",
//       alt: "Electric Appliance 3",
//       title: " Diamond Hanging Pendant Light",
//       description: " Groeien 3 Lights Cluster Chandelier Diamond Hanging Pendant Light With Braided Cord",
     
//     },
//     {
//       image: "/image/show4.jpg",
//       alt: "Electric Appliance 4",
//       title: "Floret Wall light",
//       description: "The Floret Wall Light boasts a contemporary design that adds a touch of elegance to any room",
     
//     },
//   ];

//   return (
//     <>
//       {/* Main Content */}
//       <div className="px-2 pb-1 flex flex-col md:flex-row gap-x-2">
//         <div className="relative h-96 w-full md:w-[70%]">
//           <div
//             className="relative h-full w-full bg-cover bg-center shadow-md flex flex-col justify-between"
//             style={{ backgroundImage: `url(${items[0].image})` }}
//           >
//             <div className="absolute bottom-0 bg-black bg-opacity-50 p-4 w-full text-white">
//               <h3 className="text-xl font-semibold">{items[0].title}</h3>
//               <p className="mt-2">{items[0].description}</p>
              
//             </div>
//           </div>
//         </div>
//         <div className="relative h-96 w-full md:w-[30%]">
//           <img
//             src={items[1].image}
//             alt={items[1].alt}
//             className="shadow-md object-cover w-full h-96"
//           />
//           <div className="absolute bottom-0 bg-black bg-opacity-50 p-4 w-full text-white">
//             <h3 className="text-xl font-semibold">{items[1].title}</h3>
//             <p className="mt-2">{items[1].description}</p>
            
//           </div>
//         </div>
//       </div>

//       <div className="px-2 pb-1 pt-1 flex flex-col md:flex-row gap-x-2">
//         <div className="relative h-96 w-full md:w-[30%]">
//           <img
//             src={items[2].image}
//             alt={items[2].alt}
//             className="shadow-md object-cover w-full h-96"
//           />
//           <div className="absolute bottom-0 bg-black bg-opacity-50 p-4 w-full text-white">
//             <h3 className="text-xl font-semibold">{items[2].title}</h3>
//             <p className="mt-2">{items[2].description}</p>
           
//           </div>
//         </div>

//         <div className="relative h-96 w-full md:w-[70%]">
//           <div
//             className="relative h-full w-full bg-cover bg-center shadow-md flex flex-col justify-between"
//             style={{ backgroundImage: `url(${items[3].image})` }}
//           >
//             <div className="absolute bottom-0 bg-black bg-opacity-50 p-4 w-full text-white">
//               <h3 className="text-xl font-semibold">{items[3].title}</h3>
//               <p className="mt-2">{items[3].description}</p>
             
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ShowCase;


import React from "react";

const ShowCase = () => {
  const items = [
    {
      image: "/image/show1.jpg",
      alt: "Electric Appliance 1",
      title: "3D and Circular Light",
      description: "Upgrade your viewing experience with a 4K Smart LED TV.",
    },
    {
      image: "/image/show2.avif",
      alt: "Electric Appliance 2",
      title: "3D Universe Crystal Ball Night",
      description: "Desidiya Unique 3D Universe Crystal Ball Night.",
      buttonText: "Shop Now",
    },
    {
      image: "/image/show3.jpg",
      alt: "Electric Appliance 3",
      title: "Diamond Hanging Pendant Light",
      description:
        "Groeien 3 Lights Cluster Chandelier Diamond Hanging Pendant Light With Braided Cord",
    },
    {
      image: "/image/show4.jpg",
      alt: "Electric Appliance 4",
      title: "Floret Wall light",
      description:
        "The Floret Wall Light boasts a contemporary design that adds a touch of elegance to any room",
    },
  ];

  return (
    <>
      {/* Title Section */}
      <div className="text-center bg-gray-900 py-4">
        <h1 className="text-5xl font-bold glow-text">Discover Unique Lighting and Decor Options</h1>
      </div>

      {/* Main Content */}
      <div className="px-2 pb-1 flex flex-col md:flex-row gap-x-2">
        <div className="relative h-96 w-full md:w-[70%]">
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
        <div className="relative h-96 w-full md:w-[30%]">
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
        <div className="relative h-96 w-full md:w-[30%]">
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

        <div className="relative h-96 w-full md:w-[70%]">
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
    </>
  );
};

export default ShowCase;
