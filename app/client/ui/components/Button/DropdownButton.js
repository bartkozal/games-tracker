// @flow
import * as React from "react";
import Icon from "ui/components/Icon";
import Button from "./Button";

type Props = {
  children: React.Node
};

const DropdownButton = ({ children }: Props) => (
  <Button className="button-dropdown" testId={String(children)}>
    {children}
    <Icon name="chevron" color="light" className="button-dropdown-icon" />
  </Button>
);

export default DropdownButton;
