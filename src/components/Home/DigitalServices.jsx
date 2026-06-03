// src/components/DigitalServices.jsx
import React from "react";
import webDevImg from "../../assets/images/D1.png";
import appDevImg from "../../assets/images/D2.png";
import digitalMarketingImg from "../../assets/images/D3.png";
import techSupportImg from "../../assets/images/D4.png";
import { FaExternalLinkAlt } from "react-icons/fa";

const services = [
  {
    title: "Web Development",
    description:
      "We design and develop responsive, high-performance websites tailored to your business goals.",
    image: webDevImg,
    bg: "bg-purple-100",
  },
  {
    title: "App Development",
    description:
      "We build user-friendly mobile applications for Android and iOS with smooth performance and modern design.",
    image: appDevImg,
    bg: "bg-[#1E1E1E]  text-white",
  },
  {
    title: "Digital Marketing",
    description:
      "We help your brand reach the right audience through SEO, social media marketing, ads, and lead generation campaigns.",
    image: digitalMarketingImg,
    bg: "bg-purple-100",
  },
  {
    title: "Technical Support",
    description:
      "We provide reliable technical assistance, website maintenance, troubleshooting.",
    image: techSupportImg,
    bg: "bg-[#1E1E1E] text-white",
  },
];

const DigitalServices = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-16">
      {/* Header */}
      <div className="mb-12 text-center md:text-left">
        <span className="text-purple-600 text-sm font-semibold uppercase mb-2 inline-block">
          Our Services
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
          Our Digital Services
        </h2>
        <p className="text-gray-700 mt-3 max-w-xl">
          We provide modern technology and marketing solutions that help businesses improve their online presence, connect with customers, and grow efficiently.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className={`flex flex-col rounded-xl overflow-hidden shadow-lg ${service.bg} transition transform hover:-translate-y-1 hover:shadow-2xl`}
          >
            {/* Content first */}
            <div className="p-4 flex flex-col flex-1">
              <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
              <p className="text-sm flex-1">{service.description}</p>
              <a
                href="#"
                className="mt-3 inline-flex items-center font-medium text-purple-600 hover:underline"
              >
                Learn More <FaExternalLinkAlt className="ml-1 h-3 w-3" />
              </a>
            </div>

            {/* Image at bottom */}
            <img
              src={service.image}
              alt={service.title}
              className=""
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default DigitalServices;