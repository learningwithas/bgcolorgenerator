import React from "react";
import { Routes, Route } from "react-router-dom";
import StoreContextProvider from "./Store/StoreContextProvider";
import HexBgGenerator from "./Pages/HexBgGenerator";
import BgWithTextOppBackGroundGenerator from "./Pages/BgWithTextOppBackGroundGenerator";
import HeadingGenerator from "./Pages/HeadingGenerator";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import NotFound from "./Components/NotFound";

const App = () => {
  return (
    <StoreContextProvider>
      <Navbar /> {/* Add Navbar component here */}
      <Routes>
        {/* Use element instead of component */}
        <Route path="/" element={<HexBgGenerator />} />
        <Route path="/bgcolorgenerator/" element={<HexBgGenerator />} />
        <Route path="/HexBgGenerator" element={<HexBgGenerator />} />
        <Route path="/HeadingGenerator" element={<HeadingGenerator />} />
        <Route
          path="/BgWithTextOppBackGroundGenerator"
          element={<BgWithTextOppBackGroundGenerator />}
        />
        <Route path="*" element={<NotFound />} /> {/* Catch-all route */}
      </Routes>
      <Footer /> {/* Add Footer component here */}
    </StoreContextProvider>
  );
};

export default App;
