import React from "react";
import PropTypes from "prop-types";

const StickyFooterWrapper = ({ children }) => (
  <div className="sticky-footer-wrapper">{children}</div>
);

StickyFooterWrapper.propTypes = {
  children: PropTypes.node.isRequired
};

export default StickyFooterWrapper;
