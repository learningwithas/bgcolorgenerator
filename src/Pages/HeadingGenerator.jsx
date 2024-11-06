import React from "react";
import Container from "../Components/Container";
import { Link } from "react-router-dom";

const HeadingGenerator = () => {
  return (
    <Link to="/HeadingGenerator">
      <Container>
        <h1>Heading Generator</h1>
        <p>Coming Soon!</p>
      </Container>
    </Link>
  );
};

export default HeadingGenerator;
