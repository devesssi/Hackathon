import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaYoutube,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900  text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between overflow-y-auto">

          {/* Branding & Description */}
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h2 className="text-2xl font-bold mb-4">Engineering Platform</h2>
            <p className="text-gray-400">
              Empowering students with essential engineering knowledge through a wide range of courses and resources.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebookF className="text-xl hover:text-blue-500" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="text-xl hover:text-blue-400" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-xl hover:text-pink-500" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn className="text-xl hover:text-blue-700" />
              </a>
              <a href="https://github.com/DINESH-VERMA999" target="_blank" rel="noopener noreferrer">
                <FaGithub className="text-xl hover:text-gray-400" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                <FaYoutube className="text-xl hover:text-red-600" />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h3 className="text-xl font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-gray-300">About Us</Link></li>
              <li><Link to="/blog" className="hover:text-gray-300">Blog</Link></li>
              <li><Link to="/careers" className="hover:text-gray-300">Careers</Link></li>
              <li><Link to="/partners" className="hover:text-gray-300">Partners</Link></li>
              <li><Link to="/press" className="hover:text-gray-300">Press</Link></li>
            </ul>
          </div>

          {/* Resources Links */}
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h3 className="text-xl font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/help-center" className="hover:text-gray-300">Help Center</Link></li>
              <li><Link to="/courses" className="hover:text-gray-300">Courses</Link></li>
              <li><Link to="/tutorials" className="hover:text-gray-300">Tutorials</Link></li>
              <li><Link to="/community" className="hover:text-gray-300">Community</Link></li>
              <li><Link to="/developers" className="hover:text-gray-300">Developers</Link></li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="w-full md:w-1/4">
            <h3 className="text-xl font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/privacy-policy" className="hover:text-gray-300">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="hover:text-gray-300">Terms of Service</Link></li>
              <li><Link to="/cookie-policy" className="hover:text-gray-300">Cookie Policy</Link></li>
              <li><Link to="/disclaimer" className="hover:text-gray-300">Disclaimer</Link></li>
              <li><Link to="/legal-notice" className="hover:text-gray-300">Legal Notice</Link></li>
            </ul>
          </div>

        </div>
        <hr className="my-8 border-gray-600" />
        <div className="flex justify-between items-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Dinesh's Engineering Platform. All rights reserved.</p>
          <div>
            <Link to="/privacy-policy" className="hover:text-white mx-2">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-white mx-2">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
