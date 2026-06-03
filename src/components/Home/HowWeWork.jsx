import React from "react";

const HowWeWork = ({ steps }) => {
  return (
    <section className="py-16 bg-white" style={{ backgroundColor: "#EFF1F3" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-12 font-heading">
          How We Work
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-between relative">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex-1 flex flex-col items-center text-center relative mb-12 md:mb-0"
            >
              {/* Step Number */}
              {step.id && <span className="text-gray-500 mb-2">{step.id}</span>}

              {/* Icon: keep original size */}
              {step.icon && <div className="mb-4">{step.icon}</div>}

              {/* Title */}
              {step.title && <h3 className="text-2xl  mb-2 font-heading">{step.title}</h3>}

              {/* Description */}
              {step.description && <p className="text-gray-600 text-m font-heading">{step.description}</p>}

              {/* Connector Images */}
              {index < steps.length - 1 && step.connectorImage && (
                <>
                  {/* Desktop connector */}
                  <img
                    src={step.connectorImage.desktop}
                    alt="connector"
                    className="hidden md:block absolute top-1/3 right-[-30%] max-w-full"
                    style={{ transform: "translateY(-40%)" }}
                  />
                  {/* Mobile connector */}
                  <img
                    src={step.connectorImage.mobile}
                    alt="connector"
                    className="block md:hidden w-full max-w-xs mt-6"
                  />
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;