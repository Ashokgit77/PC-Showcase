import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        {/* Left Side - Text Content */}
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl font-bold mb-4">
            Discover the Best PC Components
          </h1>
          <p className="text-lg mb-6">
            Explore our collection of top-rated processors, graphics cards, and
            other essential components. Build the perfect PC that fits your
            needs!
          </p>
          <a
            href="#components"
            className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
          >
            Explore Components
          </a>
        </div>

        {/* Right Side - Animated PC */}
        <div className="md:w-1/2 flex justify-center">
          <div className="relative">
            {/* PC Illustration */}
            <div className="pc-container bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg shadow-lg p-6 w-80 h-96">
              <div className="screen bg-black w-60 h-36 mx-auto mb-4 rounded-md overflow-hidden animate-pulse">
                {/* Simulating an animated screen */}
                <div className="bg-green-400 w-full h-full animate-pulse" />
              </div>
              <div className="stand bg-gray-500 w-12 h-4 mx-auto rounded-md"></div>
            </div>

            {/* Animated Glow Effect */}
            <div className="absolute inset-0 w-full h-full rounded-lg animate-spin-slow opacity-30 bg-gradient-to-r from-blue-500 to-green-500"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
