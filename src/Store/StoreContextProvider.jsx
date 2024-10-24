import React, { createContext, useState } from "react";

export const storeContext = createContext({
  gradient: "",
  setGradient: () => {},
  GenerateGradientColor: () => {},
  generateRandomColor: () => {},
  randomNumber: () => {},
  copyToClipboard: () => {},
});

const StoreContextProvider = ({ children }) => {
  let hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
  const [gradient, setGradient] = useState();

  const GenerateGradientColor = () => {
    console.log("click");
    let color1 = generateRandomColor();
    let color2 = generateRandomColor();
    let color3 = generateRandomColor();

    let directionNumber = Math.floor(Math.random() * 360);

    let linearGradient = `linear-gradient(${directionNumber}deg, ${color1}, ${color2}, ${color3})`;
    let radialGradient = `radial-gradient(${color1}, ${color2}, ${color3})`;
    let conicGradient = `conic-gradient(from ${directionNumber}deg, ${color1}, ${color2}, ${color3})`;

    let gradientColor = [linearGradient, radialGradient, conicGradient];
    let randomGradient = gradientColor[randomNumber(gradientColor)];
    setGradient(randomGradient);
  };

  const generateRandomColor = () => {
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomNumber(hex)];
    }
    return hexColor;
  };

  function randomNumber(arr) {
    return Math.floor(Math.random() * arr.length);
  }

  // Function to copy the gradient code to clipboard
  const copyToClipboard = () => {
    const hexCodeElement = document.getElementById("hexCode");
    navigator.clipboard.writeText(hexCodeElement.innerText);
    alert("Gradient copied to clipboard!");
  };
  const StoreValues = {
    GenerateGradientColor,
    copyToClipboard,
    gradient,
  };
  return (
    <storeContext.Provider value={StoreValues}>
      {children}
    </storeContext.Provider>
  );
};

export default StoreContextProvider;
