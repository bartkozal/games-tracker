// @flow
import * as React from "react";
import Button from "./Button";

type Props = {
  onClick: () => void,
  children: React.Node
};

const DestructiveButton = ({ onClick, children }: Props) => (
  <Button className="button-destructive" onClick={onClick} testId="destructive">
    {children}
  </Button>
);

export default DestructiveButton;
