// src/components/Navbar.jsx
import React, { useState } from "react";
import logo from "../assets/images/logo.png"; // replace with your logo path

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 px-4 sm:px-6 lg:px-10 pt-5">
      <div className="max-w-6xl mx-auto flex items-center h-20 
                      backdrop-blur-md bg-blue-200/30 border border-purple-400 rounded-full shadow-lg px-6 py-2">
        {/* Left: Logo */}
        <div className="flex-shrink-0">
          <img src={logo} alt="Logo" className="h-12 w-auto" />
        </div>

        {/* Center: Nav Links */}
        <div className="hidden md:flex flex-1 justify-center space-x-6">
          <a href="/" className="text-black hover:text-purple-600 font-medium transition">
            Home
          </a>
          <a href="/about" className="text-black hover:text-purple-600 font-medium transition">
            About Us
          </a>

          {/* Services Mega Dropdown */}
          {/* Services Mega Dropdown */}
<div className="relative"
     onMouseEnter={() => setServicesOpen(true)}
     onMouseLeave={() => setServicesOpen(false)}
>
  <button className="text-black hover:text-purple-600 font-medium flex items-center transition">
    Services
    <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  </button>

  {/* Dropdown menu */}
  {servicesOpen && (
    <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-56
                    bg-blue-100/90 border border-purple-300 rounded-lg shadow-lg p-3
                    text-black text-sm flex flex-col gap-2 z-50">
      <a href="/services/mobile" className="hover:bg-purple-200 rounded px-3 py-2 transition">
        Mobile App Development
      </a>
      <a href="/services/web" className="hover:bg-purple-200 rounded px-3 py-2 transition">
        Web Development
      </a>
      <a href="/services/digital" className="hover:bg-purple-200 rounded px-3 py-2 transition">
        Digital Marketing
      </a>
      <a href="/services/technical" className="hover:bg-purple-200 rounded px-3 py-2 transition">
        Technical Support
      </a>
    </div>
  )}
</div>

          <a href="/blog" className="text-black hover:text-purple-600 font-medium transition">
            Blog
          </a>
          <a href="/contact" className="text-black hover:text-purple-600 font-medium transition">
            Contact
          </a>
        </div>

        {/* Right: Button */}
        <div className="hidden md:flex flex-shrink-0">
          <a
            href="/contact"
            className="ml-4 px-4 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition flex items-center"
          >
            Let's Talk
            <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center ml-auto">
          <button onClick={() => setIsOpen(!isOpen)} className="text-black focus:outline-none">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-2 bg-blue-100/80 backdrop-blur-md text-black rounded-lg shadow-lg px-4 py-2 space-y-2 border border-purple-400">
          <a href="/" className="block px-2 py-1 hover:bg-purple-100 rounded">Home</a>
          <a href="/about" className="block px-2 py-1 hover:bg-purple-100 rounded">About Us</a>

          <div className="block">
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="w-full text-left px-2 py-1 hover:bg-purple-100 rounded flex justify-between items-center"
            >
              Services
              <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {servicesOpen && (
              <div className="pl-4 mt-1 space-y-1">
                <a href="/services/mobile" className="block px-2 py-1 hover:bg-purple-100 rounded">Mobile App</a>
                <a href="/services/web" className="block px-2 py-1 hover:bg-purple-100 rounded">Web Development</a>
                <a href="/services/digital" className="block px-2 py-1 hover:bg-purple-100 rounded">Digital Marketing</a>
                <a href="/services/technical" className="block px-2 py-1 hover:bg-purple-100 rounded">Technical Support</a>
              </div>
            )}
          </div>

          <a href="/blog" className="block px-2 py-1 hover:bg-purple-100 rounded">Blog</a>
          <a href="/contact" className="block px-2 py-1 hover:bg-purple-100 rounded">Contact</a>
          <a
            href="/contact"
            className="block px-4 py-2 bg-purple-600 text-white rounded-full text-center hover:bg-purple-700 transition"
          >
            Let's Talk
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;