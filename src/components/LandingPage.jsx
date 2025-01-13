


// import React from 'react';
// import { motion } from 'framer-motion';

// function LandingPage() {
//   return (
//     <section
//       className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
//       style={{ backgroundImage: "url('/image/landing1.jpg')" }}
//       id="home"
//       aria-label="home"
//     >
//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black bg-opacity-30"></div>

//       {/* Main Content */}
//       <div className="relative z-10 text-center p-10">
//         {/* Hero Section Animation */}
//         <motion.div
//           initial={{ opacity: 0, y: -50 }} // Start off-screen and fade in
//           animate={{ opacity: 1, y: 0 }} // Animate to visible
//           transition={{ duration: 1, delay: 0.3 }} // Timing for the animation
//           className="bg-cover bg-center h-[80vh] relative text-white flex flex-col items-center justify-center"
//         >
//           {/* Main Heading */}
//           <motion.h1
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 1, delay: 0.6 }}
//             className="text-5xl bg-black bg-opacity-70 p-8 text-center rounded-lg font-extrabold leading-tight"
//           >
//             ELXON - Lighting Automation and Control Solution
//           </motion.h1>

//           {/* Subheading */}
//           <motion.p
//             initial={{ opacity: 0, x: 50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 1, delay: 0.9 }}
//             className="mt-4 text-xl font-medium bg-black bg-opacity-70 p-4 text-center rounded-lg"
//           >
//             INDIA’S FINEST RANGE OF LIGHTING AUTOMATION, SMART ELECTRICAL APPLIANCES & SOLAR LIGHTINGS
//           </motion.p>

         
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// export default LandingPage;


import React from 'react';
import { motion } from 'framer-motion';

function LandingPage() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/image/landing1.jpg')" }}
      id="home"
      aria-label="home"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>

      {/* Main Content */}
      <div className="relative z-10 text-center p-10">
        {/* Hero Section Animation */}
        <motion.div
          initial={{ opacity: 0, y: -50 }} // Start off-screen and fade in
          animate={{ opacity: 1, y: 0 }} // Animate to visible
          transition={{ duration: 1, delay: 0.3 }} // Timing for the animation
          className="bg-cover bg-center h-[80vh] relative flex flex-col items-center justify-center"
        >
          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-5xl bg-black bg-opacity-70 p-8 text-center rounded-lg font-extrabold leading-tight"
            style={{
              color: "white",
              textShadow: `
                0px 0px 10px red,
                0px 0px 20px red,
                0px 0px 40px red,
                0px 0px 80px red
              `,
            }}
          >
            ELXON - Lighting Automation and Control Solution
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="mt-4 text-xl font-medium bg-black bg-opacity-70 p-4 text-center rounded-lg"
            style={{
              color: "white",
              textShadow: `
                0px 0px 10px red,
                0px 0px 20px red,
                0px 0px 40px red,
                0px 0px 80px red
              `,
            }}
          >
            INDIA’S FINEST RANGE OF LIGHTING AUTOMATION, SMART ELECTRICAL APPLIANCES & SOLAR LIGHTINGS
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

export default LandingPage;
