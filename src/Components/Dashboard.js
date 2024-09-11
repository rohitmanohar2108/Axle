// src/components/Dashboard.js
import React from "react";
import {
  FaGraduationCap,
  FaTachometerAlt,
  FaCalendarAlt,
} from "react-icons/fa";
import Header from "./Header"; // Import the Header component
import CurrentPageBar from "./CurrentPageBar";

const Dashboard = () => {
  return (
    <div className="flex flex-col bg-black min-h-screen">
      {/* Header */}
      <Header />
      <CurrentPageBar pageTitle="Dashboard" />

      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside className="bg-gradient-to-r from-black w-64 bg-zinc-900 text-white p-4">
          <h2 className=" font-bold  text-xs mb-4 ml-3 mt-2 text-rose-500 uppercase">
            Quick Links
          </h2>
          <ul>
            <li>
              <a
                href="#overview"
                className="block py-2 px-6 hover:bg-rose-600 rounded-full text-sm"
              >
                Overview
              </a>
            </li>
            <li>
              <a
                href="#students"
                className="block py-2 px-6 hover:bg-rose-600 rounded-full text-sm"
              >
                Students
              </a>
            </li>
            <li>
              <a
                href="#faculty"
                className="block py-2 px-6 hover:bg-rose-600 rounded-full text-sm"
              >
                Faculty
              </a>
            </li>
            <li>
              <a
                href="#courses"
                className="block py-2 px-6 hover:bg-rose-600 rounded-full text-sm"
              >
                Courses
              </a>
            </li>
            <li>
              <a
                href="#events"
                className="block py-2 px-6 hover:bg-rose-600 rounded-full text-sm"
              >
                Events
              </a>
            </li>
          </ul>
          <h2 className=" font-bold  text-xs  ml-3 mt-11 text-rose-500 uppercase">
            module Designer
          </h2>

          <p className="block py-2 px-6 mt-3 hover:bg-rose-600 rounded-full text-sm">
            Rohit Manohar
          </p>
          <p className="block py-2 px-6  hover:bg-rose-600 rounded-full text-sm">
            Ansh Manohar
          </p>

          <h2 className=" font-bold  text-xs  ml-3 mt-11 text-rose-500 uppercase">
            Support
          </h2>
          <p className="block py-2 px-6 mt-3 hover:bg-rose-600 rounded-full text-sm">
            rohit@gmail.com
          </p>
        </aside>

        {/* Content Area */}
        <main className="flex-1 p-6 bg-zinc-800">
          {/* Major Credits, CGPA, and Semester Boxes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Major Credits Box */}
            <div className="bg-zinc-900 text-white p-4 rounded-none shadow-lg flex items-center space-x-4">
              <div className="p-2 border-2 border-gray-600 rounded-none flex items-center justify-center">
                <FaGraduationCap className="text-3xl" />
              </div>
              <div>
                <p className="text-4xl font-bold">120</p> {/* Example value */}
                <h2 className=" font-sm mb-2 text-gray-300">Major Credits</h2>
              </div>
            </div>

            {/* Major CGPA Box */}
            <div className="bg-zinc-900 text-white p-4 rounded-none shadow-lg flex items-center space-x-4">
              <div className="p-2 border-2 border-gray-600 rounded-none flex items-center justify-center">
                <FaTachometerAlt className="text-3xl" />
              </div>
              <div>
                <p className="text-4xl font-bold">3.75</p> {/* Example value */}
                <h2 className=" font-sm mb-2 text-gray-300">Major CGPA</h2>
              </div>
            </div>

            {/* Semester Box */}
            <div className="bg-zinc-900 text-white p-4 rounded-none shadow-lg flex items-center space-x-4">
              <div className="p-2 border-2 border-gray-600 rounded-none flex items-center justify-center">
                <FaCalendarAlt className="text-3xl" />
              </div>
              <div>
                <p className="text-4xl font-bold">4th</p> {/* Example value */}
                <h2 className=" font-sm mb-2 text-gray-300">
                  Current Semester
                </h2>
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
