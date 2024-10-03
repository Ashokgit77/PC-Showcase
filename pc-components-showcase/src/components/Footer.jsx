import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between">
          <div>
            <h2 className="text-lg font-bold">PC Showcase</h2>
            <p className="mt-2 text-sm">
              Showcasing the latest and greatest PC components.
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <h3 className="font-semibold">Links</h3>
            <ul className="mt-2 space-y-1">
              <li>
                <Link to={"/"} className="text-gray-400 hover:text-gray-300">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to={"/cardlist"}
                  className="text-gray-400 hover:text-gray-300"
                >
                  Components
                </Link>
              </li>
            </ul>
          </div>
          <div className="mt-4 md:mt-0">
            <h3 className="font-semibold">Follow Us</h3>
            <ul className="mt-2 space-x-4">
              <li className="inline">
                <a href="#" className="text-gray-400 hover:text-gray-300">
                  Facebook
                </a>
              </li>
              <li className="inline">
                <a href="#" className="text-gray-400 hover:text-gray-300">
                  Twitter
                </a>
              </li>
              <li className="inline">
                <a href="#" className="text-gray-400 hover:text-gray-300">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-6 border-t border-gray-700 pt-4 text-center text-sm">
          &copy; {new Date().getFullYear()} PC Showcase. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
