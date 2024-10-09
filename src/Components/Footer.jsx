import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-black py-8">
      <div className="footer container mx-auto px-4 flex justify-between flex-wrap">
        
        {/* First Column */}
        <div className="footer-first w-full md:w-1/4 mb-4">
          <div className="logos mb-2"> 
            <i className="fa-brands fa-deviantart fa-2xl"></i>
          </div>
          <h3 className="text-xl font-bold">Dinesh's Developer Portfolio</h3>
          <p>Mapping the coding pathway that leads to innovation</p>
          
          <div className="follows flex space-x-4 mt-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <div className="checkout">
                <img src="assets/facebook.svg" alt="Facebook" />
              </div>
            </a>
            <a href="https://www.instagram.com/dinesh.snippet/" target="_blank" rel="noopener noreferrer">
              <div className="checkout">
                <img src="assets/instagram.svg" alt="Instagram" />
              </div>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <div className="checkout">
                <img src="assets/x-twitter.svg" alt="X (Twitter)" />
              </div>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <div className="checkout">
                <img src="assets/youtube.svg" alt="YouTube" />
              </div>
            </a>
            <a href="https://github.com/DINESH-VERMA999" target="_blank" rel="noopener noreferrer">
              <div className="checkout">
                <img src="assets/github1.svg" alt="GitHub" />
              </div>
            </a>
          </div>
        </div>

        {/* Second Column */}
        <div className="footer-second w-full md:w-1/4 mb-4">
          <ul>
            <li className="font-bold mb-2"><Link to="/info">Info</Link></li>
            <li><Link to="/insights">Insights</Link></li>
            <li><Link to="/cookies">Cookies</Link></li>
            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Third Column */}
        <div className="footer-third w-full md:w-1/4 mb-4">
          <ul>
            <li className="font-bold mb-2"><Link to="/company">Company</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/press">Press</Link></li>
            <li><Link to="/partner">Partner</Link></li>
          </ul>
        </div>

        {/* Fourth Column */}
        <div className="footer-fourth w-full md:w-1/4 mb-4">
          <ul>
            <li className="font-bold mb-2"><Link to="/legal">Legal</Link></li>
            <li><Link to="/claim">Claim</Link></li>
            <li><Link to="/privacy">Privacy</Link></li>
            <li><Link to="/terms">Terms</Link></li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <hr className="my-4 border-gray-300" />

      {/* Footer End */}
      <div className="end text-center">
        &copy; 2024 Dinesh Portfolio, All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
