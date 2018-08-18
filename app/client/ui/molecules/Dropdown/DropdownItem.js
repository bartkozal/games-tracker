import React from "react";
import PropTypes from "prop-types";
import { kebabCase } from "lodash";
import $DropdownItem from "./$DropdownItem";

const DropdownItem = ({ onClick, children }) => (
  <$DropdownItem
    data-test={`dropdown-item-${kebabCase(children)}`}
    onClick={onClick}
  >
    {children}
  </$DropdownItem>
);

DropdownItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
};

export default DropdownItem;
