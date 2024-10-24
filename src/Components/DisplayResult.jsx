import React, { useContext } from "react";
import { storeContext } from "../Store/StoreContextProvider";

const DisplayResult = () => {
  const { gradient } = useContext(storeContext);
  return (
    <div
      className="w-full h-64 rounded-lg shadow-md mb-6 transition-all duration-300"
      id="colorBox"
      style={{ background: gradient }}
    ></div>
  );
};

export default DisplayResult;
