import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Left Section - Brand Name */}
          <div className="text-lg font-bold">Color Generator</div>

          {/* Middle Section - Links */}
          <div className="space-x-4 hidden md:block">
            <a href="#" className="hover:underline">
              About
            </a>
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
            <a href="#" className="hover:underline">
              Terms of Service
            </a>
          </div>

          {/* Right Section - Social Media Links */}
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-300">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.5c-.9.4-1.9.6-2.9.7A4.9 4.9 0 0023.3 3a9.7 9.7 0 01-3 1.1A4.9 4.9 0 0016.7 2c-2.7 0-4.9 2.2-4.9 5v.7C7.7 7.4 4.1 5.6 1.7 2.9a5 5 0 00-.6 2.5 5 5 0 002.2 4.2c-.8 0-1.7-.3-2.4-.7v.1c0 2.3 1.7 4.3 3.9 4.7a5 5 0 01-2.2.1 5 5 0 004.7 3.5A9.8 9.8 0 010 19.5a14 14 0 007.5 2.2c9 0 14-7.4 14-13.8 0-.2 0-.5-.1-.7A9.8 9.8 0 0024 4.5z" />
              </svg>
            </a>

            <a href="#" className="hover:text-gray-300">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.1C6.7 2.1 2.1 6.7 2.1 12S6.7 21.9 12 21.9 21.9 17.3 21.9 12 17.3 2.1 12 2.1zm0 17.3c-3.2 0-5.9-2.6-5.9-5.9S8.8 7.6 12 7.6s5.9 2.6 5.9 5.9-2.7 5.9-5.9 5.9z" />
                <circle cx="12" cy="12" r="4.5" />
                <path d="M18.7 5.2a1.3 1.3 0 11-2.6 0 1.3 1.3 0 012.6 0z" />
              </svg>
            </a>

            <a href="#" className="hover:text-gray-300">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 2C4.6 2 1 5.6 1 10c0 4 3 7.4 7.2 7.8V14.2H5.8V10h2.4V8c0-2.4 1.5-3.8 3.7-3.8 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.3 0-1.6.8-1.6 1.6v2H14l-.4 4.2h-2.2v3.6C17.2 17.3 20 14 20 10c0-4.4-3.6-8-8-8z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Bottom Section - Copyright */}
        <div className="mt-4 text-center text-gray-300 text-sm">
          &copy; {new Date().getFullYear()} Color Generator. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
