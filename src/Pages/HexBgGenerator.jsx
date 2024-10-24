import React from "react";
import Container from "../Components/Container";
import DisplayCode from "../Components/DisplayCode";
import DisplayResult from "../Components/DisplayResult";
import BtnGenerate from "../Components/BtnGenerate";
import Title from "../Components/Title";

const HexBgGenerator = () => {
  return (
    <div>
      <Container>
        <Title />
        <DisplayResult />
        <BtnGenerate />
        <DisplayCode />
      </Container>
    </div>
  );
};

export default HexBgGenerator;
