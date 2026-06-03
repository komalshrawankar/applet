// src/components/HeroSection.jsx
import React from "react";
import heroBg from "../assets/images/bg.png"; // your background image

const HeroSection = () => {
    return (
        <section
            className="relative w-full min-h-screen bg-cover bg-center"
            style={{ backgroundImage: `url(${heroBg})` }}
        >
            {/* Optional subtle overlay */}
            <div className="absolute inset-0 bg-white/10"></div>

            {/* Content centered both vertically and horizontally */}
            <div className="relative z-10 flex flex-col items-center justify-center text-center px-2 sm:px-1 lg:px-10 h-screen max-w-8xl mx-auto">
                {/* Badge */}
                <span className="bg-white/30 text-purple-800 px-3 py-1 rounded-full text-m mb-4">
                    Welcome To Applet
                </span>

                {/* Heading */}
               <h1
  className="font-heading font-medium text-[80px] leading-[83px] tracking-[-0.96px] text-center text-black mb-4"
>
  Empowering Businesses <br />
  with <span className="text-purple-600">Smart Digital Solutions</span>
</h1>

                {/* Subheading */}
                <p className=" font-body text-gray-800 text-sm sm:text-base md:text-lg mb-8 max-w-2xl">
                    We help businesses grow with modern websites, powerful mobile apps,
                    result-driven digital marketing, and reliable technical support services.
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                    <a
                        href="/contact"
                        className="px-6 py-3 bg-purple-600 text-white rounded-2xl hover:bg-purple-700 transition font-medium flex items-center"
                    >
                        Get Started Now
                        <svg
                            className="ml-2 h-4 w-4"
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
                    <a
                        href="/watch-video"
                        className="px-6 py-3 bg-white text-purple-600 rounded-2xl hover:bg-gray-100 transition font-medium"
                    >
                        Watch Video
                    </a>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;