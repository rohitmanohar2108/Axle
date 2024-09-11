// src/components/Dashboard.js
import React from "react";
import {
  FaGraduationCap,
  FaTachometerAlt,
  FaCalendarAlt,
} from "react-icons/fa";
import Header from "./Header"; // Import the Header component

const Dashboard = () => {
  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside className="w-64 bg-gray-900 text-white p-4">
          <h2 className="text-xl font-bold mb-4">Navigation</h2>
          <ul>
            <li>
              <a
                href="#overview"
                className="block py-2 px-4 hover:bg-gray-700 rounded"
              >
                Overview
              </a>
            </li>
            <li>
              <a
                href="#students"
                className="block py-2 px-4 hover:bg-gray-700 rounded"
              >
                Students
              </a>
            </li>
            <li>
              <a
                href="#faculty"
                className="block py-2 px-4 hover:bg-gray-700 rounded"
              >
                Faculty
              </a>
            </li>
            <li>
              <a
                href="#courses"
                className="block py-2 px-4 hover:bg-gray-700 rounded"
              >
                Courses
              </a>
            </li>
            <li>
              <a
                href="#events"
                className="block py-2 px-4 hover:bg-gray-700 rounded"
              >
                Events
              </a>
            </li>
          </ul>
        </aside>

        {/* Content Area */}
        <main className="flex-1 p-6 bg-zinc-900">
          

          {/* Major Credits, CGPA, and Semester Boxes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Major Credits Box */}
            <div className="bg-gray-800 text-white p-4 rounded-lg shadow-lg flex items-center space-x-4">
              <FaGraduationCap className="text-3xl" />
              <div>
                <p className="text-4xl font-bold">120</p> {/* Example value */}
                <h2 className="text-lg font-semibold mb-2">Major Credits</h2>
              </div>
            </div>

            {/* Major CGPA Box */}
            <div className="bg-gray-800 text-white p-4 rounded-lg shadow-lg flex items-center space-x-4">
              <FaTachometerAlt className="text-3xl" />
              <div>
                <p className="text-4xl font-bold">3.75</p> {/* Example value */}
                <h2 className="text-lg font-semibold mb-2">Major CGPA</h2>
              </div>
            </div>

            {/* Semester Box */}
            <div className="bg-gray-800 text-white p-4 rounded-lg shadow-lg flex items-center space-x-4">
              <FaCalendarAlt className="text-3xl" />
              <div>
                <p className="text-4xl font-bold"> 4th</p> {/* Example value */}
                <h2 className="text-lg font-semibold mb-2">Current Semester</h2>
              </div>
            </div>
          </div>

          {/* Additional Content */}
          {/* Add any other content or components you need here */}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
