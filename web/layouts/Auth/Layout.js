// @flow
import React, { type Node } from "react";
import Wrapper from "ui/Wrapper";

type Props = {
  children: Node
};

const AuthLayout = ({ children }: Props) => <Wrapper>{children}</Wrapper>;

export default AuthLayout;
