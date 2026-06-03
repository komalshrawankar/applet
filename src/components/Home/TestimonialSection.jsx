// src/components/TestimonialSection.jsx
import React from "react";
import testimonialAvatar from "../../assets/images/testimonial.jpg"; // replace with your avatar

const TestimonialSection = () => {
  return (
    <section className="relative bg-[#E8E5FF] overflow-hidden">
  {/* Top Curve */}
  <div className="absolute top-0 left-0 w-full">
    <svg
      className="w-full h-32 sm:h-48"
      viewBox="0 0 1440 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="#E8E5FF"
        d="M0,96L48,101.3C96,107,192,117,288,128C384,139,480,149,576,165.3C672,181,768,203,864,197.3C960,192,1056,160,1152,138.7C1248,117,1344,107,1392,101.3L1440,96V0H1392C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0H0V96Z"
      />
    </svg>
  </div>

  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      {/* Left Card */}
      <div className="bg-white rounded-xl shadow-lg p-8 border-l-8 border-purple-400">
        <div className="flex flex-col gap-4">
          <div className="flex space-x-1 text-yellow-400">★★★★★</div>
          <p className="text-gray-700">
            The team delivered our website exactly as we envisioned. Their professionalism, communication, and attention to detail made the entire process smooth and stress-free.
          </p>
          <div className="flex items-center gap-3 mt-4">
            <img
              src={testimonialAvatar}
              alt="Rahul Sharma"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <h4 className="font-semibold text-gray-900">Rahul Sharma</h4>
              <p className="text-gray-500 text-sm">Business Owner</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Info */}
      <div className="flex flex-col gap-6">
        <span className="text-purple-400 text-sm font-medium">Testimonials</span>
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">
          What Our Clients Say
        </h2>
        <p className="text-gray-700">
          We take pride in delivering solutions that help businesses grow, improve efficiency, and achieve their goals. Here’s what our clients have to say about working with us.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 mt-6">
          <div>
            <p className="text-4xl font-bold text-gray-900">98.7%</p>
            <p className="text-gray-500 text-sm">Satisfaction Rate</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-gray-900">65%</p>
            <p className="text-gray-500 text-sm">Faster Digital</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Bottom Curve */}
  <div className="absolute bottom-0 left-0 w-full">
    <svg
      className="w-full h-32 sm:h-48"
      viewBox="0 0 1440 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="#E8E5FF"
        d="M0,224L48,213.3C96,203,192,181,288,170.7C384,160,480,160,576,176C672,192,768,224,864,229.3C960,235,1056,213,1152,192C1248,171,1344,149,1392,138.7L1440,128V320H1392C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320H0V224Z"
      />
    </svg>
  </div>
</section>
  );
};

export default TestimonialSection;