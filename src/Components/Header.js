// src/components/Header.js
import React from 'react';
import { AiOutlineHome, AiOutlineBook, AiOutlineApartment } from 'react-icons/ai';
import { FaSearch, FaBell, FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // For navigation if needed

const Header = () => {
    return (
        <header className="bg-black text-white shadow-lg p-4 flex items-center justify-between w-full z-10 border-b border-gray-200">
            {/* Logo */}
            <div className="flex items-center space-x-2">
                <img src="/path-to-your-logo.png" alt="Logo" className="w-10 h-10 rounded-full" />
                <span className="text-xl font-bold">Your Institute</span>
            </div>

            {/* Navigation */}
            <nav className="flex-1 mx-8 flex justify-center space-x-6">
                <Link to="/institute" className="flex items-center space-x-2 cursor-pointer hover:text-indigo-200 transition-colors">
                    <AiOutlineHome className="text-2xl" />
                    <span className="text-lg font-medium">Institute</span>
                </Link>
                <Link to="/academic" className="flex items-center space-x-2 cursor-pointer hover:text-indigo-200 transition-colors">
                    <AiOutlineBook className="text-2xl" />
                    <span className="text-lg font-medium">Academic</span>
                </Link>
                <Link to="/campus" className="flex items-center space-x-2 cursor-pointer hover:text-indigo-200 transition-colors">
                    <AiOutlineApartment className="text-2xl" />
                    <span className="text-lg font-medium">Campus</span>
                </Link>
            </nav>

            {/* Search and Profile */}
            <div className="relative flex items-center space-x-6">
                <input
                    type="text"
                    placeholder="Search..."
                    className="border rounded-full p-2 pl-10 w-64 bg-gray-100 shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-300 transition duration-300"
                />
                <FaSearch className="absolute  text-gray-500" />
                <FaBell className="text-2xl cursor-pointer hover:text-indigo-200 transition-colors" />
                <FaUserCircle className="text-3xl cursor-pointer hover:text-indigo-200 transition-colors" />
            </div>
        </header>
    );
};

export default Header;
