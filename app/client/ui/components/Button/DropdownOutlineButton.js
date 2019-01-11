// @flow
import * as React from "react";
import Icon from "ui/components/Icon";
import Button from "./Button";

type Props = {
  children: React.Node
};

const DropdownOutlineButton = ({ children }: Props) => (
  <Button className="button-dropdown button-outline" testId={String(children)}>
    {children}
    <Icon name="chevron" color="primary" className="button-dropdown-icon" />
  </Button>
);

export default DropdownOutlineButton;
