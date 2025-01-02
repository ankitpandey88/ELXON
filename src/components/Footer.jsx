// import React from 'react';
// import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';

// function Footer() {
//   return (
//     <footer className="bg-[#002244] text-white py-8">
//       <div className="container mx-auto px-6 text-center md:text-left">
//         <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
//           {/* Company Info */}
//           <div>
//             <h1 className="text-3xl font-bold">ELXON</h1>
//             <p className="text-sm mt-2">Lighting Automation and Control Solutions</p>
//           </div>

//           {/* Contact Info */}
//           <div className="flex flex-col items-center md:items-start space-y-2">
//             <div className="flex items-center space-x-2">
//               <AiOutlineMail className="text-xl" />
//               <span className="text-sm">info@elxon.in</span>
//             </div>
//             <div className="flex items-center space-x-2">
//               <AiOutlinePhone className="text-xl" />
//               <span className="text-sm">+91 98737 19245</span>
//             </div>
//           </div>
//         </div>

//         {/* Copyright Section */}
//         <div className="mt-6 text-sm">
//           <p>&copy; {new Date().getFullYear()} ELXON. All Rights Reserved.</p>
//         </div>
//       </div>
//     </footer>
//   );
// }

// export default Footer;


// import React from 'react';
// import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';

// function Footer() {
//   return (
//     <footer className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-10">
//       <div className="container mx-auto px-6 flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
        
//         {/* Company Info Section */}
//         <div className="text-center lg:text-left space-y-2">
//           <h1 className="text-4xl font-bold text-white">ELXON</h1>
//           <p className="text-lg font-semibold text-gray-300">Lighting Automation and Control Solutions</p>
//         </div>

//         {/* Contact Section */}
//         <div className="flex flex-col lg:flex-row justify-center items-center space-y-4 lg:space-y-0 lg:space-x-8">
//           <div className="flex items-center space-x-2">
//             <AiOutlineMail className="text-2xl" />
//             <span className="text-lg">info@elxon.in</span>
//           </div>
//           <div className="flex items-center space-x-2">
//             <AiOutlinePhone className="text-2xl" />
//             <span className="text-lg">+91 98737 19245</span>
//           </div>
//         </div>
//       </div>

//       {/* Copyright Section */}
//       <div className="border-t border-gray-300 mt-8 pt-4 text-center">
//         <p className="text-sm text-gray-200">
//           &copy; {new Date().getFullYear()} ELXON. All Rights Reserved.
//         </p>
//       </div>
//     </footer>
//   );
// }

// export default Footer;

import React from 'react';
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
        
        {/* Company Info Section */}
        <div className="text-center lg:text-left space-y-2">
          <h1 className="text-4xl font-bold text-white">ELXON</h1>
          <p className="text-lg font-semibold text-gray-300">Lighting Automation and Control Solutions</p>
        </div>

        {/* Contact Section */}
        <div className="flex flex-col lg:flex-row justify-center items-center space-y-4 lg:space-y-0 lg:space-x-8">
          <div className="flex items-center space-x-2">
            <AiOutlineMail className="text-2xl" />
            <span className="text-lg">info@elxon.in</span>
          </div>
          <div className="flex items-center space-x-2">
            <AiOutlinePhone className="text-2xl" />
            <span className="text-lg">+91 98737 19245</span>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-gray-300 mt-8 pt-4 text-center">
        <p className="text-sm text-gray-200">
          &copy; {new Date().getFullYear()} ELXON. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
