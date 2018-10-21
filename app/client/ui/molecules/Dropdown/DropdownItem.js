import React from "react";
import PropTypes from "prop-types";
import { kebabCase } from "lodash";
import $DropdownItem from "./$DropdownItem";

const DropdownItem = ({ onClick, children, destructive }) => (
  <$DropdownItem
    data-cy={`dropdown-item-${kebabCase(children)}`}
    onClick={onClick}
    destructive={destructive}
  >
    {children}
  </$DropdownItem>
);

DropdownItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  destructive: PropTypes.bool
};

export default DropdownItem;
