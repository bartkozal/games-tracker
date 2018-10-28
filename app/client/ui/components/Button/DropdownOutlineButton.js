// @flow
import * as React from "react";
import ChevronIcon from "ui/foundations/icon/chevron.svg";
import Button from "./Button";

type Props = {
  children: React.Node
};

const DropdownOutlineButton = ({ children }: Props) => (
  <Button className="button-dropdown button-outline">
    {children}
    <ChevronIcon className="button-dropdown-icon button-dropdown-outline-icon" />
  </Button>
);

export default DropdownOutlineButton;
