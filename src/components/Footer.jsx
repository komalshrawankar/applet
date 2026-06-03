// src/components/Footer.jsx
import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import logo from "../assets/images/logo.png"; // replace with your logo path

const Footer = () => {
  return (
    <footer className="bg-purple-100 mt-16 relative">
      {/* Top CTA Section */}
      <div className="w-full bg-purple-100 pt-16 pb-8 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
            Ready to Bring Your Dreams to Life?
          </h2>
          <p className="text-gray-900 mb-6">
            Let’s <span className="text-purple-600 font-semibold">Get Started</span> Today
          </p>
          <div className="flex justify-center items-center gap-2 sm:gap-4">
            <input
              type="email"
              placeholder="Enter Your email"
              className="px-4 py-2 rounded-full w-64 sm:w-80 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <button className="bg-purple-600 text-white px-4 sm:px-6 py-2 rounded-full hover:bg-purple-700 transition">
              Let's Talk →
            </button>
          </div>
        </div>
      </div>

      {/* Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-white rounded-t-3xl mt-12 shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <img src={logo} alt="Company Logo" className="h-12 mb-4" />
            <p className="text-gray-700 mb-4">
              About Company. <br />
              Empowering Futures, Crafting Solutions.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" className="text-gray-700 hover:text-purple-600">
                <FaFacebookF />
              </a>
              <a href="#" className="text-gray-700 hover:text-purple-600">
                <FaInstagram />
              </a>
              <a href="#" className="text-gray-700 hover:text-purple-600">
                <FaLinkedinIn />
              </a>
              <a href="#" className="text-gray-700 hover:text-purple-600">
                <FaTwitter />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li><a href="#" className="hover:text-purple-600">Home</a></li>
              <li><a href="#" className="hover:text-purple-600">About Us</a></li>
              <li><a href="#" className="hover:text-purple-600">Blog</a></li>
              <li><a href="#" className="hover:text-purple-600">Contact Us</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Services</h4>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li><a href="#" className="hover:text-purple-600">Web Design & Development</a></li>
              <li><a href="#" className="hover:text-purple-600">Mobile App Development</a></li>
              <li><a href="#" className="hover:text-purple-600">Digital Marketing</a></li>
              <li><a href="#" className="hover:text-purple-600">Technical Support</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Contact</h4>
            <p className="text-gray-700 text-sm mb-2">
              Operational Address:
            </p>
            <p className="text-gray-700 text-sm mb-2">
              47, Kotwal Nagar, Khamla, Nagpur,<br />
              Maharashtra 440022, India
            </p>
            <p className="text-gray-700 text-sm font-semibold">
              HR-MANAGER@MYAPPLESOFT.COM
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-200 mt-8 pt-4 text-gray-500 text-xs flex flex-col sm:flex-row justify-between items-center">
          <div className="mb-2 sm:mb-0">
            <a href="#" className="hover:text-purple-600">Privacy Policy</a> · <a href="#" className="hover:text-purple-600">Terms & Conditions</a>
          </div>
          <div>
            Copyright © 2026 Designed and developed by <a href="#" className="hover:text-purple-600">Adbornsolutions</a>.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;