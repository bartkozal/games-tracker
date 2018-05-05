// @flow
import React, { type Node } from "react";
import Wrapper from "ui/Wrapper";
import Navbar from "features/Navbar";

type Props = {
  children: Node
};

const AppLayout = ({ children }: Props) => (
  <Wrapper>
    <Navbar />
    {children}
  </Wrapper>
);

export default AppLayout;
