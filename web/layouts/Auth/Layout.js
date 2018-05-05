// @flow
import React, { type Node } from "react";
import Wrapper from "ui/Wrapper";
import Container from "ui/Container";
import Logo from "ui/Logo";

type Props = {
  children: Node
};

const AuthLayout = ({ children }: Props) => (
  <Wrapper narrow>
    <Container>
      <Logo />
    </Container>
    {children}
  </Wrapper>
);

export default AuthLayout;
