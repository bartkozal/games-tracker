// @flow
import * as React from "react";
import "./container.css";

type Props = {
  children: React.Node
};

const Container = ({ children }: Props) => (
  <div className="container">{children}</div>
);

export default Container;
