import React from "react";
import Container from "ui/Container";

const Platforms = ({ children }) => {
  if (!children.length) return null;

  return <Container>{children.join(", ")}</Container>;
};

export default Platforms;
