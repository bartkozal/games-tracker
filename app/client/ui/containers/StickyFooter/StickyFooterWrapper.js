// @flow
import * as React from "react";

type Props = {
  children: React.Node
};

const StickyFooterWrapper = ({ children }: Props) => (
  <div className="sticky-footer-wrapper">{children}</div>
);

export default StickyFooterWrapper;
