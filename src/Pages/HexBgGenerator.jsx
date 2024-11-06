import React from "react";
import Container from "../Components/Container";
import DisplayCode from "../Components/DisplayCode";
import DisplayResult from "../Components/DisplayResult";
import BtnGenerate from "../Components/BtnGenerate";
import Title from "../Components/Title";
import { Link } from "react-router-dom";

const HexBgGenerator = () => {
  return (
    <Link to="/HexBgGenerator">
      <Container>
        <Title />
        <DisplayResult />
        <BtnGenerate />
        <DisplayCode />
      </Container>
    </Link>
  );
};

export default HexBgGenerator;
