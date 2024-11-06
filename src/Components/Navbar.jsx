// components/Navbar.js
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-purple-500 to-indigo-500 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link
              to="/"
              className="text-white text-2xl font-bold cursor-pointer"
            >
              Color Generator
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                to="/HexBgGenerator"
                className="text-white hover:bg-purple-700 px-3 py-2 rounded-md text-sm font-medium"
              >
                HexBgGenerator
              </Link>
              <Link
                to="/HeadingGenerator"
                className="text-white hover:bg-purple-700 px-3 py-2 rounded-md text-sm font-medium"
              >
                Heading Generator
              </Link>
              <Link
                to="/BgWithTextOppBackGroundGenerator"
                className="text-white hover:bg-purple-700 px-3 py-2 rounded-md text-sm font-medium"
              >
                Bg With Text Opposite Background
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white px-3 py-2 rounded-md"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="block text-white hover:bg-purple-700 px-3 py-2 rounded-md text-base font-medium"
            >
              HexBgGenerator
            </Link>
            <Link
              to="/HeadingGenerator"
              className="block text-white hover:bg-purple-700 px-3 py-2 rounded-md text-base font-medium"
            >
              Heading Generator
            </Link>
            <Link
              to="/BgWithTextOppBackGroundGenerator"
              className="block text-white hover:bg-purple-700 px-3 py-2 rounded-md text-base font-medium"
            >
              Bg With Text Opposite Background
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
