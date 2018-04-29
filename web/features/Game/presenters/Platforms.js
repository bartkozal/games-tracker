// @flow
import React from "react";
import Container from "ui/Container";

type Props = {
  children: string[]
};

const Platforms = ({ children }: Props) => {
  if (!children.length) return null;

  return <Container>{children.join(", ")}</Container>;
};

export default Platforms;
