// src/components/CurrentPageBar.js
import React from 'react';
import { FaInfoCircle } from 'react-icons/fa';

const CurrentPageBar = ({ pageTitle }) => {
  return (
    <div className="bg-gradient-to-b from-black bg-zinc-900 text-white p-4 border-b border-gray-700 font-dm-sans">
      <div className="flex items-center justify-between">
        {/* Page Title with Horizontal Line */}
        <div className="flex items-center space-x-4">
          <div className="border-l-2 border-rose-500 h-14 ml-5"></div> {/* Horizontal Line */}
          <div>
            <h1 className="text-2xl font-normal">{pageTitle}</h1>
            <p className="text-gray-400">Home / User Dashboard</p>
          </div>
        </div>

        {/* Tell Us Section */}
        <div className="flex items-center space-x-2 cursor-pointer hover:text-indigo-300 transition-colors">
          <FaInfoCircle className="text-2xl" />
          <span className="text-lg font-medium">Tell Us</span>
        </div>
      </div>
    </div>
  );
};

export default CurrentPageBar;
