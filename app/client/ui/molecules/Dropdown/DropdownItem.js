import React from "react";
import PropTypes from "prop-types";
import { kebabCase } from "lodash";
import StyledDropdownItem from "./StyledDropdownItem";

const DropdownItem = ({ onClick, children }) => (
  <StyledDropdownItem
    data-test={`dropdown-item-${kebabCase(children)}`}
    onClick={onClick}
  >
    {children}
  </StyledDropdownItem>
);

DropdownItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
};

export default DropdownItem;
