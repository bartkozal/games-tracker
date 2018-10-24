import React from "react";
import PropTypes from "prop-types";

const StickyFooter = ({ children }) => (
  <div className="sticky-footer">{children}</div>
);

StickyFooter.propTypes = {
  children: PropTypes.node.isRequired
};

export default StickyFooter;
