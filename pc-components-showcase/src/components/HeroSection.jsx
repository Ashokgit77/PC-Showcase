import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        {/* Left Side - Text Content */}
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl font-bold mb-4">
            Discover the Essential PC Components
          </h1>
          <p className="text-lg mb-6">
            Explore the world of Motherboards that connect all your
            components,RAM that boosts your system's speed,and SSDs that ensure
            fast load times.Learn about the importance of reliable Power
            Supply,and see how Peripherals like Keyboards and Mice improve your
            daily interaction with the PC.
          </p>
          <Link
            to={"/cardlist"}
            className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
          >
            Explore Components
          </Link>
        </div>
        <img
          src="HS-Case.png"
          alt="RGB Case"
          srcset=""
          height={"600"}
          width={"600"}
        />
      </div>
    </section>
  );
};

export default HeroSection;
