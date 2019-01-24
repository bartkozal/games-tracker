// @flow
import * as React from "react";

type Props = {
  children: React.Node
};

const StickyFooterWrapper = ({ children }: Props) => (
  <div className="has-sticky-footer">{children}</div>
);

export default StickyFooterWrapper;
