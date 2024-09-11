import React, { useState } from "react";
import {
  FaGraduationCap,
  FaTachometerAlt,
  FaCalendarAlt,
} from "react-icons/fa";
import Header from "./Header"; // Import the Header component
import CurrentPageBar from "./CurrentPageBar";

const Dashboard = () => {
  // State to manage the currently selected section
  const [currentSection, setCurrentSection] = useState(null);

  // Handler to set the current section
  const handleSectionChange = (section) => {
    setCurrentSection(currentSection === section ? null : section);
  };

  return (
    <div className="flex flex-col bg-black min-h-screen font-dm-sans">
      {/* Header */}
      <Header />
      <CurrentPageBar pageTitle="Dashboard" />

      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside className="bg-gradient-to-l from-zinc-900 w-64 bg-black text-white p-4">
          <h2 className="font-bold text-xs mb-4 ml-3 mt-2 text-rose-500 uppercase">
            Quick Links
          </h2>
          <ul className="space-y-2">
            <li>
              <button
                onClick={() => handleSectionChange("Overview")}
                className={`block w-full py-2 px-4 rounded-full text-sm ${
                  currentSection === "Overview" ? "bg-rose-600 text-white" : "bg-zinc-900 text-white hover:text-rose-600"
                } border border-zinc-800 hover:border-white transition duration-300 ease-in-out transform hover:scale-105`}
              >
                Overview
              </button>
            </li>
            <li>
              <button
                onClick={() => handleSectionChange("Students")}
                className={`block w-full py-2 px-4 rounded-full text-sm ${
                  currentSection === "Students" ? "bg-rose-600 text-white" : "bg-zinc-900 text-white hover:text-rose-600"
                } border border-zinc-800 hover:border-white transition duration-300 ease-in-out transform hover:scale-105`}
              >
                Students
              </button>
            </li>
            <li>
              <button
                onClick={() => handleSectionChange("Faculty")}
                className={`block w-full py-2 px-4 rounded-full text-sm ${
                  currentSection === "Faculty" ? "bg-rose-600 text-white" : "bg-zinc-900 text-white hover:text-rose-600"
                } border border-zinc-800 hover:border-white transition duration-300 ease-in-out transform hover:scale-105`}
              >
                Faculty
              </button>
            </li>
            <li>
              <button
                onClick={() => handleSectionChange("Courses")}
                className={`block w-full py-2 px-4 rounded-full text-sm ${
                  currentSection === "Courses" ? "bg-rose-600 text-white" : "bg-zinc-900 text-white hover:text-rose-600"
                } border border-zinc-800 hover:border-white transition duration-300 ease-in-out transform hover:scale-105`}
              >
                Courses
              </button>
            </li>
            <li>
              <button
                onClick={() => handleSectionChange("Events")}
                className={`block w-full py-2 px-4 rounded-full text-sm ${
                  currentSection === "Events" ? "bg-rose-600 text-white" : "bg-zinc-900 text-white hover:text-rose-600"
                } border border-zinc-800 hover:border-white transition duration-300 ease-in-out transform hover:scale-105`}
              >
                Events
              </button>
            </li>
          </ul>

          <h2 className="font-bold text-xs ml-3 mt-11 text-rose-500 uppercase">
            Module Designer
          </h2>
          <ul className="space-y-2">
            <li>
              <button
                onClick={() => handleSectionChange("Rohit")}
                className={`block w-full mt-3 py-2 px-4 rounded-full text-sm ${
                  currentSection === "Rohit" ? "bg-rose-600 text-white" : "bg-zinc-900 text-white hover:text-rose-600"
                } border border-zinc-800 hover:border-white transition duration-300 ease-in-out transform hover:scale-105`}
              >
                Rohit Manohar
              </button>
            </li>
            <li>
              <button
                onClick={() => handleSectionChange("Ansh")}
                className={`block w-full py-2 px-4 rounded-full text-sm ${
                  currentSection === "Ansh" ? "bg-rose-600 text-white" : "bg-zinc-900 text-white hover:text-rose-600"
                } border border-zinc-800 hover:border-white transition duration-300 ease-in-out transform hover:scale-105`}
              >
                Ansh Manohar
              </button>
            </li>
          </ul>

          <h2 className="font-bold text-xs ml-3 mt-11 text-rose-500 uppercase">
            Support
          </h2>
          <button
            onClick={() => handleSectionChange("Support")}
            className={`block w-full py-2 px-4 rounded-full text-sm mt-3 ${
              currentSection === "Support" ? "bg-rose-600 text-white" : "bg-zinc-900 text-white hover:text-rose-600"
            } border border-zinc-800 hover:border-white transition duration-300 ease-in-out transform hover:scale-105`}
          >
            Support
          </button>
        </aside>

        {/* Content Area */}
        <main className="flex-1 p-6 bg-black">
          {/* Major Credits, CGPA, and Semester Boxes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Major Credits Box */}
            <div className="bg-zinc-900 border border-zinc-800 text-white p-4 rounded-none shadow-lg flex items-center space-x-4">
              <div className="p-2 border-2 border-gray-600 rounded-none flex items-center justify-center">
                <FaGraduationCap className="text-3xl" />
              </div>
              <div>
                <p className="text-4xl font-bold">120</p> {/* Example value */}
                <h2 className="font-sm mb-2 text-gray-300">Major Credits</h2>
              </div>
            </div>

            {/* Major CGPA Box */}
            <div className="bg-zinc-900 border border-zinc-800 text-white p-4 rounded-none shadow-lg flex items-center space-x-4">
              <div className="p-2 border-2 border-gray-600 rounded-none flex items-center justify-center">
                <FaTachometerAlt className="text-3xl" />
              </div>
              <div>
                <p className="text-4xl font-bold">8.75</p> {/* Example value */}
                <h2 className="font-sm mb-2 text-gray-300">Major CGPA</h2>
              </div>
            </div>

            {/* Semester Box */}
            <div className="bg-zinc-900 border border-zinc-800 text-white p-4 rounded-none shadow-lg flex items-center space-x-4">
              <div className="p-2 border-2 border-gray-600 rounded-none flex items-center justify-center">
                <FaCalendarAlt className="text-3xl" />
              </div>
              <div>
                <p className="text-4xl font-bold">4th</p> {/* Example value */}
                <h2 className="font-sm mb-2 text-gray-300">
                  Current Semester
                </h2>
              </div>
            </div>
          </div>

          {/* Horizontal Grid for Sections */}
          <div className="mt-6 flex space-x-4">
            {/* Announcement Button */}
            <button
              onClick={() => handleSectionChange("Announcement")}
              className={`px-4 py-2 rounded-full bg-zinc-900 border border-zinc-800 hover:border-white text-base ${
                currentSection === "Announcement" ? "text-rose-600" : "text-white"
              } hover:text-rose-600 font-dm-sans transition duration-300 ease-in-out transform hover:scale-105`}
            >
              Announcement
            </button>

            {/* Attendance Button */}
            <button
              onClick={() => handleSectionChange("Attendance")}
              className={`px-4 py-2 rounded-full bg-zinc-900 border border-zinc-800 hover:border-white text-base ${
                currentSection === "Attendance" ? "text-rose-600" : "text-white"
              } hover:text-rose-600 font-dm-sans transition duration-300 ease-in-out transform hover:scale-105`}
            >
              Attendance
            </button>

            {/* Courses Button */}
            <button
              onClick={() => handleSectionChange("Courses")}
              className={`px-4 py-2 rounded-full bg-zinc-900 border border-zinc-800 hover:border-white text-base ${
                currentSection === "Courses" ? "text-rose-600" : "text-white"
              } hover:text-rose-600 font-dm-sans transition duration-300 ease-in-out transform hover:scale-105`}
            >
              Courses
            </button>
          </div>

          {/* Section Content Display */}
          <div className="mt-6">
            {currentSection === "Announcement" && (
              <div className="bg-zinc-900 text-white p-4 rounded-lg shadow-lg mb-4">
                <p className="text-gray-300">Announcement content goes here.</p> {/* Example content */}
              </div>
            )}
            {currentSection === "Attendance" && (
              <div className="bg-zinc-900 text-white p-4 rounded-lg shadow-lg mb-4">
                <p className="text-gray-300">Attendance content goes here.</p> {/* Example content */}
              </div>
            )}
            {currentSection === "Courses" && (
              <div className="bg-zinc-900 text-white p-4 rounded-lg shadow-lg mb-4">
                <p className="text-gray-300">Courses are listed below.</p> {/* Example content */}
              </div>
            )}
            {currentSection === "Rohit" && (
              <div className="bg-zinc-900 text-white p-4 rounded-lg shadow-lg mb-4">
                <p className="text-gray-300">Information about Rohit Manohar.</p> {/* Example content */}
              </div>
            )}
            {currentSection === "Ansh" && (
              <div className="bg-zinc-900 text-white p-4 rounded-lg shadow-lg mb-4">
                <p className="text-gray-300">Information about Ansh Manohar.</p> {/* Example content */}
              </div>
            )}
            {currentSection === "Support" && (
              <div className="bg-zinc-900 text-white p-4 rounded-lg shadow-lg mb-4">
                <p className="text-gray-300">Support content goes here.</p> {/* Example content */}
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
