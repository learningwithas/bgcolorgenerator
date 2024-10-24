import React, { useContext } from "react";
import { storeContext } from "../Store/StoreContextProvider";

const BtnGenerate = () => {
  const { GenerateGradientColor } = useContext(storeContext);
  return (
    <button
      onClick={GenerateGradientColor}
      className="w-full bg-purple-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-purple-500 transition duration-200 transform hover:scale-105"
    >
      Generate Random Color
    </button>
  );
};

export default BtnGenerate;
