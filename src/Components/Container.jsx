import React from "react";

const Container = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <div className="w-full max-w-lg p-8 bg-white rounded-lg shadow-lg relative">
        {children}
      </div>
    </div>
  );
};

export default Container;
