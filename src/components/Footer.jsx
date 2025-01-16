

// import React from 'react';
// import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';

// function Footer() {
//   return (
//     <footer className="bg-gray-900 text-white py-10">
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
//             <span className="text-lg">+91 75185 88115</span>
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
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 text-black py-8">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
        {/* Decorative Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-red-100 to-transparent opacity-20 pointer-events-none" />

        {/* Company Info Section */}
        <div className="text-center lg:text-left space-y-2">
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-black via-gray-800 to-red-800">
            ELXON
          </h1>
          <p className="text-lg font-medium text-gray-700">
            Lighting Automation and Control Solutions
          </p>
        </div>

        {/* Contact Section */}
        <div className="flex flex-col lg:flex-row justify-center items-center space-y-4 lg:space-y-0 lg:space-x-6">
          {/* Email Link */}
          <a
            href="mailto:info@elxon.in"
            className="flex items-center space-x-3 group"
          >
            <AiOutlineMail className="text-3xl text-black group-hover:text-red-800 transition-transform transform group-hover:scale-110 duration-300" />
            <span className="text-lg font-semibold group-hover:text-red-800 transition-colors duration-300">
              info@elxon.in
            </span>
          </a>

          {/* Phone Link */}
          <a
            href="tel:+917518588115"
            className="flex items-center space-x-3 group"
          >
            <AiOutlinePhone className="text-3xl text-black group-hover:text-red-800 transition-transform transform group-hover:scale-110 duration-300" />
            <span className="text-lg font-semibold group-hover:text-red-800 transition-colors duration-300">
              +91 75185 88115
            </span>
          </a>
        </div>

        {/* Social Media Section */}
        <div className="flex space-x-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 transition-transform transform hover:scale-125 duration-300 text-3xl"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 hover:text-pink-700 transition-transform transform hover:scale-125 duration-300 text-3xl"
          >
            <FaInstagram />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-600 transition-transform transform hover:scale-125 duration-300 text-3xl"
          >
            <FaTwitter />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:text-blue-900 transition-transform transform hover:scale-125 duration-300 text-3xl"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>

      {/* Decorative Border */}
      <div className="mt-6 h-1 bg-gradient-to-r from-black via-red-800 to-black rounded-full shadow-lg"></div>

      {/* Copyright Section */}
      <div className="mt-6 pt-2 text-center">
        <p className="text-sm font-medium text-gray-800">
          &copy; {new Date().getFullYear()} ELXON. All Rights Reserved.
        </p>
      </div>


    </footer>
  );
}

export default Footer;
