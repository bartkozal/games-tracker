// @flow
import * as React from "react";
import Button from "./Button";

type Props = {
  children: React.Node,
  onClick: Function
};

const SmallOutlineButton = ({ children, onClick }: Props) => (
  <Button className="text-small button-small button-outline" onClick={onClick}>
    {children}
  </Button>
);

export default SmallOutlineButton;
