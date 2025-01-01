import React, { useState, useEffect } from 'react';

function Popup() {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    // Close the popup after 5 seconds
    const timer = setTimeout(() => {
      setIsOpen(false);
    }, 20000);

    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, []);

  const closePopup = () => {
    setIsOpen(false);
  };

  return (
    isOpen && (
      <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
          <h2 className="text-3xl font-semibold text-center text-[#002244] mb-4">
            Website Under Development
          </h2>
          <p className="text-lg text-center text-gray-700 mb-6">
            We're working hard to bring you a great experience. Our website will be fully launched by the end of January 2025.
          </p>
          <div className="text-center">
            <button
              onClick={closePopup}
              className="px-6 py-3 bg-[#002244] text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors"
            >
              Got It!
            </button>
          </div>
        </div>
      </div>
    )
  );
}

export default Popup;
