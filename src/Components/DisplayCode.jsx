import React, { useContext } from "react";
import { storeContext } from "../Store/StoreContextProvider";
import { FiCopy } from "react-icons/fi"; // Importing a copy icon from react-icons

const DisplayCode = () => {
  const { gradient, copyToClipboard } = useContext(storeContext);
  return (
    <div className="mt-4 relative text-center text-gray-600">
      <p className="text-sm font-semibold">Current Gradient:</p>

      <div className="flex justify-center items-center mt-2">
        <p className="text-xs" id="hexCode">
          {gradient ? gradient : "Click the button to generate a gradient"}
        </p>
        {gradient && (
          <FiCopy
            onClick={copyToClipboard}
            className="ml-2 cursor-pointer text-gray-500 hover:text-gray-800 transition duration-150"
            size={18}
            title="Copy to Clipboard"
          />
        )}
      </div>
    </div>
  );
};

export default DisplayCode;
