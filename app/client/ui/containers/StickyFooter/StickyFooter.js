// @flow
import * as React from "react";

type Props = {
  children: React.Node
};

const StickyFooter = ({ children }: Props) => (
  <div className="sticky-footer">{children}</div>
);

export default StickyFooter;
