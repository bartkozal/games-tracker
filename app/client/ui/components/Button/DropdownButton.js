// @flow
import * as React from "react";
import ChevronIcon from "ui/foundations/icon/chevron.svg";
import Button from "./Button";

type Props = {
  children: React.Node
};

const DropdownButton = ({ children }: Props) => (
  <Button className="button-dropdown">
    {children}
    <ChevronIcon className="button-dropdown-icon" />
  </Button>
);

export default DropdownButton;
