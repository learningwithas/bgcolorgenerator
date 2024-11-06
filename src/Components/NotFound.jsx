import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <h1 className="text-9xl font-extrabold text-purple-600">404</h1>
      <p className="text-2xl font-semibold text-gray-800 mt-4">
        Oops! Page Not Found
      </p>
      <p className="text-gray-600 mt-2">
        The page you're looking for doesn't exist.
      </p>
      <Link
        to="/"
        className="mt-6 px-6 py-3 bg-purple-600 text-white rounded-full shadow-lg hover:bg-purple-500 transition duration-300"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
