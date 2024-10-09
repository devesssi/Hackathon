import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-gray-100 text-black py-4 z-50 shadow-lg">
      <div className="container mx-auto px-4 flex justify-between items-center">
        
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <h1 className="text-2xl font-bold">Engineering Platform</h1>
        </div>

        {/* Navigation Menu */}
        <nav className="hidden md:flex space-x-6">
          <Link to="/home" className="hover:bg-blue-500 px-3 py-2 rounded">Home</Link>
          <Link to="/courses" className="hover:bg-blue-500 px-3 py-2 rounded">Courses</Link>
          <Link to="/features" className="hover:bg-blue-500 px-3 py-2 rounded">Features</Link>
          <Link to="/vlab" className="hover:bg-blue-500 px-3 py-2 rounded">vlab</Link>
          <Link to="/about" className="hover:bg-blue-500 px-3 py-2 rounded">About Us</Link>
          <Link to="/contact" className="hover:bg-blue-500 px-3 py-2 rounded">Contact</Link>
          <Link to="/Chatbot" className="hover:bg-blue-500 px-3 py-2 rounded">Chatbot</Link>



        </nav>

        {/* Buttons */}
        <div className="hidden md:flex space-x-4">
          <Link to="/login" className="bg-transparent border border-black text-white py-2 px-4 rounded hover:bg-white hover:text-blue-600">Login</Link>
          <Link to="/signup" className="bg-white text-blue-600 py-2 px-4 rounded hover:bg-blue-500 hover:text-white">Sign Up</Link>
        </div>
      </div>

      {/* Mobile Menu for small screens */}
      <div className="md:hidden">
        <nav className="space-x-4 flex justify-center">
          <Link to="/" className="hover:bg-blue-500 px-3 py-2 rounded">Home</Link>
          <Link to="/courses" className="hover:bg-blue-500 px-3 py-2 rounded">Courses</Link>
          <Link to="/features" className="hover:bg-blue-500 px-3 py-2 rounded">Features</Link>
          <Link to="/vlab" className="hover:bg-blue-500 px-3 py-2 rounded">vlab</Link>
          <Link to="/about" className="hover:bg-blue-500 px-3 py-2 rounded">About Us</Link>
          <Link to="/contact" className="hover:bg-blue-500 px-3 py-2 rounded">Contact</Link>
          <Link to="/Chatbot" className="hover:bg-blue-500 px-3 py-2 rounded">Chatbot</Link>


        </nav>
      </div>
    </header>
  );
};

export default Navbar;
