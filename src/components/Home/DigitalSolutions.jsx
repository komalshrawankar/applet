// src/components/DigitalSolutions.jsx
import React from "react";
import sampleImg from "../../assets/images/digital2.png"; // replace with your image path
import { FaCheck } from "react-icons/fa";

const features = [
  "Professional Online Presence",
  "24/7 Availability",
  "Use of Advanced Technology",
  "Customizable Solutions",
  "Skilled and Trained Team",
];

const DigitalSolutions = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-16">
      <div className="flex flex-col md:flex-row items-center gap-8">
        {/* Image with badge */}
        <div className="relative w-full md:w-1/2">
          <img
            src={sampleImg}
            alt="Digital Solutions"
            className="rounded-xl shadow-lg w-full h-auto object-cover"
          />
          <div className="absolute -bottom-6 left-1 bg-purple-600 text-white px-4 py-10 rounded-lg ">
            3+ Years Experience
          </div>
        </div>

        {/* Text content */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-gray-900 mb-4">
            Building Digital Solutions That Help Businesses Grow
          </h2>
          <p className="text-gray-700 mb-6">
            We provide result-focused technology and marketing services for businesses that want to build a strong online presence.
            From website development to mobile apps, digital marketing, and technical support, we deliver solutions that are practical, scalable, and business-friendly.
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center gap-2 text-gray-700">
                <FaCheck className="text-purple-600" />
                {feature}
              </li>
            ))}
          </ul>

          <a
            href="/services"
            className="inline-block px-6 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition font-medium flex items-center gap-2 w-fit"
          >
            View More
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default DigitalSolutions;