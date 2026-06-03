// src/components/CurvedSection.jsx
import React from "react";
import bgImage from "../../assets/images/curvedbg.png"; // background image with curves

const CurvedSection = ({
  badgeText = "Why Choose Us",
  heading = "Your Trusted Partner for Digital Growth",
  description = "We combine technology, creativity, and expertise to deliver solutions that help businesses succeed in today’s competitive digital world.",
  features = [
    "Business-focused digital solutions",
    "Modern design and technology",
    "Transparent communication",
    "On-time project delivery",
    "Dedicated technical support",
    "Scalable solutions for growth",
  ],
  image,
}) => {
  return (
    <section
      className="relative bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-16 flex flex-col md:flex-row items-center gap-8">
        {/* Left Content */}
        <div className="flex-1">
          <span className="bg-purple-200 text-purple-700 px-3 py-1 rounded-full text-sm mb-3 inline-block">
            {badgeText}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {heading}
          </h2>
          <p className="text-gray-700 mb-6">{description}</p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            {features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>

        {/* Right Image */}
        <div className="flex-1 relative">
          {image && (
            <img
              src={image}
              alt="Section Visual"
              className="w-full h-auto rounded-xl"
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default CurvedSection;