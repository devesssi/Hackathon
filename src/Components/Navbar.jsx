import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-gray-100 text-black py-4 z-50 shadow-lg">
      <div className="container mx-auto px-4 flex justify-between items-center">
        
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <h1 className="text-2xl font-bold">Engineering Platform</h1>
        </div>

        {/* Desktop Navigation Menu */}
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
          <Link to="/login" className="bg-transparent border border-black text-black py-2 px-4 rounded hover:bg-black hover:text-white transition-colors duration-200">Login</Link>
          <Link to="/signup" className="bg-white text-blue-600 py-2 px-4 rounded hover:bg-blue-500 hover:text-white transition-colors duration-200">Sign Up</Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button 
          onClick={toggleMobileMenu}
          className="md:hidden flex items-center focus:outline-none"
        >
          <svg 
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
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
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-200 py-2">
          <nav className="space-y-2 flex flex-col items-center">
            <Link to="/home" className="hover:bg-blue-500 px-3 py-2 rounded">Home</Link>
            <Link to="/courses" className="hover:bg-blue-500 px-3 py-2 rounded">Courses</Link>
            <Link to="/features" className="hover:bg-blue-500 px-3 py-2 rounded">Features</Link>
            <Link to="/vlab" className="hover:bg-blue-500 px-3 py-2 rounded">vlab</Link>
            <Link to="/about" className="hover:bg-blue-500 px-3 py-2 rounded">About Us</Link>
            <Link to="/contact" className="hover:bg-blue-500 px-3 py-2 rounded">Contact</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
