

// import React from "react";
// import Footer from "../components/Footer";

// const ContactMain = () => {
//   return (
//     <div>
//       <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800">
//       <div className="w-full max-w-6xl bg-opacity-90 rounded-lg shadow-2xl lg:flex lg:gap-8 overflow-hidden border border-gray-700">
//         {/* Left Section */}
//         <div className="lg:w-1/2 p-8 space-y-6 bg-gradient-to-b from-gray-800 to-gray-900 text-white">
//           <h2 className="text-4xl font-bold text-red-8500">Contact Us</h2>
//           <p className="text-gray-300">We’d love to hear from you</p>
//           <div className="space-y-6">
//             <div className="flex items-start gap-4">
//               <div className="text-blue-400 text-2xl">
//                 <i className="fas fa-map-marker-alt"></i>
//               </div>
//               <div>
//                 <h4 className="font-bold">Location:</h4>
//                 <p>A-1, 2D, Sector 10, Noida, U.P - 201301</p>
//               </div>
//             </div>
//             <div className="flex items-start gap-4">
//               <div className="text-blue-400 text-2xl">
//                 <i className="fas fa-envelope"></i>
//               </div>
//               <div>
//                 <h4 className="font-bold">Email:</h4>
//                 <p>  info@elxon.in
//                 </p>
//               </div>
//             </div>
//             <div className="flex items-start gap-4">
//               <div className="text-blue-400 text-2xl">
//                 <i className="fas fa-phone"></i>
//               </div>
//               <div>
//                 <h4 className="font-bold">Call:</h4>
//                 <p> 7518588115   | 98737 19245</p>
//               </div>
//             </div>
//           </div>
//           <div className="rounded-lg overflow-hidden shadow-lg border border-gray-600">
//             <iframe
//               title="Google Map"
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.83955832057!2d77.06889950413288!3d28.52728283766208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce34c472e862b%3A0x24e6c73b5f2b4829!2sNoida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1633037388709!5m2!1sen!2sin"
//               className="w-full h-64 border-0"
//               allowFullScreen
//               loading="lazy"
//             ></iframe>
//           </div>
//         </div>

//         {/* Right Section */}
//         <div className="lg:w-1/2 p-8 bg-gradient-to-t from-gray-800 to-gray-900 text-white">
//           <h3 className="text-3xl font-bold text-white">
//           Partner with Top Electric Experts
//           </h3>
//           <p className="text-gray-400 mt-2">We’re just a click away.</p>
//           <form className="space-y-6 mt-6">
//             <div>
//               <label className="block font-semibold">Name</label>
//               <input
//                 type="text"
//                 placeholder="Enter your name"
//                 className="w-full px-4 py-2 rounded-lg bg-gray-700 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
//               />
//             </div>
//             <div>
//               <label className="block font-semibold">Phone</label>
//               <input
//                 type="tel"
//                 placeholder="Enter Mobile Number"
//                 className="w-full px-4 py-2 rounded-lg bg-gray-700 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
//               />
//             </div>
//             <div>
//               <label className="block font-semibold">Email Address</label>
//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 className="w-full px-4 py-2 rounded-lg bg-gray-700 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
//               />
//             </div>
//             <div>
//               <label className="block font-semibold">Description</label>
//               <textarea
//                 placeholder="Write a message within 200 characters"
//                 className="w-full px-4 py-2 rounded-lg bg-gray-700 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
//                 maxLength={200}
//               ></textarea>
//             </div>
//             <div className="flex items-center space-x-3">
//               <input type="checkbox" className="h-5 w-5" />
//               <span className="text-gray-400">I’m not a robot</span>
//             </div>
//             <button
//               type="submit"
//               className="w-full bg-red-950 text-white py-2 px-4 rounded-lg font-bold hover:bg-red-900 transition duration-300"
//             >
//               Submit
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//     <Footer/>
//     </div>
//   );
// };

// export default ContactMain;


import React, { useState } from "react";
import emailjs from "emailjs-com";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactMain = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    description: "",
  });

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Validation function
  const validateForm = () => {
    const { name, phone, email, description } = formData;

    if (!name.trim()) {
      toast.error("Name is required!");
      return false;
    }
    if (!/^\d{10}$/.test(phone)) {
      toast.error("Phone must be a 10-digit number!");
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error("Invalid email address!");
      return false;
    }
    if (!description.trim()) {
      toast.error("Description is required!");
      return false;
    }
    return true;
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the form
    if (!validateForm()) {
      return;
    }

    // Send email using EmailJS
    emailjs
      .sendForm(
        "service_fgikvpd", // Replace with your EmailJS Service ID
        "template_kt0peor", // Replace with your EmailJS Template ID
        e.target,
        "6XVn1CivuFdNLLIJs" // Replace with your EmailJS User ID
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Your message has been sent successfully!");
        },
        (error) => {
          console.log(error.text);
          toast.error("Oops! Something went wrong. Please try again.");
        }
      );

    // Reset form after submission
    setFormData({
      name: "",
      phone: "",
      email: "",
      description: "",
    });
  };

  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800">
        <div className="w-full max-w-6xl bg-opacity-90 rounded-lg shadow-2xl lg:flex lg:gap-8 overflow-hidden border border-gray-700">
          {/* Left Section */}
          <div className="lg:w-1/2 p-8 space-y-6 bg-gradient-to-b from-gray-800 to-gray-900 text-white">
            <h2 className="text-4xl font-bold text-red-8500">Contact Us</h2>
            <p className="text-gray-300">We’d love to hear from you</p>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="text-blue-400 text-2xl">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div>
                  <h4 className="font-bold">Location:</h4>
                  <p>A-1, 2D, Sector 10, Noida, U.P - 201301</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-blue-400 text-2xl">
                  <i className="fas fa-envelope"></i>
                </div>
                <div>
                  <h4 className="font-bold">Email:</h4>
                  <p>info@elxon.in</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-blue-400 text-2xl">
                  <i className="fas fa-phone"></i>
                </div>
                <div>
                  <h4 className="font-bold">Call:</h4>
                  <p>7518588115 | 98737 19245</p>
                </div>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg border border-gray-600">
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=..."
                className="w-full h-64 border-0"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* Right Section */}
          <div className="lg:w-1/2 p-8 bg-gradient-to-t from-gray-800 to-gray-900 text-white">
            <h3 className="text-3xl font-bold text-white">Partner with Top Electric Experts</h3>
            <p className="text-gray-400 mt-2">We’re just a click away.</p>
            <form onSubmit={handleSubmit} className="space-y-6 mt-6">
              <div>
                <label className="block font-semibold">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your name"
                  className="w-full px-4 py-2 rounded-lg bg-gray-700 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div>
                <label className="block font-semibold">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Enter Mobile Number"
                  className="w-full px-4 py-2 rounded-lg bg-gray-700 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div>
                <label className="block font-semibold">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 rounded-lg bg-gray-700 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div>
                <label className="block font-semibold">Description</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Write a message within 200 characters"
                  maxLength={200}
                  className="w-full px-4 py-2 rounded-lg bg-gray-700 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                ></textarea>
              </div>
              <div className="flex items-center space-x-3">
                <input type="checkbox" className="h-5 w-5" />
                <span className="text-gray-400">I’m not a robot</span>
              </div>
              <button
                type="submit"
                className="w-full bg-red-950 text-white py-2 px-4 rounded-lg font-bold hover:bg-red-900 transition duration-300"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Toast Notifications */}
      <ToastContainer />
    </div>
  );
};

export default ContactMain;
